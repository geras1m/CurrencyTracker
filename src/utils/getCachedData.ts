import { getLatestExchangeRates } from '@root/services/getLatestExchangeRates';
import { ICurrenciesResponse, ICurrenciesResponseData, IGetListCachedCurrencies } from '@root/types';
import { addToLocalStorage, getFromLocalStorage } from '@utils/localstorage';

const cachedCurrencyTimeKey = 'currencies-date';
const cachedCurrencyDateKey = 'currencies-list';
const millisecondsInDay = 86_400_000;

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

// export const getCachedCurrency = () => {};
