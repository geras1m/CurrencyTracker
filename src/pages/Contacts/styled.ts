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
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const ContactLinkMail = styled.a.attrs({
  target: '_blank',
  href: 'mailto:https://www.modsen-software.com/',
})`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey2};
`;

export const ContactLinkPhone = styled.a.attrs({
  target: '_blank',
  href: 'callto:+48501157180',
})`
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
