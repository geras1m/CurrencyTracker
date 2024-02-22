import { colors } from '@constants/theme/theme';
import { ThemeType, ThemeValue } from '@constants/theme/types';
import styled from 'styled-components';

interface IToggleProps {
  theme?: ThemeType;
}

export const ToggleWrapper = styled.button`
  width: 50px;
  height: 28px;
  border: 2px solid ${({ theme }) => theme.toggle};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: left;
  position: relative;
  cursor: pointer;
  outline: none;
  transition: 0.3s ease-out;
  background-color: ${({ theme }) => theme.bg};

  &:hover {
    box-shadow: 0 0 5px 2px ${colors.grey};
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
