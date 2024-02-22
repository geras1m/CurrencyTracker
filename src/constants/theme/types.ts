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
  black1: string;
  black2: string;
  white: string;
  grey: string;
  grey1: string;
  grey2: string;
  green: string;
  green1: string;
  green2: string;
  red: string;
  orange: string;
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
  bg: string;
  toggle: string;
  fontNavBar: string;
  fontFooterText: string;
}

export enum ThemeValue {
  light = 'light',
  dark = 'dark',
}

export type ThemeType = 'light' | 'dark';
