import { colors } from '@constants/theme/theme';
import { IChartData } from '@root/types';
import { Chart } from 'chart.js';

export const getChartConfig = (data: IChartData[], ctx: CanvasRenderingContext2D) => {
  return new Chart(ctx, {
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
          grid: {
            color: colors.grey1,
          },
        },
        x: {
          title: {
            display: true,
            text: 'Day',
            align: 'end',
          },
          grid: {
            color: colors.grey1,
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
