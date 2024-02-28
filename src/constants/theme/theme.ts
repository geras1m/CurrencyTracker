import { IColors, IFontSizes, IFontWeight, IGradients, ITheme } from '@constants/theme/types';

export const fontSizes: IFontSizes = {
  px20: '20px',
  px24: '24px',
  px25: '25px',
  px26: '26px',
  px28: '28px',
  px32: '32px',
  px35: '35px',
  px76: '76px',
};

export const fontWeight: IFontWeight = {
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

export const colors: IColors = {
  black: '#030304',
  border: '#474747',
  darkBgCards: '#202025',
  lightBgCards: '#cdcdd7',
  white: '#ffffff',
  darkTitle: '#D9D9D9',
  darkText: '#A7B2C3',
  lightTitle: '#181818',
  lightText: '#795548',
  modalWrapper: '#000000B2',
  footerLink: '#898989',
  updateLamp: '#16C782',
  selectedRoute: '#00BC4F',
  updateLampWave: '#008139',
  hover: '#b28d56',
};

export const gradients: IGradients = {
  text: 'linear-gradient(90deg, rgba(0,206,44,1) 0%, rgba(174,223,35,1) 50%, rgba(163,220,0,1) 100%)',
  background: 'linear-gradient(58deg, rgba(18,18,18,0) 20%, rgba(36,121,64,0.5) 50%, rgba(18,18,18,0) 80%)',
};

export const lightTheme: ITheme = {
  fontSizes: { ...fontSizes },
  fontWeight: { ...fontWeight },
  gradients: { ...gradients },
  colors: { ...colors },
  bg: colors.white,
  toggle: colors.black,
  fontNavBar: colors.black,
  fontFooterText: colors.black,
  fontCurrencyTitle: colors.black,
  fontCurrencyTime: colors.black,
  bgColorCards: colors.lightBgCards,
  currencyTitle: colors.lightTitle,
  currencyText: colors.lightText,
  bgModalMenu: colors.darkText,
};

export const darkTheme: ITheme = {
  fontSizes: { ...fontSizes },
  fontWeight: { ...fontWeight },
  gradients: { ...gradients },
  colors: { ...colors },
  bg: colors.black,
  toggle: colors.white,
  fontNavBar: colors.darkTitle,
  fontFooterText: colors.white,
  fontCurrencyTitle: colors.white,
  fontCurrencyTime: colors.darkTitle,
  bgColorCards: colors.darkBgCards,
  currencyTitle: colors.darkTitle,
  currencyText: colors.darkText,
  bgModalMenu: colors.black,
};
