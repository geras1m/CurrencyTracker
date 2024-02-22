import { colors, fontSizes, fontWeight } from '@constants/theme/theme';
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
  font-weight: ${fontWeight.light};
  font-size: ${fontSizes.px20};
  text-decoration: none;
  color: ${({ theme }) => theme.fontNavBar};
  transition: 0.2s ease-out;

  &:hover {
    color: #b28d56;
  }

  &.active {
    color: ${colors.green1};
  }
`;
