import styled from 'styled-components';

export const HomeSectionTitlesWrapper = styled.h3`
  max-width: 580px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSizes.px32};
  padding-bottom: 25px;
  color: ${({ theme }) => theme.fontCurrencyTitle};
`;
