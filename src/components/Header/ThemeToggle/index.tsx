import { Toggle, ToggleWrapper } from '@components/Header/ThemeToggle/styled';

const ThemeToggle = () => {
  return (
    <ToggleWrapper data-testid='toggle'>
      <Toggle data-testid='toggle-element' />
    </ToggleWrapper>
  );
};

export default ThemeToggle;
