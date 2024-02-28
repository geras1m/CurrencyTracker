import { SpinnerElement, SpinnerWrapper } from '@components/Spinner/styled';
import { FC } from 'react';

interface ISpinnerProps {
  width: string;
  border: string;
}

export const Spinner: FC<ISpinnerProps> = ({ width, border }) => {
  return (
    <SpinnerWrapper>
      <SpinnerElement size={width} $border={border} />
    </SpinnerWrapper>
  );
};
