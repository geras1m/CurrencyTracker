import styled from 'styled-components';

export const MainTimeline = styled.main`
  flex: 1 0 auto;
`;

export const ChartSettingsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 5px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.white2};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  transition: 0.3s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white1};
  }

  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }
`;
