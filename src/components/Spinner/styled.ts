import styled from 'styled-components';

interface ISpinnerElementProps {
  size: string;
  $border: string;
}

export const SpinnerElement = styled.div<ISpinnerElementProps>`
  border: ${({ $border, theme }) => `${$border} solid ${theme.colors.updateLamp}`};
  border-top: ${({ $border, theme }) => `${$border} solid ${theme.colors.updateLampWave}`};
  border-radius: 50%;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
