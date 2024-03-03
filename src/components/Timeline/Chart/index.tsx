import 'chart.js/auto';
import 'chartjs-adapter-luxon';

import { CanvasChart } from '@components/Timeline/Chart/styled';
import { observer } from '@root/observer';
import { IChart, IChartData } from '@root/types';
import { Chart } from 'chart.js';
import {
  CandlestickController,
  CandlestickElement,
  OhlcController,
  OhlcElement,
} from 'chartjs-chart-financial';
import { Component, createRef, RefObject } from 'react';

Chart.register(CandlestickController, CandlestickElement, OhlcController, OhlcElement);

interface IChartComponent {
  data: [] | IChartData[];
}

export class ChartComponent extends Component<IChartComponent, object> {
  chartRef: RefObject<HTMLCanvasElement> = createRef();

  chart: IChart | undefined;

  componentDidMount() {
    this.createChart([]);
  }

  componentDidUpdate(prevProps: Readonly<IChartComponent>) {
    if (this.chart) this.chart.destroy();
    const { data } = this.props;
    this.createChart(data);

    const isNotify = JSON.stringify(prevProps.data) !== JSON.stringify(data);
    if (isNotify && data.length > 0) observer.notify();
  }

  createChart = (data: IChartData[]) => {
    const ctx = this.chartRef.current!.getContext('2d')!;

    this.chart = new Chart(ctx, {
      type: 'candlestick',
      data: {
        datasets: [
          {
            data,
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            title: {
              display: true,
              text: 'Value',
              align: 'end',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Day',
              align: 'end',
            },
          },
        },
        plugins: {
          title: {
            display: false,
          },
          legend: {
            display: false,
          },
        },
      },
    });
  };

  render() {
    return (
      <div>
        <CanvasChart ref={this.chartRef} />
      </div>
    );
  }
}
