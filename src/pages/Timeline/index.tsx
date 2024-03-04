import { Container } from '@components/App/styled';
import { LastUpdateTime } from '@components/LastUpdateTime';
import { ChartComponent } from '@components/Timeline/Chart';
import { ChartButton } from '@components/Timeline/ChartButton';
import { ChartInputsContainer } from '@components/Timeline/ChartInputsContainer';
import { ChartNotifyModal } from '@components/Timeline/ChartNotifyModal';
import { CurrencySelector } from '@components/Timeline/CurrencySelector';
import { ChartSettingsWrapper, MainTimeline } from '@pages/Timeline/styled';
import { cachedCurrencyTimeKey } from '@root/constants';
import { IChartData } from '@root/types';
import { getRandomData } from '@utils/chartUtils';
import { getFromLocalStorage } from '@utils/localstorage';
import { parseTimeFromMilliseconds } from '@utils/time';
import { PureComponent } from 'react';

interface IState {
  currency: string;
  chartData: [] | IChartData[];
}

class Timeline extends PureComponent<object, IState> {
  constructor(props: object) {
    super(props);
    this.state = {
      currency: 'USD',
      chartData: [],
    };
  }

  handleSetCurrency = (newCurrency: string) => {
    this.setState((state) => ({ ...state, currency: newCurrency }));
  };

  handleGetRandomData = (date: number, count: number) => {
    const data = getRandomData(date, count);
    this.setState((state) => ({ ...state, chartData: data }));
  };

  setDataForChart = (data: IChartData[]) => {
    this.setState((state) => ({ ...state, chartData: data }));
  };

  render() {
    const { currency, chartData } = this.state;
    const isTime = getFromLocalStorage(cachedCurrencyTimeKey);
    const parsedTime = isTime ? parseTimeFromMilliseconds(isTime) : '--:-- PM';

    return (
      <MainTimeline>
        <Container>
          <ChartNotifyModal currentCurrency={currency} />
          <LastUpdateTime time={parsedTime} />
          <ChartSettingsWrapper>
            <CurrencySelector currency={currency} setCurrency={this.handleSetCurrency} />
            <ChartButton handleGetRandomData={this.handleGetRandomData} />
          </ChartSettingsWrapper>
          <ChartInputsContainer setDataForChart={this.setDataForChart} />

          <ChartComponent data={chartData} />
        </Container>
      </MainTimeline>
    );
  }
}

export default Timeline;
