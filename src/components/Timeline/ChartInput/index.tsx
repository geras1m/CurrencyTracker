import { IChartData } from '@root/types';
import { ChangeEvent, Component } from 'react';

interface IChartInputProps {
  addDataFromInput: (newData: IChartData) => void;
}

interface IChartInputState {
  day: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

const inputConfig = ['open', 'high', 'low', 'close'];

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

    if (num > 30 || num < 0) return;

    this.setState((state) => ({ ...state, [name]: num }));
  };

  addData = () => {
    const { addDataFromInput } = this.props;
    const { open, high, low, close, day } = this.state;
    const time = Date.parse(`2024-03-${day}`);

    this.setState((state) => ({ ...state, day: day + 1 }));

    addDataFromInput({ x: time, o: open, h: high, l: low, c: close });
    // условие для сброса дней когда наступит 30 день
    this.setState((state) => ({ ...state, open: 0, high: 0, low: 0, close: 0 }));
  };

  render() {
    const { day, open, high, low, close } = this.state;
    const isDisabled = day > 30 || !open || !high || !low || !close;
    const prices = [open, high, low, close];

    return (
      <div>
        <p>Day {day} / 30</p>
        {inputConfig.map((value, index) => {
          return (
            <input
              type='number'
              key={value}
              value={prices[index] || ''}
              onChange={this.handleOnChange}
              name={value}
              placeholder={value}
            />
          );
        })}

        <button disabled={isDisabled} type='button' onClick={this.addData}>
          Add inputs data
        </button>
      </div>
    );
  }
}
