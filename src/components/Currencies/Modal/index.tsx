import { CurrencyModalContent } from '@components/Currencies/CurrencyModalContent';
import { ModalTitle, ModalWindow, ModalWrapper } from '@components/Currencies/Modal/styled';
import { ModalButton } from '@components/Currencies/styled';
import { Portal } from '@components/Portal';
import { useOutsideClick } from '@hooks/useOutClick';
import { IModalData } from '@root/types';
import { FC } from 'react';

interface IModalProps {
  data: IModalData | null;
  closeModal: () => void;
}

export const Modal: FC<IModalProps> = ({ data, closeModal }) => {
  const ref = useOutsideClick(closeModal);

  return (
    <Portal>
      <ModalWrapper data-testid='modal'>
        {data && (
          <ModalWindow data-testid='currency-modal' ref={ref}>
            <ModalTitle data-testid='currency-title'>{data.name}</ModalTitle>
            <CurrencyModalContent code={data.code} />
            <ModalButton type='button' onClick={closeModal}>
              Close modal
            </ModalButton>
          </ModalWindow>
        )}
      </ModalWrapper>
    </Portal>
  );
};
