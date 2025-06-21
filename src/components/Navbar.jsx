import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="navbar-brand animate-fadeIn">Program</Link>
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/proyectos" className="nav-link">Proyectos</Link>
            <Link to="/equipo" className="nav-link">Equipo</Link>
            <Link to="/contacto" className="btn btn-primary">Contacto</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;