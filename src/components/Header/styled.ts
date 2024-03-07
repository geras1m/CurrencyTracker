import { mediaSizes } from '@constants/theme/theme';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  padding: 30px 0;
`;

export const HeaderContent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ThemeContainer = styled.div`
  @media (max-width: ${mediaSizes.maxWidth750px}) {
    display: none;
  }
`;
