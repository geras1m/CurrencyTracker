import { mixinFlex } from '@components/App/styled';
import { mediaSizes } from '@constants/theme/theme';
import styled from 'styled-components';

export const ChatInputContainer = styled.div`
  margin: 20px 0;
`;

export const ChatInputDays = styled.p`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.currencyText};
`;

export const ChatInputFieldsWrapper = styled.div`
  position: relative;
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

export const SwitchDayBtn = styled.button`
  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};
  }
`;

export const DayControlWrapper = styled.div`
  ${mixinFlex({ alignItem: 'center', justifyContent: 'space-between' })};
  width: 100%;
  max-width: 155px;

  @media (max-width: ${mediaSizes.maxWidth850px}) {
    margin-bottom: 30px;
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  color: ${({ theme }) => theme.colors.red};
  top: -25px;
  right: 240px;

  @media (max-width: ${mediaSizes.maxWidth850px}) {
    top: 40px;
    margin-bottom: 30px;
    right: auto;
  }
`;

export const ControlAndNotifyWrapper = styled.div`
  width: 100%;
  max-width: 155px;
  display: flex;
  justify-content: center;
`;
