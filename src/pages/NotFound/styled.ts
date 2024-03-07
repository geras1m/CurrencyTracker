import { mediaSizes } from '@constants/theme/theme';
import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: 500px;

  @media (max-width: ${mediaSizes.maxWidth650px}) {
    width: 300px;
  }
`;
