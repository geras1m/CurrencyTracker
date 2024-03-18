import { mixinFlex } from '@components/App/styled';
import { colors } from '@constants/theme/theme';
import { ThemeType, ThemeValue } from '@constants/theme/types';
import styled from 'styled-components';

interface IToggleProps {
  theme?: ThemeType;
}

export const ToggleWrapper = styled.button`
  width: 50px;
  min-height: 28px;
  border: 2px solid ${({ theme }) => theme.colors.toggle};
  border-radius: 14px;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'left' })};

  position: relative;
  cursor: pointer;
  outline: none;
  transition: 0.3s ease-out;
  background-color: ${({ theme }) => theme.colors.bg};

  &:hover {
    box-shadow: 0 0 5px 2px ${({ theme }) => theme.colors.grey2};
  }
`;

export const Toggle = styled.div<IToggleProps>`
  width: 27px;
  height: 27px;
  border: 2px solid ${(props) => (props.theme === ThemeValue.light ? colors.black : colors.white)};
  border-radius: 50%;
  position: absolute;
  left: -1px;
  transition: 0.3s ease;
  transform: translate(${(props) => (props.theme === ThemeValue.light ? '0' : '22px')});
`;
