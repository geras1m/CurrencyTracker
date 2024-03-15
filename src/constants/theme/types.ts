export interface IFontSizes {
  px16: string;
  px20: string;
  px22: string;
  px24: string;
  px25: string;
  px26: string;
  px28: string;
  px32: string;
  px35: string;
  px76: string;
}

export interface IColors {
  black: string;
  grey: string;
  black1: string;
  white1: string;
  white: string;
  white2: string;
  grey1: string;
  black2: string;
  brown: string;
  black3: string;
  black4: string;
  black5: string;
  grey2: string;
  green: string;
  green1: string;
  green2: string;
  green3: string;
  orange: string;
  red: string;
}

export interface IGradients {
  text: string;
  background: string;
}

export interface IFontWeight {
  light: string;
  normal: string;
  medium: string;
  semibold: string;
  bold: string;
}

interface IThemeColorsExtensions extends IColors {
  bg: string;
  toggle: string;
  fontNavBar: string;
  fontFooterText: string;
  fontCurrencyTitle: string;
  fontCurrencyTime: string;
  bgColorCards: string;
  currencyTitle: string;
  currencyText: string;
  bgModalMenu: string;
}

export interface ITheme {
  fontSizes: IFontSizes;
  fontWeight: IFontWeight;
  gradients: IGradients;
  colors: IThemeColorsExtensions;
}

export enum ThemeValue {
  light = 'light',
  dark = 'dark',
}

export type ThemeType = 'light' | 'dark';
