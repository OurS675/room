import { Outlet, useNavigation, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (navigation.state === 'loading') {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [navigation.state]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen w-full">
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
      <Navbar />
      <main className="flex-grow w-full">
        <div className="w-full h-full">
          <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;