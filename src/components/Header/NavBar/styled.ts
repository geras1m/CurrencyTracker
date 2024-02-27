import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 112px;
  margin: 0;
`;

export const NavLinkElem = styled(NavLink)`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSizes.px20};
  text-decoration: none;
  color: ${({ theme }) => theme.fontNavBar};
  transition: 0.2s ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }

  &.active {
    color: ${({ theme }) => theme.colors.selectedRoute};
  }
`;
