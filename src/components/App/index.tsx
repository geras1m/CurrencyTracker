import { Banner } from '@components/Banner';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { MainPagesContent } from '@components/Main';
import { ThemeContext } from '@components/ThemeProvider';
import { useContext } from 'react';

export const App = () => {
  const { theme, switchTheme } = useContext(ThemeContext);
  return (
    <>
      <Header theme={theme} switchTheme={switchTheme} />
      <Banner />
      <MainPagesContent />
      <Footer />
    </>
  );
};
