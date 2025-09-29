import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';
import SideBar from '../Components/SideBar/SideBar';

function DashboardLayout () {
  const [isSideBarOpen, setIsSideBarOpen] = useState (true);
  window.addEventListener ('resize', () => {
    if (window.innerWidth < 774) {
      setIsSideBarOpen (false);
    } else {
      setIsSideBarOpen (true);
    }
  });
  return (
    <div className="w-screen h-screen relative overflow-x-hidden">
      {/* SideBar */}
      <SideBar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      {/* Main Content */}
      <div
        className={`transition-all duration-300 ease-in-out ${isSideBarOpen ? 'md:ml-64' : 'md:ml-24'}`}
      >
        <header className="w-screen h-12 bg-gradient-to-r from-gray-800 to-gray-600" />
        <div className="h-screen w-full m-4 relative">
          <Outlet />
        </div>
      </div>
      <div className="absolute bottom-0 footer border-t border-orange-800/50 w-screen h-8" />
    </div>
  );
}

export default DashboardLayout;
