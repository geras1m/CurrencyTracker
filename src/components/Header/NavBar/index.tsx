import { NavLinkElem, NavList } from '@components/Header/NavBar/styled';
import { routerNavLinks } from '@constants/router/routerPaths';

export const NavBar = () => {
  return (
    <NavList data-testid='navigate-bar'>
      {routerNavLinks.map(({ to, title }) => {
        return (
          <NavLinkElem key={to} to={to}>
            {title}
          </NavLinkElem>
        );
      })}
    </NavList>
  );
};
