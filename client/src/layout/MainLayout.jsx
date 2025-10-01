import {Outlet} from 'react-router-dom';
import {Navbar} from '../Components/Navbar/Navbar';

const MainLayout = () => {
  return (
    <div className="w-screen h-screen text-black">
      <Navbar nav_brand={<h2>Servizo</h2>} />
      <Outlet />
    </div>
  );
};

export default MainLayout;
