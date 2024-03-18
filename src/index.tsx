import { App } from '@components/App';
import GlobalStyles from '@components/App/styled';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { ThemeProvider } from '@components/ThemeProvider';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ThemeProvider>
    <ErrorBoundary>
      <HashRouter>
        <GlobalStyles />
        <App />
      </HashRouter>
    </ErrorBoundary>
  </ThemeProvider>,
);
