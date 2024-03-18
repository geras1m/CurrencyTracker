import { mediaSizes } from '@constants/theme/theme';
import styled from 'styled-components';

export const ChartWrapper = styled.div`
  margin-top: 50px;
`;

export const CanvasChart = styled.canvas`
  height: 500px;

  @media (max-width: ${mediaSizes.maxWidth750px}) {
    height: 350px;
  }

  @media (max-width: ${mediaSizes.maxWidth450px}) {
    height: 250px;
  }
`;
