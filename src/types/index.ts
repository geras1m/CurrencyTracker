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
  symbolBG: string;
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

export interface IModalData {
  code: string;
  rate: number;
  name: string;
}

export interface IFooterLinks {
  column: string;
  links: string[];
}

export interface IFooterData {
  title: string;
  text: string;
  copyright: string;
}
