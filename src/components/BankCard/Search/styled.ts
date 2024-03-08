import SearchIcon from '@assets/search-icon.svg';
import { mediaSizes } from '@constants/theme/theme';
import styled from 'styled-components';

export const SearchContainer = styled.div`
  max-width: 450px;
  margin: 0 auto;
  position: relative;
`;

export const SearchInputContainer = styled.div`
  margin-top: 25px;
  position: relative;
`;

export const SearchTitle = styled.h2`
  margin-top: 105px;
  color: ${({ theme }) => theme.colors.fontCurrencyTitle};
  font-size: ${({ theme }) => theme.fontSizes.px35};
  font-weight: ${({ theme }) => theme.fontWeight.normal};

  @media (max-width: ${mediaSizes.maxWidth750px}) {
    margin-top: 30px;
    font-size: ${({ theme }) => theme.fontSizes.px24};
    text-align: center;
  }
`;

export const SearchInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Сurrency search...',
})`
  outline: none;
  border: none;
  height: 65px;
  width: 100%;
  padding: 0px 50px 0 20px;
  font-size: ${({ theme }) => theme.fontSizes.px16};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.grey2};
  background-color: ${({ theme }) => theme.colors.black5};
`;

export const SearchImage = styled(SearchIcon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 20px;
  margin: auto;
`;

export const ElasticSearchContainer = styled.ul`
  position: absolute;
  z-index: 5;
  width: 100%;
  max-height: 500px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white2};
  transition: 0.3s ease-out;
  padding-bottom: 10px;
`;

export const ElasticSearchItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  margin: 12px 20px 0;
  transition: 0.1s ease;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.green1};
  }
`;
