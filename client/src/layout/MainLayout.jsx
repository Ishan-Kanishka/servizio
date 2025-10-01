import {Outlet} from 'react-router-dom';
import {Navbar} from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
  return (
    <div className="w-screen h-screen text-black">
      <Navbar nav_brand={<h2>Servizo</h2>} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
