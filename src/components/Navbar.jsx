import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="navbar bg-white dark:bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="navbar-brand animate-fadeIn text-gray-800 dark:text-white">Program</Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="nav-links">
              <Link to="/" className="nav-link text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Inicio</Link>
              <Link to="/proyectos" className="nav-link text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Proyectos</Link>
              <Link to="/equipo" className="nav-link text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Equipo</Link>
              <Link to="/contacto" className="btn btn-primary">Contacto</Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;