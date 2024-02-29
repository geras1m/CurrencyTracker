import { Container } from '@components/App/styled';
import { Currencies } from '@components/Currencies';
import { HomeSectionTitles } from '@components/Currencies/HomeSectionTitles';
import { Modal } from '@components/Currencies/Modal';
import { LastUpdateTime } from '@components/LastUpdateTime';
import { Spinner } from '@components/Spinner';
import { useCurrenciesData } from '@hooks/useCurrenciesData';
import { ErrorMessage, MainCurrency, Wrapper } from '@pages/Home/styled';
import { IModalData } from '@root/types';
import { useCallback, useMemo, useState } from 'react';

const Home = () => {
  const { time, data, isLoading, error } = useCurrenciesData();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<IModalData | null>(null);

  const memoData = useMemo(() => data, [data]);

  const handleOpenModal = useCallback((code: string, rate: number, name: string) => {
    setIsModalOpen(true);
    setModalData({ code, rate, name });
    document.body.style.overflow = 'hidden';
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <MainCurrency>
      {error && (
        <Wrapper>
          <ErrorMessage>Something went wrong :(</ErrorMessage>
        </Wrapper>
      )}

      {isLoading && (
        <Wrapper>
          <Spinner width='100px' border='12px' />
        </Wrapper>
      )}

      {!isLoading && !error && memoData && (
        <Container>
          <LastUpdateTime time={time} />
          <HomeSectionTitles title='Quotes' />
          <Currencies dataList={memoData} openModal={handleOpenModal} />
          <Modal isOpen={isModalOpen} data={modalData} closeModal={handleCloseModal} />
        </Container>
      )}
    </MainCurrency>
  );
};

export default Home;
