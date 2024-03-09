import GlobalStyles from '@components/App/styled';
import { Banner } from '@components/Banner';
import { Footer } from '@components/Footer';
import Header from '@components/Header';
import Main from '@components/Main';
import { darkTheme, lightTheme } from '@constants/theme/theme';
import { ITheme, ThemeType, ThemeValue } from '@constants/theme/types';
import { addToLocalStorage, getFromLocalStorage } from '@utils/localstorage';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

const cachedAppThemeKey = 'theme';

const App = () => {
  const lastUsedTheme = (getFromLocalStorage(cachedAppThemeKey) as ThemeType) ?? ThemeValue.dark;
  const [theme, setTheme] = useState<ThemeType>(lastUsedTheme);

  const handleToSwitchTheme = (currentTheme: ThemeType) => {
    const themeValue = currentTheme === ThemeValue.light ? ThemeValue.dark : ThemeValue.light;
    addToLocalStorage(cachedAppThemeKey, themeValue);
    setTheme(themeValue);
  };

  const currentTheme: ITheme = theme === ThemeValue.light ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Header theme={theme} switchTheme={handleToSwitchTheme} />
      <Banner />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};
export default App;
