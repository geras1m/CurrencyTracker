import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 90px 0 40px;
  flex: 0 0 auto;
  display: flex;
  width: 100%;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterInform = styled.div`
  max-width: 482px;
  margin-right: 105px;
`;

export const FooterInformTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.px26};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  color: ${({ theme }) => theme.fontNavBar};
  line-height: 35px;
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
  color: ${({ theme }) => theme.fontFooterText};
  margin-bottom: 40px;
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
`;

export const FooterLink = styled.a.attrs({
  href: 'https://www.modsen-software.com/',
  target: '_blank',
})`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.footerLink};
  transition: 0.3s ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`;

export const FooterCopyright = styled.div`
  margin-top: 54px;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSizes.px20};
  color: ${({ theme }) => theme.colors.footerLink};
`;
