import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Cierra el menú automáticamente al cambiar de página
    setMenuOpen(false);
  }, [location]);

  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 800); // Simula un retraso de carga
  };

  return (
    <>
      {loading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              border: '6px solid rgba(255, 255, 255, 0.3)',
              borderTop: '6px solid white',
              borderRadius: '50%',
              animation: 'spin 1.2s ease-in-out infinite'
            }}
          ></div>
          <style>{`
            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </div>
      )}

      {/* Floating Circle Button */}
      <div
        style={{
          position: 'fixed',
          top: '16px',
          left: menuOpen ? '256px' : '16px',
          width: '56px',
          height: '56px',
          backgroundColor: 'black',
          color: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
          zIndex: 1000,
          transition: 'left 0.3s ease, transform 0.3s ease',
          transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)'
        }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '24px', height: '3px', backgroundColor: 'white', margin: '4px auto', transition: 'transform 0.3s ease' }}></div>
          <div style={{ width: '24px', height: '3px', backgroundColor: 'white', margin: '4px auto', transition: 'transform 0.3s ease' }}></div>
          <div style={{ width: '24px', height: '3px', backgroundColor: 'white', margin: '4px auto', transition: 'transform 0.3s ease' }}></div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100%',
          width: '240px',
          backgroundColor: 'black',
          color: 'white',
          transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
          zIndex: 999,
          boxShadow: menuOpen ? '4px 0 8px rgba(0, 0, 0, 0.3)' : 'none'
        }}
      >
        <div style={{ padding: '16px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Menú</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '12px' }}><a onClick={() => handleNavigation('/')} style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}>Inicio</a></li>
            <li style={{ marginBottom: '12px' }}><a onClick={() => handleNavigation('/proyectos')} style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}>Proyectos</a></li>
            <li style={{ marginBottom: '12px' }}><a onClick={() => handleNavigation('/equipo')} style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}>Equipo</a></li>
            <li style={{ marginBottom: '12px' }}><a onClick={() => handleNavigation('/contacto')} style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}>Contacto</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;