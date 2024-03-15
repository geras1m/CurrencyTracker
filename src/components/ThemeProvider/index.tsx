import { darkTheme, lightTheme } from '@constants/theme/theme';
import { ITheme, ThemeType, ThemeValue } from '@constants/theme/types';
import { IThemeProps } from '@root/types';
import { addToLocalStorage, getFromLocalStorage } from '@utils/localstorage';
import { createContext, FC, ReactNode, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

interface IThemeProvider {
  children: ReactNode;
}

const cachedAppThemeKey = 'theme';

export const ThemeContext = createContext<IThemeProps>({
  theme: ThemeValue.dark,
  switchTheme: () => {},
});

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const lastUsedTheme =
    getFromLocalStorage(cachedAppThemeKey) === ThemeValue.dark ? ThemeValue.dark : ThemeValue.light;

  const [theme, setTheme] = useState<ThemeType>(lastUsedTheme);

  const handleToSwitchTheme = (currentTheme: ThemeType) => {
    const themeValue = currentTheme === ThemeValue.light ? ThemeValue.dark : ThemeValue.light;
    addToLocalStorage(cachedAppThemeKey, themeValue);
    setTheme(themeValue);
  };

  const currentTheme: ITheme = theme === ThemeValue.light ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, switchTheme: handleToSwitchTheme }!}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
