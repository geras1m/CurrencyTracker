import { IColors, IFontSizes, IFontWeight, IGradients, ITheme } from '@constants/theme/types';

export const fontSizes: IFontSizes = {
  px16: '16px',
  px20: '20px',
  px22: '22px',
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
  black1: '#202025',
  black2: '#181818',
  black3: '#000000B2',
  black4: '#1B2028',
  black5: '#1B2028',
  white: '#ffffff',
  white1: '#cdcdd7',
  white2: '#D9D9D9',
  grey: '#474747',
  grey1: '#A7B2C3',
  grey2: '#898989',
  green: '#16C782',
  green1: '#00BC4F',
  green2: '#008139',
  brown: '#795548',
  orange: '#ecf45a',
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
  bgColorCards: colors.white1,
  currencyTitle: colors.black2,
  currencyText: colors.brown,
  bgModalMenu: colors.grey1,
};

export const darkTheme: ITheme = {
  fontSizes: { ...fontSizes },
  fontWeight: { ...fontWeight },
  gradients: { ...gradients },
  colors: { ...colors },
  bg: colors.black,
  toggle: colors.white,
  fontNavBar: colors.white2,
  fontFooterText: colors.white,
  fontCurrencyTitle: colors.white,
  fontCurrencyTime: colors.white2,
  bgColorCards: colors.black1,
  currencyTitle: colors.white2,
  currencyText: colors.grey1,
  bgModalMenu: colors.black,
};

export const mediaSizes = {
  maxWidth1250px: '1250px',
  maxWidth1050px: '1050px',
  maxWidth1000px: '1000px',
  maxWidth850px: '850px',
  maxWidth750px: '750px',
  maxWidth650px: '650px',
  maxWidth450px: '450px',
};
