import {lazy} from 'react';
import {
  HOME_ROUTE,
  NEWS_ROUTE,
  CONTACTS_ROUTE,
  FAVORITES_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  ERROR_ROUTE, APARTMENTS_ROUTE,
} from './utils/consts';

const HomePage = lazy(() => import('./pages/home-page/HomePage'));
const NewsPage = lazy(() => import('./pages/news-page/NewsPage'));
const ContactsPage = lazy(() => import('./pages/contacts-page/ContactsPage'));
const ApartmentsPage = lazy(() => import('./pages/apartments-page/ApartmentsPage'));
const FavoritesPage = lazy(() => import('./pages/favorites-page/FavoritesPage'));
const LoginPage = lazy(() => import('./pages/login-page/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/registration-page/RegistrationPage'));
const ErrorPage = lazy(() => import('./pages/error-page/ErrorPage'));

export const publicRoutes = [
  {path: ERROR_ROUTE, Component: ErrorPage},
  {path: NEWS_ROUTE, Component: NewsPage},
  {path: LOGIN_ROUTE, Component: LoginPage},
  {path: REGISTRATION_ROUTE, Component: RegistrationPage},
  {path: FAVORITES_ROUTE, Component: FavoritesPage},
  {path: CONTACTS_ROUTE, Component: ContactsPage},

  {path: HOME_ROUTE, Component: HomePage},
  {path: APARTMENTS_ROUTE, Component: ApartmentsPage},

];

export const privateRoutes = [
  // {path: ADMIN_ROUTE, Component: AdminPage},
];
