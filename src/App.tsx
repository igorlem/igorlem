import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Main } from 'screens';
import { GlobalStyleWrapper } from 'components';
import 'i18n/config';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
]);

const App: React.FC = () => (
  <GlobalStyleWrapper>
    <RouterProvider router={router} />
  </GlobalStyleWrapper>
);

export default App;
