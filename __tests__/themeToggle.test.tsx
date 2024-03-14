import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeToggle } from '@components/Header/ThemeToggle';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@constants/theme/theme';

describe('Theme toggle component', () => {
  it('should render the theme toggle', () => {
    const mockFn = jest.fn();

    render(
      <ThemeProvider theme={darkTheme}>
        <ThemeToggle theme={'light'} switchTheme={() => mockFn()} />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('toggle')).toBeInTheDocument();
    expect(screen.getByTestId('toggle-element')).toBeInTheDocument();
  });

  it('should call a switch function by clicking the theme toggle', () => {
    const mockFn = jest.fn();

    render(
      <ThemeProvider theme={darkTheme}>
        <ThemeToggle theme={'light'} switchTheme={() => mockFn()} />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByTestId('toggle'));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
