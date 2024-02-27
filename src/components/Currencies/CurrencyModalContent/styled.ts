import styled from 'styled-components';

interface IModalCurrencyMenuProps {
  isOpen: boolean;
}

export const ModalSelectedCurrency = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  width: 200px;
  cursor: pointer;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.currencyText};
`;

export const ModalCurrencyMenuWrapper = styled.div`
  position: relative;
`;

export const ModalCurrencyMenu = styled.ul<IModalCurrencyMenuProps>`
  position: absolute;
  border-radius: ${({ isOpen }) => (isOpen ? '5px' : '0')};
  width: 200px;
  height: ${({ isOpen }) => (isOpen ? '148px' : '0')};
  overflow-y: scroll;
  color: ${({ theme }) => theme.currencyText};
  background-color: ${({ theme }) => theme.bgModalMenu};
  transition: 0.3s ease-out;

  &::-webkit-scrollbar {
    width: 3px;
    background-color: ${({ theme }) => theme.colors.white};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.lightTitle};
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const ModalMenuItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin: 5px 5px 0;
  transition: 0.1s ease;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.selectedRoute};
  }
`;

export const ModalCurrencyInput = styled.input.attrs({
  type: 'number',
  placeholder: 'Count:',
  max: 2,
  min: 1,
  step: 1,
})`
  width: 200px;
  margin-bottom: 30px;
  outline: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.darkText};
  padding: 0 5px;
  font-size: 20px;

  &::placeholder {
    font-size: 18px;
  }
`;

export const ModalOutput = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSizes.px20};
  color: ${({ theme }) => theme.currencyText};
  margin-bottom: 30px;
`;
