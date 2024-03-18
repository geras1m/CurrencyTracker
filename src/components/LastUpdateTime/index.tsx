import TimeIndicator from '@assets/Time-indicator.svg';
import { TimeUpdate } from '@components/LastUpdateTime/styled';
import { memo } from 'react';

interface ILastUpdateTimeProps {
  time: string | undefined;
}

export const LastUpdateTime = memo(({ time }: ILastUpdateTimeProps) => {
  return (
    time && (
      <TimeUpdate>
        <TimeIndicator />
        Last updated at {time}
      </TimeUpdate>
    )
  );
});
