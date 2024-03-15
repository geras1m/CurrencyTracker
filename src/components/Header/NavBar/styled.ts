import { mixinFlex } from '@components/App/styled';
import { mediaSizes } from '@constants/theme/theme';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul`
  ${mixinFlex({ alignItem: 'center', justifyContent: 'space-between' })};
  column-gap: 112px;
  margin: 0;

  @media (max-width: ${mediaSizes.maxWidth1000px}) {
    column-gap: 70px;
  }

  @media (max-width: ${mediaSizes.maxWidth750px}) {
    flex-direction: column;
    row-gap: 20px;
    margin-bottom: 20px;
  }
`;

export const NavLinkElem = styled(NavLink)`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSizes.px20};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.fontNavBar};
  transition: 0.2s ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }

  &.active {
    color: ${({ theme }) => theme.colors.green1};
  }
`;
