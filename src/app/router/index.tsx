import { FC } from 'react';
import { RouterProvider, createBrowserRouter, RouteObject } from 'react-router-dom';
import { Layout } from 'processes';
import { ROUTES, getLazyComponent } from 'shared';

const Main = getLazyComponent('pages', 'Main');
const Vacancy = getLazyComponent('pages', 'Vacancy');
const Favorites = getLazyComponent('pages', 'Favorites');
const NotFound = getLazyComponent('pages', 'NotFound');

export const routes: RouteObject[] = [
  {
    path: ROUTES.main,
    element: <Layout />,
    id: 'Layout',
    children: [
      {
        index: true,
        element: <Main />,
        id: 'Main'
      },
      {
        path: ROUTES.vacancy,
        element: <Vacancy />,
        id: 'Vacancy'
      },
      {
        path: ROUTES.favorites,
        element: <Favorites />,
        id: 'Favorites'
      },
      {
        path: ROUTES.notFound,
        element: <NotFound />,
        id: 'NotFound'
      }
    ]
  }
];

const router = createBrowserRouter(routes);

export const Router: FC = () => <RouterProvider router={router} />;
