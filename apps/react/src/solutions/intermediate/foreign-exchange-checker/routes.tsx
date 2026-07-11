import { lazy } from 'react';
import History from './pages/History/History';
import { Navigate, type RouteObject } from 'react-router';
import ForeignExchangeChecker from '.';

const Favorites = lazy(() => import('./pages/Favorites/Favorites'));
const Compare = lazy(() => import('./pages/Compare/Compare'));
const Log = lazy(() => import('./pages/Log/Log'));

export const foreignExchangeCheckerRoutes: RouteObject = {
  path: 'foreign-exchange-checker',
  element: <ForeignExchangeChecker />,
  children: [
    {
      index: true,
      element: <Navigate to="history" replace />,
    },
    {
      path: 'history',
      element: <History />,
    },
    {
      path: 'compare',
      element: <Compare />,
    },
    {
      path: 'favorites',
      element: <Favorites />,
    },
    {
      path: 'log',
      element: <Log />,
    },
  ],
};
