import { mediaSizes } from '@constants/theme/theme';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 90px 0 40px;
  flex: 0 0 auto;
  display: flex;
  width: 100%;
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  box-sizing: content-box;
  padding: 0 15px;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${mediaSizes.maxWidth1000px}) {
    flex-direction: column;
  }
`;

export const FooterInform = styled.div`
  max-width: 482px;
  margin-right: 105px;

  @media (max-width: ${mediaSizes.maxWidth1000px}) {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 50px;
  }
`;

export const FooterInformTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.px26};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${mediaSizes.maxWidth650px}) {
    font-size: ${({ theme }) => theme.fontSizes.px20};
  }
`;

export const FooterInformWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const FooterInformText = styled.p`
  margin-top: 35px;
  font-size: ${({ theme }) => theme.fontSizes.px24};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.fontNavBar};
  line-height: 35px;

  @media (max-width: ${mediaSizes.maxWidth650px}) {
    font-size: ${({ theme }) => theme.fontSizes.px16};
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  column-gap: 30px;
  justify-content: space-between;
`;

export const FooterLinks = styled.div``;

export const FooterLinksTitle = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSizes.px28};
  color: ${({ theme }) => theme.colors.fontFooterText};
  margin-bottom: 40px;

  @media (max-width: ${mediaSizes.maxWidth650px}) {
    font-size: ${({ theme }) => theme.fontSizes.px20};
  }
`;

export const FooterLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FooterLinksItem = styled.li`
  list-style: none;
  font-size: ${({ theme }) => theme.fontSizes.px24};
  font-weight: ${({ theme }) => theme.fontWeight.normal};

  @media (max-width: ${mediaSizes.maxWidth650px}) {
    font-size: ${({ theme }) => theme.fontSizes.px20};
  }
`;

export const FooterLink = styled.a.attrs({
  href: 'https://www.modsen-software.com/',
  target: '_blank',
})`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey2};
  transition: 0.3s ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const FooterCopyright = styled.div`
  margin-top: 54px;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSizes.px20};
  color: ${({ theme }) => theme.colors.grey2};

  @media (max-width: ${mediaSizes.maxWidth650px}) {
    font-size: ${({ theme }) => theme.fontSizes.px16};
  }
`;
