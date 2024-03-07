import { Container } from '@components/App/styled';
import { BurgerMenu } from '@components/BurgerMenu';
import Logo from '@components/Header/Logo';
import NavBar from '@components/Header/NavBar';
import { HeaderContent, HeaderWrapper, ThemeContainer } from '@components/Header/styled';
import ThemeToggle from '@components/Header/ThemeToggle';
import { IThemeProps } from '@root/types';
import { FC } from 'react';

const Header: FC<IThemeProps> = ({ theme, switchTheme }) => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <Logo />
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
export default Header;
