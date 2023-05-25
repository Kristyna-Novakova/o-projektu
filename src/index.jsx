import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style.css';
import { ProjectPage } from './Pages/ProjectPage/projectpage';
import { AuthorPage } from './Pages/AuthorPage';

const App = () => {
  return (
    <div className="container">
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
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

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
