import { mixinFlex, mixinKeyframesUpdateTime } from '@components/App/styled';
import { mediaSizes } from '@constants/theme/theme';
import styled from 'styled-components';

export const TimeUpdate = styled.div`
  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
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

  ${mixinKeyframesUpdateTime};
`;
