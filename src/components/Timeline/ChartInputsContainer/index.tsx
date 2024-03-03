import { ChartInput } from '@components/Timeline/ChartInput';
import { IChartData } from '@root/types';
import { Component } from 'react';

interface IChartInputsContainerProps {
  setDataForChart: (data: IChartData[]) => void;
}

interface IChartInputsContainerState {
  inputsData: [] | IChartData[];
}

export class ChartInputsContainer extends Component<IChartInputsContainerProps, IChartInputsContainerState> {
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
    const isDisabled = inputsData.length !== 3;

    return (
      <div>
        <ChartInput addDataFromInput={this.addDataFromInput} />
        <button type='button' disabled={isDisabled} onClick={this.createChart}>
          Create Chart
        </button>
      </div>
    );
  }
}
