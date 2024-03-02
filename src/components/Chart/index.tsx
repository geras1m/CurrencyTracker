import 'chart.js/auto';
import 'chartjs-adapter-luxon';

import { CanvasChart } from '@components/Chart/styled';
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

  componentDidUpdate() {
    if (this.chart) this.chart.destroy();
    const { data } = this.props;
    this.createChart(data);
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
              text: 'Days',
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

// [
//               {
//                 x: Date.parse('2024-03-01'),
//                 o: 1,
//                 h: 1.5,
//                 l: 1.04,
//                 c: 1.33,
//               },
//               {
//                 x: Date.parse('2024-03-02'),
//                 o: 1.01,
//                 h: 1.59,
//                 l: 1,
//                 c: 1.11,
//               },
//               {
//                 x: Date.parse('2024-03-03'),
//                 o: 1,
//                 h: 1.5,
//                 l: 1.04,
//                 c: 1.33,
//               },
//               {
//                 x: Date.parse('2024-03-04'),
//                 o: 3,
//                 h: 1.59,
//                 l: 1,
//                 c: 1.11,
//               },
//
//               {
//                 x: Date.parse('2024-03-05'),
//                 o: 1,
//                 h: 1.5,
//                 l: 1.04,
//                 c: 1.33,
//               },
//               {
//                 x: Date.parse('2024-03-06'),
//                 o: 1.01,
//                 h: 1.59,
//                 l: 1,
//                 c: 1.11,
//               },
//               {
//                 x: Date.parse('2024-03-07'),
//                 o: 1,
//                 h: 1.5,
//                 l: 1.04,
//                 c: 1.33,
//               },
//               {
//                 x: Date.parse('2024-03-08'),
//                 o: 3,
//                 h: 1.59,
//                 l: 1,
//                 c: 1.11,
//               },
//               {
//                 x: Date.parse('2024-03-09'),
//                 o: 1,
//                 h: 1.5,
//                 l: 1.04,
//                 c: 1.33,
//               },
//               {
//                 x: Date.parse('2024-03-10'),
//                 o: 1.01,
//                 h: 1.59,
//                 l: 1,
//                 c: 1.11,
//               },
//               {
//                 x: Date.parse('2024-03-11'),
//                 o: 1,
//                 h: 1.5,
//                 l: 1.04,
//                 c: 1.33,
//               },
//               {
//                 x: Date.parse('2024-03-12'),
//                 o: 3,
//                 h: 1.59,
//                 l: 1,
//                 c: 1.11,
//               },
//               {
//                 x: Date.parse('2024-03-13'),
//                 o: 1,
//                 h: 1.5,
//                 l: 1.04,
//                 c: 1.33,
//               },
//               {
//                 x: Date.parse('2024-03-14'),
//                 o: 1.01,
//                 h: 1.59,
//                 l: 1,
//                 c: 1.11,
//               },
//               {
//                 x: Date.parse('2024-03-15'),
//                 o: 1,
//                 h: 1.5,
//                 l: 1.04,
//                 c: 1.33,
//               },
//               {
//                 x: Date.parse('2024-03-16'),
//                 o: 3,
//                 h: 1.59,
//                 l: 1,
//                 c: 1.11,
//               },
//
//               {
//                 x: Date.parse('2024-03-17'),
//                 o: 1,
//                 h: 1.5,
//                 l: 1.04,
//                 c: 1.33,
//               },
//               {
//                 x: Date.parse('2024-03-18'),
//                 o: 1.01,
//                 h: 1.59,
//                 l: 1,
//                 c: 1.11,
//               },
//               {
//                 x: Date.parse('2024-03-19'),
//                 o: 1,
//                 h: 1.5,
//                 l: 1.04,
//                 c: 1.33,
//               },
//               {
//                 x: Date.parse('2024-03-20'),
//                 o: 3,
//                 h: 1.59,
//                 l: 1,
//                 c: 1.11,
//               },
//
//               {
//                 x: Date.parse('2024-03-21'),
//                 o: 1,
//                 h: 1.5,
//                 l: 1.04,
//                 c: 1.33,
//               },
//               {
//                 x: Date.parse('2024-03-22'),
//                 o: 1.01,
//                 h: 1.59,
//                 l: 1,
//                 c: 1.11,
//               },
//               {
//                 x: Date.parse('2024-03-23'),
//                 o: 1,
//                 h: 1.5,
//                 l: 1.04,
//                 c: 1.33,
//               },
//               {
//                 x: Date.parse('2024-03-24'),
//                 o: 3,
//                 h: 1.59,
//                 l: 1,
//                 c: 1.11,
//               },
//               {
//                 x: Date.parse('2024-03-25'),
//                 o: 1,
//                 h: 1.5,
//                 l: 1.04,
//                 c: 1.33,
//               },
//               {
//                 x: Date.parse('2024-03-26'),
//                 o: 1.01,
//                 h: 1.59,
//                 l: 1,
//                 c: 1.11,
//               },
//               {
//                 x: Date.parse('2024-03-27'),
//                 o: 1,
//                 h: 1.5,
//                 l: 1.04,
//                 c: 1.33,
//               },
//               {
//                 x: Date.parse('2024-03-28'),
//                 o: 3,
//                 h: 1.59,
//                 l: 1,
//                 c: 1.11,
//               },
//               {
//                 x: Date.parse('2024-03-29'),
//                 o: 1,
//                 h: 1.5,
//                 l: 1.04,
//                 c: 1.33,
//               },
//               {
//                 x: Date.parse('2024-03-30'),
//                 o: 1.01,
//                 h: 1.59,
//                 l: 1,
//                 c: 1.11,
//               },
//             ],
//           },
//         ]
