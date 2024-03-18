import { mediaSizes } from '@constants/theme/theme';
import styled from 'styled-components';

export const CurrenciesWrapper = styled.ul`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  gap: 56px;

  @media (max-width: ${mediaSizes.maxWidth1000px}) {
    grid-template-columns: repeat(1, minmax(100px, 1fr));
    gap: 30px;
  }
`;

export const ModalButton = styled.button`
  border-radius: 5px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: 5px 10px;
  background: ${({ theme }) => theme.gradients.text};
  cursor: pointer;
  transition: 0.3s ease;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.px20};

  &:hover {
    box-shadow: 0px 0px 5px 0px rgba(129, 129, 129, 1);
  }
`;
