import styled from 'styled-components';

interface ISpinnerElementProps {
  size: string;
}

export const SpinnerElement = styled.div<ISpinnerElementProps>`
  border: 12px solid ${({ theme }) => theme.colors.updateLamp};
  border-top: 12px ${({ theme }) => theme.colors.updateLampWave} solid;
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
