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
  color: ${({ theme }) => theme.colors.fontCurrencyTime};

  & > svg {
    margin-right: 15px;
    position: relative;
    border-radius: 50%;
    animation: indicator 2.5s ease-out infinite;
  }

  @media (max-width: ${mediaSizes.maxWidth750px}) {
    font-size: ${({ theme }) => theme.fontSizes.px20};
    padding: 30px 0;
  }

  @keyframes indicator {
    0% {
      box-shadow: ${({ theme }) => theme.colors.green3} 0 0 0;
    }
    65% {
      box-shadow: ${({ theme }) => theme.colors.green3} 0 0 0 7px;
    }
  }
`;
