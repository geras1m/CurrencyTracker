import { mediaSizes } from '@constants/theme/theme';
import styled from 'styled-components';

export const MapContainer = styled.div`
  margin-top: 80px;
  width: 1200px;
  height: 460px;

  @media (max-width: ${mediaSizes.maxWidth1250px}) {
    width: 920px;
  }

  @media (max-width: ${mediaSizes.maxWidth1000px}) {
    margin-top: 40px;
    width: 700px;
  }

  @media (max-width: ${mediaSizes.maxWidth750px}) {
    width: 450px;
  }

  @media (max-width: ${mediaSizes.maxWidth450px}) {
    width: 300px;
  }
`;
