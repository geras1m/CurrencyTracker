import { mixinFlex } from '@components/App/styled';
import styled from 'styled-components';

export const FallbackWrapper = styled.div`
  height: 100%;
  margin-top: 50px;
  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
`;
