import CurrencyCard from '@components/Currencies/CurrencyCard';
import { CurrenciesWrapper } from '@components/Currencies/styled';
import { ICurrencyDataTemplate } from '@root/types';
import { FC } from 'react';

interface ICurrenciesProps {
  dataList: ICurrencyDataTemplate[];
  openModal: (code: string, rate: number, name: string) => void;
}

export const Currencies: FC<ICurrenciesProps> = ({ dataList, openModal }) => {
  return (
    <CurrenciesWrapper>
      {dataList.map((currency) => (
        <CurrencyCard key={currency.code} currencyData={currency} onClick={openModal} />
      ))}
    </CurrenciesWrapper>
  );
};
