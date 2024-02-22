import GlobalStyles from '@components/App/styled';
import Header from '@components/Header';
import Main from '@components/Main';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

const App = () => {
  // const [theme, setTheme] = useState('light');

  // TODO: прокидываем значение THEME  в header -> toggle

  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <Header />
      {/* <Poster/> */}
      <Main />
      {/* <Footer/> */}
    </ThemeProvider>
  );
};
export default App;
