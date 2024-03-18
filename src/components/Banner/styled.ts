import { mediaSizes } from '@constants/theme/theme';
import styled from 'styled-components';

export const BannerWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.gradients.background};
`;

export const BannerContent = styled.div`
  display: flex;
  padding: 45px 0 60px;
`;

export const BannerInform = styled.div`
  max-width: 710px;
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (max-width: ${mediaSizes.maxWidth1050px}) {
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const BannerTitle = styled.h1`
  text-align: end;
  font-size: ${({ theme }) => theme.fontSizes.px76};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-right: 65px;

  @media (max-width: ${mediaSizes.maxWidth1050px}) {
    max-width: 100%;
    padding-right: 0;
    text-align: center;
  }

  @media (max-width: ${mediaSizes.maxWidth650px}) {
    font-size: 60px;
  }
`;

export const BannerText = styled.p`
  margin-top: 40px;
  max-width: 350px;
  font-size: ${({ theme }) => theme.fontSizes.px25};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.fontNavBar};
  text-align: center;
  line-height: 46px;

  @media (max-width: ${mediaSizes.maxWidth1050px}) {
    margin: 40px auto 0;
  }

  @media (max-width: ${mediaSizes.maxWidth650px}) {
    font-size: 20px;
  }
`;

export const BannerLogo = styled.div`
  @media (max-width: ${mediaSizes.maxWidth1050px}) {
    display: none;
  }
`;
