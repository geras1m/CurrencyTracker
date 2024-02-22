import { INavLink, IRoute } from '@constants/router/types';
import { lazy } from 'react';

export const HomePage = lazy(() => import('@pages/Home'));
export const TimelinePage = lazy(() => import('@pages/Timeline'));
export const BanksPage = lazy(() => import('@pages/BankCard'));
export const ContactsPage = lazy(() => import('@pages/Contacts'));
export const NotFoundPage = lazy(() => import('@pages/NotFound'));

export const routerPaths = {
  HOME: '/',
  TIME_LINE: '/timeline',
  BANK_CARD: '/bank_card',
  CONTACTS: '/contacts',
  NOT_FOUND: '*',
};

export const routerNavLinks: INavLink[] = [
  { to: routerPaths.HOME, title: 'Home' },
  { to: routerPaths.TIME_LINE, title: 'Timeline' },
  { to: routerPaths.BANK_CARD, title: 'Bank card' },
  { to: routerPaths.CONTACTS, title: 'Contato' },
];

export const routesMap: IRoute[] = [
  { path: routerPaths.HOME, component: HomePage },
  { path: routerPaths.TIME_LINE, component: TimelinePage },
  { path: routerPaths.BANK_CARD, component: BanksPage },
  { path: routerPaths.CONTACTS, component: ContactsPage },
  { path: routerPaths.NOT_FOUND, component: NotFoundPage },
];
