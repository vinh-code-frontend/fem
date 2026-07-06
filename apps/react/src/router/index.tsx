import { createBrowserRouter, type RouteObject } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import { lazy } from 'react';

const NotFoundLayout = lazy(() => import('@/layouts/NotFoundLayout'));

const QRCodePage = lazy(() => import('@/solutions/newbie/qr-code-component'));
const MultiStepForm = lazy(() => import('@/solutions/advanced/multi-step-form'));

export const solutionRoutes: RouteObject[] = [
  {
    path: 'newbie',
    children: [
      {
        path: 'qr-code-component',
        element: <QRCodePage />,
      },
    ],
  },
  {
    path: 'advanced',
    children: [
      {
        path: 'multi-step-form',
        element: <MultiStepForm />,
      },
    ],
  },
];

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: solutionRoutes,
  },
  {
    path: '*',
    element: <NotFoundLayout />,
  },
];

export const router = createBrowserRouter(routes);
