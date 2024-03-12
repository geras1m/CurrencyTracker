const millisecondsPerDay = 86_400_000;

const randomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const randomBar = (date: number, lastClose: number) => {
  const open = Number(randomNumber(lastClose * 0.95, lastClose * 1.05).toFixed(2));
  const close = Number(randomNumber(open * 0.95, open * 1.05).toFixed(2));
  const high = Number(randomNumber(Math.max(open, close), Math.max(open, close) * 1.1).toFixed(2));
  const low = Number(randomNumber(Math.min(open, close) * 0.9, Math.min(open, close)).toFixed(2));
  return {
    x: date.valueOf(),
    o: open,
    h: high,
    l: low,
    c: close,
  };
};

export const getRandomData = (dateStart: number, count: number) => {
  let date = dateStart;
  const data = [randomBar(date, 30)];
  while (data.length < count) {
    date += millisecondsPerDay;
    data.push(randomBar(date, data[data.length - 1].c));
  }
  return data;
};
