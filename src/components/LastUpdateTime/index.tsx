import TimeIndicator from '@assets/Time-indicator.svg';
import { TimeUpdate } from '@components/LastUpdateTime/styled';
import { FC } from 'react';

interface ILastUpdateTimeProps {
  time: string | undefined;
}

export const LastUpdateTime: FC<ILastUpdateTimeProps> = ({ time }) => {
  return (
    time && (
      <TimeUpdate>
        <TimeIndicator />
        Last updated at {time}
      </TimeUpdate>
    )
  );
};
