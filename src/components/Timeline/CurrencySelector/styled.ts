import { mixinFlex } from '@components/App/styled';
import { mediaSizes } from '@constants/theme/theme';
import styled from 'styled-components';

interface IMenuCurrencyListProps {
  open: boolean;
}

export const CurrencyMenuWrapper = styled.div`
  position: relative;
  width: 250px;
`;

export const MenuSelectedCurrency = styled.div`
  width: 100%;
  ${mixinFlex({ alignItem: 'center', justifyContent: 'space-between' })};
  padding: 5px;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSizes.px28};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.fontCurrencyTime};
  cursor: pointer;

  @media (max-width: ${mediaSizes.maxWidth750px}) {
    font-size: ${({ theme }) => theme.fontSizes.px20};
  }
`;

export const MenuCurrencyList = styled.ul<IMenuCurrencyListProps>`
  top: 45px;
  position: absolute;
  width: 100%;
  border-radius: ${({ open }) => (open ? '5px' : '0')};
  height: ${({ open }) => (open ? '148px' : '0')};
  overflow-y: scroll;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white2};
  transition: 0.3s ease-out;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 3px;
    background-color: ${({ theme }) => theme.colors.white};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.black2};
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const MenuCurrencyItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  margin: 5px 5px 0;
  transition: 0.1s ease;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.green1};
  }
`;
