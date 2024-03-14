import FooterInformLogo from '@assets/Logo.svg';
import { Inform, InformText, InformTitle, InformWrapper } from '@components/Footer/styled';
import { FC } from 'react';

interface IInformation {
  title: string;
  text: string;
}

export const Information: FC<IInformation> = ({ title, text }) => {
  return (
    <Inform>
      <InformWrapper>
        <FooterInformLogo />
        <InformTitle>{title}</InformTitle>
      </InformWrapper>
      <InformText>{text}</InformText>
    </Inform>
  );
};
