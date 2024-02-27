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
`;

export const BannerTitle = styled.h1`
  text-align: end;
  font-size: ${({ theme }) => theme.fontSizes.px76};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-right: 65px;
`;

export const BannerText = styled.p`
  margin-top: 40px;
  max-width: 350px;
  font-size: ${({ theme }) => theme.fontSizes.px25};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.fontNavBar};
  text-align: center;
  line-height: 46px;
`;

export const BannerLogo = styled.div``;
