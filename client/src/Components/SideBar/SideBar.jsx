import {
  Receipt,
  Home,
  LayoutGrid,
  Menu,
  MessageCircle,
  Podcast,
  Smartphone,
  BookOpen,
  Leaf,
  Calendar,
  Users,
  UserCog2Icon,
  ShieldUserIcon,
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
  ];
  return (
    <div
      className={`${isSideBarOpen ? 'w-64' : 'w-15 md:w-24'} h-screen overflow-y-scroll fixed bg-gradient-to-b from-gray-950 to-gray-800/40 transition-all duration-300 ease-in-out z-50`}
    >
      <nav
        className={`mx-2 my-2 pt-5 flex flex-col ${isSideBarOpen ? '' : 'items-center'}`}
      >
        <li className="text-2xl flex items-center justify-between px-4 text-white font-bold font-mono">
          {isSideBarOpen ? 'Dashboard' : ''}
          <Menu
            onClick={() => setIsSideBarOpen (!isSideBarOpen)}
            size={24}
            className="hover:text-amber-500 cursor-pointer transition-all duration-300 ease-in-out"
          />
        </li>
        <ul className="mt-5 flex flex-col gap-y-4 items-start px-2 text-center text-lg">
          {links.map ((link, index) => (
            <NavLink
              to={'/dashboard' + link.path}
              end
              key={index}
              className={({isActive}) =>
                `${isActive ? 'bg-amber-500' : ''} px-6 py-3 flex items-center gap-2 rounded-2xl  w-full hover:bg-amber-500/90`}
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
