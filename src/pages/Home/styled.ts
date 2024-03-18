import { mixinFlex } from '@components/App/styled';
import styled from 'styled-components';

export const MainCurrency = styled.main`
  flex: 1 0 auto;
`;

export const Wrapper = styled.div`
  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
  height: 100%;
`;

export const ErrorMessage = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSizes.px32};
  color: ${({ theme }) => theme.colors.currencyTitle};
`;
