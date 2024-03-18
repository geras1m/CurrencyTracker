import { baseCurrency } from '@root/constants';
import { ICurrenciesResponse } from '@root/types';
import axios from 'axios';

const { API_KEY, API_BASIC_URL } = process.env;

export async function getLatestExchangeRates(currencies: string | string[], base?: string) {
  const { data } = await axios.get<ICurrenciesResponse>(`${API_BASIC_URL}/latest`, {
    params: {
      currencies: String(currencies),
      base_currency: base ?? baseCurrency,
      apikey: API_KEY,
    },
  });
  return data;
}
