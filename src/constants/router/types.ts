import Home from '@pages/Home';
import Timeline from '@pages/Timeline';
import { LazyExoticComponent } from 'react';

export interface IRouterPaths {
  HOME: string;
  TIME_LINE: string;
  BANK_CARD: string;
  CONTACTS: string;
  NOT_FOUND: string;
}

export interface INavLink {
  to: string;
  title: string;
}

type LazyImportComponentType = typeof Home | typeof Timeline;

export interface IRoute {
  path: string;
  component: LazyExoticComponent<LazyImportComponentType>;
}
