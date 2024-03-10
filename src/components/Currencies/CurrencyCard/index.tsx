import {
  CurrencyCardIcon,
  CurrencyCardInform,
  CurrencyCardName,
  CurrencyCardRate,
  CurrencyCardWrapper,
} from '@components/Currencies/CurrencyCard/styled';
import { baseCurrency } from '@root/constants';
import { ICurrencyDataTemplate } from '@root/types';
import { FC, memo } from 'react';

interface ICurrencyCardProps {
  currencyData: ICurrencyDataTemplate;
  onClick: (code: string, rate: number, name: string) => void;
}

const CurrencyCard: FC<ICurrencyCardProps> = ({ currencyData, onClick }) => {
  const { code, rate, symbol, symbolBG, name } = currencyData;

  return (
    <CurrencyCardWrapper data-testid='currency-card' onClick={() => onClick(code, rate, name)}>
      <CurrencyCardIcon color={symbolBG}>{symbol}</CurrencyCardIcon>
      <CurrencyCardInform>
        <CurrencyCardName>{name}</CurrencyCardName>
        <CurrencyCardRate>
          1 {baseCurrency} = {rate.toFixed(5)} {code}
        </CurrencyCardRate>
      </CurrencyCardInform>
    </CurrencyCardWrapper>
  );
};
export default memo(CurrencyCard);
