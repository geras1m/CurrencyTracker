import {
  CurrencyCardIcon,
  CurrencyCardInform,
  CurrencyCardName,
  CurrencyCardRate,
  CurrencyCardWrapper,
} from '@components/Currencies/CurrencyCard/styled';
import { baseCurrency } from '@root/constants';
import { ICurrencyDataTemplate } from '@root/types';
import { memo, useMemo } from 'react';

interface ICurrencyCardProps {
  currencyData: ICurrencyDataTemplate;
  onClick: (code: string, rate: number, name: string) => void;
}

export const CurrencyCard = memo(({ currencyData, onClick }: ICurrencyCardProps) => {
  const { code, rate, symbol, symbolBG, name } = currencyData;
  const currentRate = useMemo(() => rate.toFixed(5), [rate]);

  return (
    <CurrencyCardWrapper data-testid='currency-card' onClick={() => onClick(code, rate, name)}>
      <CurrencyCardIcon color={symbolBG}>{symbol}</CurrencyCardIcon>
      <CurrencyCardInform>
        <CurrencyCardName>{name}</CurrencyCardName>
        <CurrencyCardRate>
          1 {baseCurrency} = {currentRate} {code}
        </CurrencyCardRate>
      </CurrencyCardInform>
    </CurrencyCardWrapper>
  );
});
