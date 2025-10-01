import {
  Receipt,
  Home,
  Menu,
  BookOpen,
  Leaf,
  Calendar,
  Users,
  UserCog2Icon,
  ShieldUserIcon,
  Megaphone,
} from 'lucide-react';
import {NavLink} from 'react-router-dom';

function SideBar({isSideBarOpen, setIsSideBarOpen}) {
  const links = [
    {
      name: 'Dashboard',
      Icon: Home,
      path: '',
    },
    {
      name: 'Orders',
      Icon: Receipt,
      path: '/orders',
    },
    {
      name: 'Menu',
      Icon: BookOpen,
      path: '/menu',
    },
    {
      name: 'Ingredients',
      Icon: Leaf,
      path: '/ingredients',
    },
    {
      name: 'Events',
      Icon: Calendar,
      path: '/events',
    },

    {
      name: 'Customers',
      Icon: Users,
      path: '/customers',
    },
    {
      name: 'Staff',
      Icon: UserCog2Icon,
      path: '/staff',
    },
    {
      name: 'Roles',
      Icon: ShieldUserIcon,
      path: '/roles',
    },
    {
      name: 'Promotions',
      Icon: Megaphone,
      path: '/promotions',
    },
  ];
  return (
    <div
      className={`${isSideBarOpen ? 'w-64' : 'w-15 md:w-24'} h-screen overflow-y-scroll fixed bg-gradient-to-b from-green-900 to-green-800/80 transition-all duration-300 ease-in-out z-50`}
    >
      <nav
        className={`mx-2 my-2 pt-5 flex flex-col ${isSideBarOpen ? '' : 'items-center'}`}
      >
        <li className="text-2xl flex items-center justify-between px-4 text-white font-bold font-mono">
          {isSideBarOpen ? 'Dashboard' : ''}
          <Menu
            onClick={() => setIsSideBarOpen (!isSideBarOpen)}
            size={24}
            className="hover:text-green-400 cursor-pointer transition-all duration-300 ease-in-out"
          />
        </li>
        <ul className="mt-5 flex flex-col gap-y-4 items-start px-2 text-center text-lg">
          {links.map ((link, index) => (
            <NavLink
              to={'/admin' + link.path}
              end
              key={index}
              className={({isActive}) =>
                `${isActive ? 'bg-green-500' : ''} px-6 py-3 flex items-center gap-2 rounded-2xl text-white w-full hover:bg-green-600/50 hover:text-green-200 transition-all duration-300 ease-in-out`}
            >
              <link.Icon />
              {isSideBarOpen ? link.name : ''}
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
