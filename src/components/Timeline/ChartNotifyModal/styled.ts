import styled from 'styled-components';

export const ChartMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 100%;
  position: fixed;
  top: 0;
  font-size: ${({ theme }) => theme.fontSizes.px20};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.gradients.text};
`;
