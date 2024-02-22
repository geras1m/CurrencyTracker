import { Container } from '@components/App/styled';
import Logo from '@components/Header/Logo';
import NavBar from '@components/Header/NavBar';
import { HeaderContent, HeaderWrapper } from '@components/Header/styled';
import ThemeToggle from '@components/Header/ThemeToggle';

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <Logo />
          <NavBar />
          <ThemeToggle />
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};
export default Header;
