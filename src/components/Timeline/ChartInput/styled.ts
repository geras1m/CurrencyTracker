import { mediaSizes } from '@constants/theme/theme';
import styled from 'styled-components';

export const ChatInputContainer = styled.div`
  margin: 20px 0;
`;

export const ChatInputDays = styled.p`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.currencyText};
`;

export const ChatInputFieldsWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 30px;

  @media (max-width: ${mediaSizes.maxWidth850px}) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
    justify-content: space-between;
  }
`;

export const ChatInputField = styled.input.attrs({
  type: 'number',
  step: 1,
})`
  width: 100px;
  outline: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white2};
  padding: 2px 5px;
  font-size: 16px;

  &::placeholder {
    font-size: 14px;
  }

  @media (max-width: ${mediaSizes.maxWidth850px}) {
    width: 170px;
  }
`;
