import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { ProjectPage } from './Pages/ProjectPage/projectpage';

const App = () => {
  return (
    <div className="container">
      <ProjectPage />
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
