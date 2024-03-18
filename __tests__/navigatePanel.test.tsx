import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { NavBar } from '@components/Header/NavBar';
import { darkTheme } from '@constants/theme/theme';
import { BrowserRouter } from 'react-router-dom';

describe('Navigate component', () => {
  it('should render the Navigate component', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <NavBar />
        </ThemeProvider>
      </BrowserRouter>,
    );

    expect(screen.getByTestId('navigate-bar')).toBeInTheDocument();
  });

  it('should redirect to timeline page by clicking on nav link Timeline', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <NavBar />
        </ThemeProvider>
      </BrowserRouter>,
    );

    const timelineLink = screen.getByText('Timeline');

    fireEvent.click(timelineLink);
    expect(location.pathname).toBe('/timeline');
  });

  it('should set an active class when the user clicks on the link', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <NavBar />
        </ThemeProvider>
      </BrowserRouter>,
    );

    const timelineLink = screen.getByText('Timeline');

    fireEvent.click(timelineLink);
    expect(timelineLink).toHaveClass('active');
  });
});
