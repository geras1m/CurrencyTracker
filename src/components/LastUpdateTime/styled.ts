import { mediaSizes } from '@constants/theme/theme';
import styled from 'styled-components';

export const TimeUpdate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 57px 0;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSizes.px28};
  color: ${({ theme }) => theme.fontCurrencyTime};

  @media (max-width: ${mediaSizes.maxWidth750px}) {
    font-size: ${({ theme }) => theme.fontSizes.px22};
    padding: 30px 0;
  }
`;
