import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import ProjectDetail from '../pages/ProjectDetail';
import Team from '../pages/Team';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'proyecto/:id',
        element: <ProjectDetail />,
      },
      {
        path: 'equipo',
        element: <Team />,
      },
      {
        path: 'proyectos',
        element: <Projects />,
      },
      {
        path: 'contacto',
        element: <Contact />,
      },
      {
        path: '*',
        element: <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
          <p className="text-lg mb-4">Lo sentimos, la página que buscas no existe.</p>
        </div>,
      },
    ],
  },
])