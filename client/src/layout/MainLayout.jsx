import {Navbar} from '../Components/Navbar/Navbar';

const MainLayout = ({children}) => {
  return (
    <div className="w-screen h-screen text-black">
      <Navbar nav_brand={<h2>Servizo</h2>} />
      {children}
    </div>
  );
};

export default MainLayout;
