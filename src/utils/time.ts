import { cachedCurrencyTimeKey } from '@root/constants';
import { getFromLocalStorage } from '@utils/localstorage';

export const parseTimeFromMilliseconds = (milliseconds: string | number): string =>
  new Date(Number(milliseconds)).toLocaleTimeString('en-US', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
  });

export const getTimeFromLocalstorage = () => {
  const isTime = getFromLocalStorage(cachedCurrencyTimeKey);
  return isTime ? parseTimeFromMilliseconds(isTime) : '--:-- PM';
};
