import BannerLogoSvg from '@assets/Banner-logo.svg';
import { Container } from '@components/App/styled';
import {
  BannerContent,
  BannerInform,
  BannerLogo,
  BannerText,
  BannerTitle,
  BannerWrapper,
} from '@components/Banner/styled';

export const Banner = () => {
  return (
    <BannerWrapper>
      <Container>
        <BannerContent>
          <BannerInform>
            <BannerTitle>Modsen Currency Tracker</BannerTitle>
            <BannerText>Quotes for the dollar and other international currencies.</BannerText>
          </BannerInform>
          <BannerLogo>
            <BannerLogoSvg />
          </BannerLogo>
        </BannerContent>
      </Container>
    </BannerWrapper>
  );
};
