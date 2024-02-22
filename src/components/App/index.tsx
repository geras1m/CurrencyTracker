import GlobalStyles from '@components/App/styled';
import Header from '@components/Header';
import Main from '@components/Main';
import { darkTheme, lightTheme } from '@constants/theme/theme';
import { ITheme, ThemeType, ThemeValue } from '@constants/theme/types';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

const App = () => {
  const themeFromStore = (localStorage.getItem('theme') as ThemeType) ?? ThemeValue.light;
  const [theme, setTheme] = useState<ThemeType>(themeFromStore);

  const handleToSwitchTheme = (theme: ThemeType) => {
    const themeValue = theme === ThemeValue.light ? ThemeValue.dark : ThemeValue.light;
    localStorage.setItem('theme', themeValue);
    setTheme(themeValue);
  };

  const currentTheme: ITheme = theme === ThemeValue.light ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Header theme={theme} switchTheme={handleToSwitchTheme} />
      {/* <Poster/> */}
      <Main />
      {theme}
      {/* <Footer/> */}
    </ThemeProvider>
  );
};
export default App;
