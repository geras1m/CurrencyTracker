import LogoIcon from '@assets/Logo.svg';
import { Container } from '@components/App/styled';
import { BurgerMenu } from '@components/BurgerMenu';
import { NavBar } from '@components/Header/NavBar';
import { HeaderContent, HeaderWrapper, ThemeContainer } from '@components/Header/styled';
import { ThemeToggle } from '@components/Header/ThemeToggle';
import { routerPaths } from '@constants/router/routerPaths';
import { IThemeProps } from '@root/types';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC<IThemeProps> = ({ theme, switchTheme }) => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <Link to={routerPaths.HOME}>
            <LogoIcon />
          </Link>
          <ThemeContainer>
            <NavBar />
          </ThemeContainer>
          <ThemeContainer>
            <ThemeToggle theme={theme} switchTheme={switchTheme} />
          </ThemeContainer>
          <BurgerMenu theme={theme} switchTheme={switchTheme} />
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};
