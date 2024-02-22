import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 112px;
`;

export const NavLinkElem = styled(NavLink)`
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  color: black;
  transition: 0.2s ease-out;

  &:hover {
    color: #b28d56;
  }

  &.active {
    color: green;
  }
`;
