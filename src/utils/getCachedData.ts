import { getLatestExchangeRates } from '@root/services/getLatestExchangeRates';
import { ICurrenciesResponse, ICurrenciesResponseData, IGetListCachedCurrencies } from '@root/types';
import { addToLocalStorage, getFromLocalStorage } from '@utils/localstorage';

const cachedCurrencyTimeKey = 'currencies-date';
const cachedCurrencyDateKey = 'currencies-list';
const millisecondsInDay = 14_400_000;
// 4h - 14_400_000
// 24h - 86_400_000

const cacheDataAndTime = (dataTime: string | number, data: ICurrenciesResponseData) => {
  addToLocalStorage(cachedCurrencyTimeKey, dataTime.toString());
  addToLocalStorage(cachedCurrencyDateKey, JSON.stringify(data));
};

export const getListCachedCurrencies = async (currencies: string[]): Promise<IGetListCachedCurrencies> => {
  const cachedTime = Number(getFromLocalStorage(cachedCurrencyTimeKey));
  const cachedData = getFromLocalStorage(cachedCurrencyDateKey);

  const nowDate = Date.now();
  const isUpdateData = nowDate - cachedTime > millisecondsInDay;

  if (isUpdateData || !cachedData) {
    const data: ICurrenciesResponse = await getLatestExchangeRates(currencies);
    cacheDataAndTime(nowDate, data.data);
    return { time: nowDate.toString(), data: data.data };
  }

  const parseCachedData: ICurrenciesResponseData = JSON.parse(cachedData);
  return { time: cachedTime.toString(), data: parseCachedData };
};

export const getCachedCurrencyExchangeRate = async (
  currency: string,
  baseCurrency: string,
): Promise<number> => {
  const keyCachedCurrencyExchangeRate = `${currency}:${baseCurrency}`;
  const cachedData = sessionStorage.getItem(keyCachedCurrencyExchangeRate);

  if (cachedData) return Number(JSON.parse(cachedData));

  const responseData = await getLatestExchangeRates(currency, baseCurrency);
  const exchangeRateData = responseData.data[currency].value;

  sessionStorage.setItem(keyCachedCurrencyExchangeRate, exchangeRateData.toString());

  return exchangeRateData;
};
