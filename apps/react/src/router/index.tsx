import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import { lazy } from 'react';

const QRCodePage = lazy(() => import('../solutions/newbie/qr-code-component/index'));
const NotFoundLayout = lazy(() => import('../layouts/NotFoundLayout'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'newbie/qr-code-component',
        element: <QRCodePage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundLayout />,
  },
]);
