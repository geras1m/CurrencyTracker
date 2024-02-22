import { NavLinkElem, NavList } from '@components/Header/NavBar/styled';
import { routerNavLinks } from '@constants/router/routerPaths';

const NavBar = () => {
  return (
    <NavList>
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

export default NavBar;
