import { ThemeType } from '@constants/theme/types';

export interface IThemeProps {
  theme: ThemeType;
  switchTheme: (theme: ThemeType) => void;
}

export interface ICurrenciesResponseData {
  [key: string]: {
    code: string;
    value: number;
  };
}

export interface ICurrenciesResponse {
  meta: {
    last_updated_at: string;
  };
  data: ICurrenciesResponseData;
}

export interface ICurrencyDataTemplate {
  symbol: string;
  name: string;
  code: string;
  rate: number;
}

export interface IGetListCachedCurrencies {
  time: string;
  data: ICurrenciesResponseData;
}

export interface IPreparedCurrenciesData {
  time: string;
  data: ICurrencyDataTemplate[];
}
