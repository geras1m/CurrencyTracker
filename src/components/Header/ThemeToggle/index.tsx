import { Toggle, ToggleWrapper } from '@components/Header/ThemeToggle/styled';
import { IThemeProps } from '@root/types';
import { FC } from 'react';

export const ThemeToggle: FC<IThemeProps> = ({ theme, switchTheme }) => {
  return (
    <ToggleWrapper data-testid='toggle' onClick={() => switchTheme(theme)}>
      <Toggle data-testid='toggle-element' theme={theme} />
    </ToggleWrapper>
  );
};
