import {
  ModalCurrencyInput,
  ModalCurrencyMenu,
  ModalCurrencyMenuWrapper,
  ModalMenuItem,
  ModalOutput,
  ModalSelectedCurrency,
} from '@components/Currencies/CurrencyModalContent/styled';
import { useExchangeRate } from '@hooks/useExchangeRate';
import { useOutsideClick } from '@hooks/useOutClick';
import { baseCurrency, CurrenciesList } from '@root/constants';
import { ChangeEvent, FC, useState } from 'react';

interface ICurrencySelectorProps {
  code: string;
}

export const CurrencyModalContent: FC<ICurrencySelectorProps> = ({ code }) => {
  const [currentCurrency, setCurrentCurrency] = useState<string>(baseCurrency);
  const [isOpenCurrencyList, setIsOpenCurrencyList] = useState<boolean>(false);

  const [currenciesCount, setCurrenciesCount] = useState<string>('1');

  const [exchangeRate, isLoading, error] = useExchangeRate(code, currentCurrency);

  const handleSetCurrency = (currency: string) => {
    setCurrentCurrency(currency);
  };

  const handleOpenCurrencyList = () => {
    setIsOpenCurrencyList(true);
  };

  const handleCloseCurrencyList = () => {
    setIsOpenCurrencyList(false);
  };

  const ref = useOutsideClick(handleCloseCurrencyList);

  const handleChangeCount = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrenciesCount(String(e.target.value));
  };

  const currenciesItems = CurrenciesList.filter((currency) => currency !== currentCurrency).map(
    (currency) => (
      <ModalMenuItem
        key={currency}
        onClick={() => {
          handleSetCurrency(currency);
        }}
      >
        {currency}
      </ModalMenuItem>
    ),
  );

  const countCountExchangeRate = () => {
    let currentRate;
    const numberExchangeRate = Number(exchangeRate);
    const numberCurrenciesRate = Number(currenciesCount);

    if (exchangeRate && numberCurrenciesRate !== 0) {
      currentRate = numberExchangeRate * numberCurrenciesRate;
    } else {
      currentRate = numberExchangeRate;
    }

    return currentRate.toFixed(5);
  };

  return (
    <>
      <ModalOutput>
        {isLoading && <div>Loading...</div>}
        {!isLoading && (
          <>
            {+currenciesCount === 0 ? 1 : currenciesCount} {currentCurrency} = {countCountExchangeRate()}{' '}
            {code}
          </>
        )}
      </ModalOutput>
      <ModalCurrencyInput value={currenciesCount} onChange={handleChangeCount} />
      <ModalCurrencyMenuWrapper ref={ref}>
        <ModalSelectedCurrency onClick={handleOpenCurrencyList}>{currentCurrency}</ModalSelectedCurrency>
        <ModalCurrencyMenu isOpen={isOpenCurrencyList}>{currenciesItems}</ModalCurrencyMenu>
      </ModalCurrencyMenuWrapper>
    </>
  );
};
