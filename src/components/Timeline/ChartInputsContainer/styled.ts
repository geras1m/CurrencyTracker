import { mediaSizes } from '@constants/theme/theme';
import styled from 'styled-components';

export const ChartInputWrapper = styled.section`
  text-align: end;

  @media (max-width: ${mediaSizes.maxWidth850px}) {
    text-align: center;
  }
`;
