import { CurrenciesList, currencyDataTemplate } from '@root/constants';
import { IPreparedCurrenciesData } from '@root/types';
import { getListCachedCurrencies } from '@utils/getCachedData';
import { parseTimeFromMilliseconds } from '@utils/time';
import { useEffect, useState } from 'react';

export const useCurrenciesData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currencyData, setCurrencyData] = useState<IPreparedCurrenciesData | null>(null);
  const [error, setError] = useState<Error>();

  const getCurrenciesData = async () => {
    try {
      const { time, data } = await getListCachedCurrencies(CurrenciesList);
      const preparedTime = parseTimeFromMilliseconds(time);
      const preparedData = currencyDataTemplate.map((currency) => {
        const rate = data[currency.code].value;
        return { ...currency, rate };
      });

      setCurrencyData({
        time: preparedTime,
        data: preparedData,
      });
    } catch (e) {
      if (e instanceof Error) setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCurrenciesData();
  }, []);

  return { ...currencyData, isLoading, error };
};
