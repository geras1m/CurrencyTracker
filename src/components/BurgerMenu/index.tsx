import { BurgerWrapper, Menu } from '@components/BurgerMenu/styled';
import NavBar from '@components/Header/NavBar';
import ThemeToggle from '@components/Header/ThemeToggle';
import { IThemeProps } from '@root/types';
import { FC, useEffect, useState } from 'react';

export const BurgerMenu: FC<IThemeProps> = ({ theme, switchTheme }) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  return (
    <>
      <BurgerWrapper tabIndex={0} open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerWrapper>
      <Menu open={open}>
        <NavBar />
        <ThemeToggle theme={theme} switchTheme={switchTheme} />
      </Menu>
    </>
  );
};
