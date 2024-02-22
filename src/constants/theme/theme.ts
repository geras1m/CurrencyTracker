import { IColors, IFontSizes, IGradients } from '@constants/theme/types';

const fontSizes: IFontSizes = {
  px20: '20px',
  px24: '24px',
  px25: '25px',
  px26: '26px',
  px28: '28px',
  px32: '32px',
  px35: '35px',
  px76: '76px',
};

const fontWeight = {
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

const colors: IColors = {
  black: '#030304',
  black1: '#202025',
  black2: '#474747',
  white: '#ffffff',
  grey: '#D9D9D9',
  grey1: '#A7B2C3',
  grey2: '#898989',
  green: '#16C782',
  green1: '#00BC4F',
  green2: '#008139',
  red: '#EA3943',
  orange: '#FF971D',
};

const appColors = {};

const gradients: IGradients = {
  text: 'linear-gradient(90deg, rgba(0,206,44,1) 0%, rgba(174,223,35,1) 50%, rgba(163,220,0,1) 100%)',
  chart: 'linear-gradient(180deg, rgba(0,206,44,1) 0%, rgba(174,223,35,1) 50%, rgba(163,220,0,1) 100%)',
  background:
    'linear-gradient(58deg, rgba(18,18,18,1) 0%, rgba(36,121,64,0.8072478991596639) 50%, rgba(18,18,18,1) 100%)',
};

export const lightTheme = {
  fontSizes,
  fontWeight,
  gradients,
  appColors,
};

export const darkTheme = {
  ...lightTheme,
  appColors: {}, // указываем темные цвета
};
