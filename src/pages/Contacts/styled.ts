import { mediaSizes } from '@constants/theme/theme';
import styled from 'styled-components';

export const MainContactUs = styled.main``;

export const ContactUsTitle = styled.h2`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.fontCurrencyTitle};
  font-size: ${({ theme }) => theme.fontSizes.px35};
  font-weight: ${({ theme }) => theme.fontWeight.normal};

  @media (max-width: ${mediaSizes.maxWidth750px}) {
    margin-top: 30px;
    font-size: ${({ theme }) => theme.fontSizes.px22};
    text-align: center;
  }
`;

export const ContactUsContent = styled.div`
  padding: 100px 0;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${mediaSizes.maxWidth650px}) {
    padding: 60px 0;
  }
`;

export const ContactList = styled.ul`
  margin-bottom: 40px;
`;

export const ContactItem = styled.li`
  list-style: none;
  font-size: ${({ theme }) => theme.fontSizes.px24};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.grey2};

  @media (max-width: ${mediaSizes.maxWidth450px}) {
    font-size: ${({ theme }) => theme.fontSizes.px20};
  }
`;

export const ContactLinkMail = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey2};
`;

export const ContactLinkPhone = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey2};
`;

export const ContactAddress = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.px24};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.grey2};
  text-align: center;

  @media (max-width: ${mediaSizes.maxWidth450px}) {
    font-size: ${({ theme }) => theme.fontSizes.px20};
  }
`;
