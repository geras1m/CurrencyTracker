import { mixinFlex, mixinKeyframesSpinner } from '@components/App/styled';
import styled from 'styled-components';

interface ISpinnerElementProps {
  size: string;
  $border: string;
}

export const SpinnerElement = styled.div<ISpinnerElementProps>`
  border: ${({ $border, theme }) => `${$border} solid ${theme.colors.green}`};
  border-top: ${({ $border, theme }) => `${$border} solid ${theme.colors.green2}`};
  border-radius: 50%;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  animation: spin 1s linear infinite;

  ${mixinKeyframesSpinner}
`;

export const SpinnerWrapper = styled.div`
  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};

  overflow: hidden;
`;
