import { mediaSizes } from '@constants/theme/theme';
import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.black3};
  cursor: pointer;
`;

export const ModalWindow = styled.div`
  padding: 40px;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 350px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.bgColorCards};
  cursor: auto;
  margin: 0 20px;
`;

export const ModalTitle = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSizes.px32};
  color: ${({ theme }) => theme.currencyTitle};
  margin-bottom: 50px;

  @media (max-width: ${mediaSizes.maxWidth650px}) {
    font-size: ${({ theme }) => theme.fontSizes.px24};
  }
`;
