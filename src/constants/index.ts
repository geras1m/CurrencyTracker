import { ICurrencyDataTemplate } from '@root/types';

export const baseCurrency = 'USD';

export const CurrenciesList: string[] = [
  'BYN',
  'EUR',
  'SEK',
  'UAH',
  'PLN',
  'NOK',
  'INR',
  'AUD',
  'GEL',
  'USD',
];

export const currencyDataTemplate: ICurrencyDataTemplate[] = [
  {
    symbol: 'AU$',
    symbolBG: '#2A4628',
    name: 'Australian Dollar',
    code: 'AUD',
    rate: 1,
  },
  {
    symbol: 'Br',
    symbolBG: '#5A4B2C',
    name: 'Belarusian ruble',
    code: 'BYN',
    rate: 1,
  },
  {
    symbol: '€',
    symbolBG: '#452534',
    name: 'Euro',
    code: 'EUR',
    rate: 1,
  },
  {
    symbol: 'GEL',
    symbolBG: '#494F57',
    name: 'Georgian Lari',
    code: 'GEL',
    rate: 1,
  },
  {
    symbol: 'Rs',
    symbolBG: '#142E67',
    name: 'Indian Rupee',
    code: 'INR',
    rate: 1,
  },
  {
    symbol: 'Nkr',
    symbolBG: '#1D324B',
    name: 'Norwegian Krone',
    code: 'NOK',
    rate: 1,
  },
  {
    symbol: 'zł',
    symbolBG: '#3D2E28',
    name: 'Polish Zloty',
    code: 'PLN',
    rate: 1,
  },
  {
    symbol: 'Skr',
    symbolBG: '#5B2C2B',
    name: 'Swedish Krona',
    code: 'SEK',
    rate: 1,
  },
  {
    symbol: '₴',
    symbolBG: '#2C4D54',
    name: 'Ukrainian Hryvnia',
    code: 'UAH',
    rate: 1,
  },
  {
    symbol: '$',
    symbolBG: '#4D505B',
    name: 'US Dollar',
    code: 'USD',
    rate: 1,
  },
];
