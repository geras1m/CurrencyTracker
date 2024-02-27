import styled from 'styled-components';

interface ICurrencyCardIconProps {
  bgColor: string;
}

export const CurrencyCardWrapper = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  column-gap: 30px;
  padding: 30px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.bgColorCards};
  border-radius: 8px;
  cursor: pointer;
`;

export const CurrencyCardIcon = styled.div<ICurrencyCardIconProps>`
  height: 80px;
  width: 80px;
  border-radius: 8px;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.px25};
  color: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor};
`;

export const CurrencyCardInform = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
`;

export const CurrencyCardName = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSizes.px32};
  color: ${({ theme }) => theme.currencyTitle};
`;

export const CurrencyCardRate = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSizes.px20};
  color: ${({ theme }) => theme.currencyText};
`;
