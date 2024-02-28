export interface IFontSizes {
  px20: string;
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
  border: string;
  darkBgCards: string;
  lightBgCards: string;
  white: string;
  darkTitle: string;
  darkText: string;
  lightTitle: string;
  lightText: string;
  modalWrapper: string;
  footerLink: string;
  updateLamp: string;
  selectedRoute: string;
  updateLampWave: string;
  hover: string;
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

export interface ITheme {
  fontSizes: IFontSizes;
  fontWeight: IFontWeight;
  gradients: IGradients;
  colors: IColors;
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

export enum ThemeValue {
  light = 'light',
  dark = 'dark',
}

export type ThemeType = 'light' | 'dark';
