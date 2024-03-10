import { CurrencyModalContent } from '@components/Currencies/CurrencyModalContent';
import { ModalTitle, ModalWindow, ModalWrapper } from '@components/Currencies/Modal/styled';
import { ModalButton } from '@components/Currencies/styled';
import { useOutsideClick } from '@hooks/useOutClick';
import { IModalData } from '@root/types';
import { FC } from 'react';
import { createPortal } from 'react-dom';

interface IModalProps {
  isOpen: boolean;
  data: IModalData | null;
  closeModal: () => void;
}

export const Modal: FC<IModalProps> = ({ isOpen, data, closeModal }) => {
  const ref = useOutsideClick(closeModal);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <ModalWrapper>
      {data && (
        <ModalWindow data-testid='currency-modal' ref={ref}>
          <ModalTitle data-testid='currency-title'>{data.name}</ModalTitle>
          <CurrencyModalContent code={data.code} />
          <ModalButton type='button' onClick={closeModal}>
            Close modal
          </ModalButton>
        </ModalWindow>
      )}
    </ModalWrapper>,
    document.getElementById('modal-root')!,
  );
};
