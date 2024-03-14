import { mixinFlex } from '@components/App/styled';
import { mediaSizes } from '@constants/theme/theme';
import styled from 'styled-components';

export const MainTimeline = styled.main`
  flex: 1 0 auto;
`;

export const ChartSettingsWrapper = styled.section`
  ${mixinFlex({ alignItem: 'center', justifyContent: 'space-between' })};
  gap: 20px;

  @media (max-width: ${mediaSizes.maxWidth750px}) {
    flex-direction: column;
  }
`;
