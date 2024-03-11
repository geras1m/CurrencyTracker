import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@constants/theme/theme';
import { ChartInputsContainer } from '@components/Timeline/ChartInputsContainer';
import { userEvent } from '@testing-library/user-event';
import { ChartInput } from '@components/Timeline/ChartInput';

describe('Timeline modal', () => {
  it('should render the Timeline modal', () => {
    const mockFn = jest.fn();

    render(
      <ThemeProvider theme={darkTheme}>
        <ChartInputsContainer setDataForChart={mockFn} />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('chart-input-container')).toBeInTheDocument();
    expect(screen.getByTestId('create-chart-btn')).toBeInTheDocument();
    const inputs = screen.getAllByTestId('timeline-input');
    expect(inputs.length).toBe(4);
  });

  it('should call function which add data for one day to create the chart after entering all inputs', async () => {
    const mockFn = jest.fn();

    render(
      <ThemeProvider theme={darkTheme}>
        <ChartInput isDisabled={false} addDataFromInput={mockFn} daysCount={30} />
      </ThemeProvider>,
    );
    const inputs = screen.getAllByTestId('timeline-input');

    await userEvent.type(inputs[0], '1.7');
    await userEvent.type(inputs[1], '2');
    await userEvent.type(inputs[2], '1.8');
    await userEvent.type(inputs[3], '1.8');

    await userEvent.click(screen.getByTestId('timeline-add-data-btn'));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
