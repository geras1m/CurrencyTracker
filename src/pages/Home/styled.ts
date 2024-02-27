import styled from 'styled-components';

export const MainCurrency = styled.main`
  flex: 1 0 auto;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorMessage = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSizes.px32};
  color: ${({ theme }) => theme.currencyTitle};
`;

export const TimeUpdate = styled.p`
  padding: 57px 0;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSizes.px28};
  color: ${({ theme }) => theme.fontCurrencyTime};
`;
