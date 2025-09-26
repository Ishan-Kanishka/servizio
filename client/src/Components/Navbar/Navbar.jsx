import React, {useState} from 'react';

export const Navbar = ({nav_brand = <h2>Title</h2>}) => {
  const navLinks = [
    {name: 'Home', path: '/'},
    {name: 'Products', path: '/'},
    {name: 'Contact', path: '/'},
    {name: 'About', path: '/'},
  ];

  const [isMenuOpen, setIsMenuOpen] = useState (false);
  return (
    <div className="fixed w-screen">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex w-screen h-14 bg-blue-300 items-center justify-between px-12">
        <div className="nav-logo">
          {nav_brand}
        </div>
        <div className="nav-items">
          <ul className="flex items-center gap-5">
            {navLinks.map ((link, i) => (
              <li key={i}><a href={link.path}>{link.name}</a></li>
            ))}
          </ul>
        </div>
        <div className="nav-buttons">
          <button className="px-3 py-2 rounded-xl bg-gray-100">
            Get Started
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden relative">
        <div className="bar bg-blue-300 flex items-center justify-between px-5 h-12">
          <div className="nav-logo">
            {nav_brand}
          </div>
          <div className="nav-icon">
            <button
              className="text-2xl"
              onClick={() => setIsMenuOpen (!isMenuOpen)}
            >
              {isMenuOpen ? 'X' : '☰'}
            </button>
          </div>
        </div>
        <div
          className={`nav-bar -translate-x-full absolute bg-blue-300 h-screen w-64 flex flex-col items-center justify-center duration-300 transition-transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="nav-items">
            <ul className="flex flex-col gap-5">
              {navLinks.map ((link, i) => (
                <li key={i} className="text-xl text-center">
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-buttons absolute bottom-[20vh]">
            <button className="px-3 py-2 rounded-xl bg-gray-100">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
