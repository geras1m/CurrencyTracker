import { ThemeType } from '@constants/theme/types';

export interface IThemeProps {
  theme: ThemeType;
  switchTheme: (theme: ThemeType) => void;
}
