import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import { lazy } from 'react';

const NotFoundLayout = lazy(() => import('@/layouts/NotFoundLayout'));

const QRCodePage = lazy(() => import('@/solutions/newbie/qr-code-component'));
const MultiStepForm = lazy(() => import('@/solutions/advanced/multi-step-form'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'newbie/qr-code-component',
        element: <QRCodePage />,
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
    ],
  },
  {
    path: '*',
    element: <NotFoundLayout />,
  },
]);
