import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../components/Layout';

const Home = lazy(() => import('../pages/Home'));
const ProjectDetail = lazy(() => import('../pages/ProjectDetail'));
const Team = lazy(() => import('../pages/Team'));
const Projects = lazy(() => import('../pages/Projects'));
const Contact = lazy(() => import('../pages/Contact'));

const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Suspense fallback={<LoadingSpinner />}><Home /></Suspense>,
      },
      {
        path: 'proyecto/:id',
        element: <Suspense fallback={<LoadingSpinner />}><ProjectDetail /></Suspense>,
      },
      {
        path: 'equipo',
        element: <Suspense fallback={<LoadingSpinner />}><Team /></Suspense>,
      },
      {
        path: 'proyectos',
        element: <Suspense fallback={<LoadingSpinner />}><Projects /></Suspense>,
      },
      {
        path: 'contacto',
        element: <Suspense fallback={<LoadingSpinner />}><Contact /></Suspense>,
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