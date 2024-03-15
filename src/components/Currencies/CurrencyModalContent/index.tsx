import {
  ModalCurrencyInput,
  ModalCurrencyMenu,
  ModalCurrencyMenuWrapper,
  ModalMenuItem,
  ModalOutput,
  ModalSelectedCurrency,
} from '@components/Currencies/CurrencyModalContent/styled';
import { Spinner } from '@components/Spinner';
import { useExchangeRate } from '@hooks/useExchangeRate';
import { useOutsideClick } from '@hooks/useOutClick';
import { baseCurrency, CurrenciesList } from '@root/constants';
import { ChangeEvent, FC, useState } from 'react';

interface ICurrencySelectorProps {
  code: string;
}

const maxValue = 100_001;

export const CurrencyModalContent: FC<ICurrencySelectorProps> = ({ code }) => {
  const [currentCurrency, setCurrentCurrency] = useState<string>(baseCurrency);
  const [isOpenCurrencyList, setIsOpenCurrencyList] = useState<boolean>(false);

  const [currenciesCount, setCurrenciesCount] = useState<string>('1');

  const [exchangeRate, isLoading, error] = useExchangeRate(code, currentCurrency);

  const handleOpenCurrencyList = () => {
    setIsOpenCurrencyList(true);
  };

  const handleCloseCurrencyList = () => {
    setIsOpenCurrencyList(false);
  };

  const handleSetCurrency = (currency: string) => {
    setCurrentCurrency(currency);
    handleCloseCurrencyList();
  };

  const ref = useOutsideClick(handleCloseCurrencyList);

  const handleChangeCount = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const num = Math.abs(Number.parseFloat(value));

    if (Number.isNaN(num)) {
      setCurrenciesCount(String(''));
      return;
    }

    if (num > maxValue) return;

    setCurrenciesCount(String(num));
  };

  const currenciesItems = CurrenciesList.filter((currency) => currency !== currentCurrency).map(
    (currency) => (
      <ModalMenuItem
        data-testid='modal-current-currency-item'
        key={currency}
        onClick={() => {
          handleSetCurrency(currency);
        }}
      >
        {currency}
      </ModalMenuItem>
    ),
  );

  const countExchangeRate = () => {
    return (Number(exchangeRate) * Number(currenciesCount)).toFixed(5);
  };

  return (
    <>
      {error && <ModalOutput>Something went wrong :(</ModalOutput>}
      {!error && (
        <>
          <ModalOutput data-testid='modal-output'>
            {isLoading && <Spinner width='23px' border='5px' />}
            {!isLoading && (
              <>
                {currenciesCount} {currentCurrency} = {countExchangeRate()} {code}
              </>
            )}
          </ModalOutput>
          <ModalCurrencyInput
            data-testid='currency-modal-input'
            value={currenciesCount || ''}
            onChange={handleChangeCount}
          />
          <ModalCurrencyMenuWrapper ref={ref}>
            <ModalSelectedCurrency data-testid='modal-current-currency' onClick={handleOpenCurrencyList}>
              {currentCurrency}
            </ModalSelectedCurrency>
            <ModalCurrencyMenu open={isOpenCurrencyList}>{currenciesItems}</ModalCurrencyMenu>
          </ModalCurrencyMenuWrapper>
        </>
      )}
    </>
  );
};
