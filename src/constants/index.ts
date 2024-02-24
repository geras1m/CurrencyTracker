import { ICurrencyDataTemplate } from '@root/types';

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
  'JPY',
];

export const currencyDataTemplate: ICurrencyDataTemplate[] = [
  {
    symbol: 'AU$',
    name: 'Australian Dollar',
    code: 'AUD',
    rate: 1,
  },
  {
    symbol: 'Br',
    name: 'Belarusian ruble',
    code: 'BYN',
    rate: 1,
  },
  {
    symbol: '€',
    name: 'Euro',
    code: 'EUR',
    rate: 1,
  },
  {
    symbol: 'GEL',
    name: 'Georgian Lari',
    code: 'GEL',
    rate: 1,
  },
  {
    symbol: 'Rs',
    name: 'Indian Rupee',
    code: 'INR',
    rate: 1,
  },
  {
    symbol: '¥',
    name: 'Japanese Yen',
    code: 'JPY',
    rate: 1,
  },
  {
    symbol: 'Nkr',
    name: 'Norwegian Krone',
    code: 'NOK',
    rate: 1,
  },
  {
    symbol: 'zł',
    name: 'Polish Zloty',
    code: 'PLN',
    rate: 1,
  },
  {
    symbol: 'Skr',
    name: 'Swedish Krona',
    code: 'SEK',
    rate: 1,
  },
  {
    symbol: '₴',
    name: 'Ukrainian Hryvnia',
    code: 'UAH',
    rate: 1,
  },
];
