import { Information } from '@components/Footer/Information';
import {
  Content,
  Copyright,
  FooterContainer,
  FooterLink,
  FooterLinks,
  FooterWrapper,
  LinksItem,
  LinksList,
  LinksTitle,
  LinksWrapper,
} from '@components/Footer/styled';
import { footerData, footerLinks } from '@root/constants';

const { LINK_FOOTER_URL } = process.env;

const linkUrl = LINK_FOOTER_URL;

export const Footer = () => {
  const { title, text, copyright } = footerData;

  const linksColumnList = footerLinks.map(({ column, links }) => {
    return (
      <FooterLinks key={column}>
        <LinksTitle>{column}</LinksTitle>
        <LinksList>
          {links.map((link) => {
            return (
              <LinksItem key={link}>
                <FooterLink href={linkUrl} target='_blank'>
                  {link}
                </FooterLink>
              </LinksItem>
            );
          })}
        </LinksList>
      </FooterLinks>
    );
  });

  return (
    <FooterWrapper>
      <FooterContainer>
        <Content>
          <Information title={title} text={text} />
          <LinksWrapper>{linksColumnList}</LinksWrapper>
        </Content>
        <Copyright>{copyright}</Copyright>
      </FooterContainer>
    </FooterWrapper>
  );
};
