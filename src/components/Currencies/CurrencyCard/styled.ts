import { mediaSizes } from '@constants/theme/theme';
import styled from 'styled-components';

interface ICurrencyCardIconProps {
  color: string;
}

export const CurrencyCardWrapper = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  column-gap: 30px;
  padding: 30px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.bgColorCards};
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    box-shadow: 1px -1px 14px 0px rgba(129, 129, 129, 1);
  }
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
  background-color: ${({ color }) => color};

  @media (max-width: ${mediaSizes.maxWidth650px}) {
    height: 60px;
    width: 60px;
    font-size: ${({ theme }) => theme.fontSizes.px20};
  }
`;

export const CurrencyCardInform = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
`;

export const CurrencyCardName = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSizes.px32};
  color: ${({ theme }) => theme.currencyTitle};

  @media (max-width: ${mediaSizes.maxWidth650px}) {
    font-size: ${({ theme }) => theme.fontSizes.px20};
  }
`;

export const CurrencyCardRate = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSizes.px20};
  color: ${({ theme }) => theme.currencyText};

  @media (max-width: ${mediaSizes.maxWidth650px}) {
    font-size: ${({ theme }) => theme.fontSizes.px16};
  }
`;
