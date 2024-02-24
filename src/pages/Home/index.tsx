import { useCurrenciesData } from '@hooks/useCurrenciesData';

const Home = () => {
  const { time, data, isLoading } = useCurrenciesData();

  const map =
    data &&
    data.map((item) => (
      <div key={item.code}>
        {item.code}, {item.symbol}, {item.name}, {item.rate.toFixed(5)}
      </div>
    ));

  return (
    <div>
      <div>Last updated at {time}</div>
      {isLoading && <div>Loading...</div>}
      {!isLoading && map}
    </div>
  );
};

export default Home;
