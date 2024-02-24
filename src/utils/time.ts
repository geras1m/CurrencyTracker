export const parseTimeFromMilliseconds = (milliseconds: string | number): string =>
  new Date(Number(milliseconds)).toLocaleTimeString('en-US', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
  });
