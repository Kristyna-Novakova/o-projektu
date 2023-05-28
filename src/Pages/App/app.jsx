import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProjectPage } from '../ProjectPage/projectpage';
import { AuthorPage } from '../AuthorPage/authorpage';

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProjectPage />,
  },
  {
    path: '/:authorId',
    element: <AuthorPage />,
  },
]);
