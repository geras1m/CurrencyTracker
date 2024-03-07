import FooterInformLogo from '@assets/Logo.svg';
import {
  FooterContainer,
  FooterContent,
  FooterCopyright,
  FooterInform,
  FooterInformText,
  FooterInformTitle,
  FooterInformWrapper,
  FooterLink,
  FooterLinks,
  FooterLinksItem,
  FooterLinksList,
  FooterLinksTitle,
  FooterLinksWrapper,
  FooterWrapper,
} from '@components/Footer/styled';
import { footerData, footerLinks } from '@root/constants';

export const Footer = () => {
  const { title, text, copyright } = footerData;

  const linksColumnList = footerLinks.map(({ column, links }) => {
    return (
      <FooterLinks key={column}>
        <FooterLinksTitle>{column}</FooterLinksTitle>
        <FooterLinksList>
          {links.map((link) => {
            return (
              <FooterLinksItem key={link}>
                <FooterLink>{link}</FooterLink>
              </FooterLinksItem>
            );
          })}
        </FooterLinksList>
      </FooterLinks>
    );
  });

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          <FooterInform>
            <FooterInformWrapper>
              <FooterInformLogo />
              <FooterInformTitle>{title}</FooterInformTitle>
            </FooterInformWrapper>
            <FooterInformText>{text}</FooterInformText>
          </FooterInform>
          <FooterLinksWrapper>{linksColumnList}</FooterLinksWrapper>
        </FooterContent>
        <FooterCopyright>{copyright}</FooterCopyright>
      </FooterContainer>
    </FooterWrapper>
  );
};
