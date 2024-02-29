import styled from 'styled-components';

export const TimeUpdate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 57px 0;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSizes.px28};
  color: ${({ theme }) => theme.fontCurrencyTime};
`;
