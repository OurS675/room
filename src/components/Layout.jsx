import { Outlet, useNavigation, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import LoadingSpinner from './LoadingSpinner';

const Layout = () => {
  const navigation = useNavigation();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {navigation.state === "loading" ? (
          <LoadingSpinner />
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;