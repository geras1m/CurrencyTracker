import { getCachedCurrencyExchangeRate } from '@utils/getCachedData';
import { useEffect, useState } from 'react';

export const useExchangeRate = (
  currency: string,
  baseCurrency: string,
): [exchangeRate: null | number, isLoading: boolean, error: null | Error] => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [exchangeRate, setExchangeRate] = useState<null | number>(null);
  const [error, setError] = useState<null | Error>(null);

  const getExchangeRate = async () => {
    try {
      setIsLoading(true);
      const exchangeRateData = await getCachedCurrencyExchangeRate(currency, baseCurrency);
      setExchangeRate(exchangeRateData);
    } catch (e) {
      if (e instanceof Error) setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getExchangeRate();
  }, [currency, baseCurrency]);

  return [exchangeRate, isLoading, error];
};
