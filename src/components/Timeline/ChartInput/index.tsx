import { Button } from '@components/Timeline/ChartButton/styled';
import {
  ChatInputContainer,
  ChatInputDays,
  ChatInputField,
  ChatInputFieldsWrapper,
} from '@components/Timeline/ChartInput/styled';
import { IChartData } from '@root/types';
import { ChangeEvent, Component } from 'react';

interface IChartInputProps {
  addDataFromInput: (dayIndex: number, newData: IChartData) => void;
  daysCount: number;
  isDisabled: boolean;
  userDataBer30Days: [] | IChartData[];
}

interface IChartInputState {
  day: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

const inputConfig = ['open', 'high', 'low', 'close'];
const minPrice = 0;
const maxPrice = 30;

export class ChartInput extends Component<IChartInputProps, IChartInputState> {
  constructor(props: IChartInputProps) {
    super(props);
    this.state = {
      day: 1,
      open: 0,
      high: 0,
      low: 0,
      close: 0,
    };
  }

  handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    let num = Math.abs(Number.parseFloat(value));
    if (Number.isNaN(num)) num = 0;
    if (num > maxPrice || num < minPrice) return;
    this.setState((state) => ({ ...state, [name]: num }));
  };

  addData = () => {
    const { addDataFromInput, daysCount } = this.props;
    const { open, high, low, close, day } = this.state;
    const time = Date.parse(`2024-03-${day}`);

    if (day <= daysCount) this.setState((state) => ({ ...state, day: day + 1 }));
    addDataFromInput(day, { x: time, o: open, h: high, l: low, c: close });
    if (day === daysCount) this.setState((state) => ({ ...state, day: 1 }));
    const { h, l, o, c } = this.getAddedInputsData(day + 1);

    this.setState((state) => ({ ...state, open: o, high: h, low: l, close: c }));
  };

  goToPreviousDay = () => {
    const { day } = this.state;
    if (day > 1) {
      const { h, l, o, c } = this.getAddedInputsData(day - 1);
      this.setState((state) => ({ ...state, open: o, high: h, low: l, close: c, day: day - 1 }));
    }
  };

  getAddedInputsData = (day: number) => {
    const { userDataBer30Days } = this.props;
    const userAddedData = userDataBer30Days[day - 1];
    return userAddedData || { open: 0, high: 0, low: 0, close: 0 };
  };

  goToNextDay = () => {
    const { day } = this.state;
    const { daysCount, userDataBer30Days } = this.props;
    if (day < daysCount && day <= userDataBer30Days.length) {
      const { h, l, o, c } = this.getAddedInputsData(day + 1);

      this.setState((state) => ({ ...state, open: o, high: h, low: l, close: c, day: day + 1 }));
    }
  };

  render() {
    const { daysCount, isDisabled: isDataLimit } = this.props;
    const { day, open, high, low, close } = this.state;
    const isDisabled = day > daysCount || !open || !high || !low || !close || isDataLimit;
    const prices = [open, high, low, close];

    return (
      <ChatInputContainer>
        <ChatInputFieldsWrapper>
          <button type='button' onClick={this.goToPreviousDay}>
            prev
          </button>
          <button type='button' onClick={this.goToNextDay}>
            next
          </button>
          <ChatInputDays>
            Day: {day} / {daysCount}
          </ChatInputDays>

          {inputConfig.map((value, index) => {
            return (
              <ChatInputField
                data-testid='timeline-input'
                type='number'
                key={value}
                value={prices[index] || ''}
                onChange={this.handleOnChange}
                name={value}
                placeholder={value}
              />
            );
          })}

          <Button
            data-testid='timeline-add-data-btn'
            disabled={isDisabled}
            type='button'
            onClick={this.addData}
          >
            Add input data
          </Button>
        </ChatInputFieldsWrapper>
      </ChatInputContainer>
    );
  }
}
