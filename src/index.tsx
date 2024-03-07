import App from '@components/App';
import { ErrorBoundary } from '@components/ErrorBoundary';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ErrorBoundary>
    <HashRouter>
      <App />
    </HashRouter>
  </ErrorBoundary>,
);
