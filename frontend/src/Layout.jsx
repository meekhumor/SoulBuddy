import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function Layout() {
  const location = useLocation();

  const renderHeader = () => {
    if (location.pathname === '/') {
      return <Header />;
    }
    return null; 
  };

  const renderFooter = () => {
    if (location.pathname === '/') {
      return <Footer />;
    }
    return null; 
  };

  return (
    <>
      {renderHeader()}
      <Outlet />
      {renderFooter()}
    </>
  );
}

export default Layout;
