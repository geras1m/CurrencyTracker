import { SpinnerElement, SpinnerWrapper } from '@components/Spinner/styled';
import { FC } from 'react';

interface ISpinnerProps {
  width: string;
}

export const Spinner: FC<ISpinnerProps> = ({ width }) => {
  return (
    <SpinnerWrapper>
      <SpinnerElement size={width} />
    </SpinnerWrapper>
  );
};
