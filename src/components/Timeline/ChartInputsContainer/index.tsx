import { Button } from '@components/Timeline/ChartButton/styled';
import { ChartInput } from '@components/Timeline/ChartInput';
import { ChartInputWrapper } from '@components/Timeline/ChartInputsContainer/styled';
import { IChartData } from '@root/types';
import { Component } from 'react';

interface IChartInputsContainerProps {
  setDataForChart: (data: IChartData[]) => void;
}

interface IChartInputsContainerState {
  inputsData: [] | IChartData[];
}

export class ChartInputsContainer extends Component<IChartInputsContainerProps, IChartInputsContainerState> {
  daysCount = 30;

  constructor(props: IChartInputsContainerProps) {
    super(props);
    this.state = {
      inputsData: [],
    };
  }

  addDataFromInput = (newData: IChartData) => {
    const { inputsData } = this.state;
    this.setState((state) => ({ ...state, inputsData: [...inputsData, newData] }));
  };

  createChart = () => {
    const { setDataForChart } = this.props;
    const { inputsData } = this.state;
    setDataForChart(inputsData);

    this.setState((state) => ({ ...state, inputsData: [] }));
  };

  render() {
    const { inputsData } = this.state;
    const isDisabled = inputsData.length >= this.daysCount;

    return (
      <ChartInputWrapper data-testid='chart-input-container'>
        <ChartInput
          isDisabled={isDisabled}
          daysCount={this.daysCount}
          addDataFromInput={this.addDataFromInput}
        />
        <Button
          data-testid='create-chart-btn'
          type='button'
          disabled={!isDisabled}
          onClick={this.createChart}
        >
          Create the chart
        </Button>
      </ChartInputWrapper>
    );
  }
}
