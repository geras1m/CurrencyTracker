import { Button } from '@pages/Timeline/styled';
import { PureComponent } from 'react';

interface IChartButton {
  handleGetRandomData: (date: number, count: number) => void;
}

export class ChartButton extends PureComponent<IChartButton, object> {
  render() {
    const { handleGetRandomData } = this.props;
    const dataElementsCount = 30;
    const startDate = Date.parse('2024-03-01');

    return (
      <Button type='button' onClick={() => handleGetRandomData(startDate, dataElementsCount)}>
        Create a random chart
      </Button>
    );
  }
}
