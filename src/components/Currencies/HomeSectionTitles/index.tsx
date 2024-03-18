import { HomeSectionTitlesWrapper } from '@components/Currencies/HomeSectionTitles/styled';
import { FC } from 'react';

interface IHomeSectionTitlesProps {
  title: string;
}

export const HomeSectionTitles: FC<IHomeSectionTitlesProps> = ({ title }) => {
  return <HomeSectionTitlesWrapper>{title}</HomeSectionTitlesWrapper>;
};
