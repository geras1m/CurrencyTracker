import { Container } from '@components/App/styled';
import Logo from '@components/Header/Logo';
import NavBar from '@components/Header/NavBar';
import { HeaderContent, HeaderWrapper } from '@components/Header/styled';
import ThemeToggle from '@components/Header/ThemeToggle';
import { IThemeProps } from '@root/types';
import { FC } from 'react';

const Header: FC<IThemeProps> = ({ theme, switchTheme }) => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <Logo />
          <NavBar />
          <ThemeToggle theme={theme} switchTheme={switchTheme} />
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};
export default Header;
