import { Container } from '@components/App/styled';
import {
  ContactAddress,
  ContactItem,
  ContactLinkMail,
  ContactLinkPhone,
  ContactList,
  ContactUsContent,
  ContactUsTitle,
  MainContactUs,
} from '@pages/Contacts/styled';

const Contacts = () => {
  return (
    <MainContactUs>
      <Container>
        <ContactUsContent>
          <ContactUsTitle>Contact Us:</ContactUsTitle>
          <ContactList>
            <ContactItem>
              <ContactLinkMail>contact@modsen-software.com</ContactLinkMail>
            </ContactItem>
            <ContactItem>
              Phone: <ContactLinkPhone>+48501157180</ContactLinkPhone>
            </ContactItem>
          </ContactList>
          <ContactUsTitle>Based in:</ContactUsTitle>
          <ContactAddress>Warsaw, Poland, Stefana Okrzei 1a/10</ContactAddress>
        </ContactUsContent>
      </Container>
    </MainContactUs>
  );
};

export default Contacts;
