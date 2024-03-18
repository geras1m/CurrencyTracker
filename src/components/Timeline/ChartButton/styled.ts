import styled from 'styled-components';

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
    background-color: ${({ theme }) => theme.colors.orange};
  }

  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }
`;
