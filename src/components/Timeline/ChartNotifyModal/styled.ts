import { mixinFlex } from '@components/App/styled';
import { mediaSizes } from '@constants/theme/theme';
import styled from 'styled-components';

export const ChartMessage = styled.div`
  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
  padding: 15px;
  width: 100%;
  position: fixed;
  top: 0;
  font-size: ${({ theme }) => theme.fontSizes.px20};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.gradients.text};

  @media (max-width: ${mediaSizes.maxWidth750px}) {
    font-size: ${({ theme }) => theme.fontSizes.px16};
  }
`;
