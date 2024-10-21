import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full sticky top-0 bg-orange-500 z-50 shadow-lg">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img className="w-20" src={logo} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          } md:translate-y-0 md:opacity-100 transform md:block w-full md:w-auto absolute md:relative top-16 left-0 md:top-0 md:left-auto bg-orange-500 md:bg-transparent transition-all duration-300 ease-in-out z-40`}
        >
          <ul className="flex flex-col md:flex-row gap-6 md:gap-10 text-white p-6 md:p-0">
            <li>
              <a className="hover:bg-orange-600 p-3 rounded-md" href="/">
                HOME
              </a>
            </li>
            <li>
              <a className="hover:bg-orange-600 p-3 rounded-md" href="/about">
                ABOUT US
              </a>
            </li>
            <li>
              <a className="hover:bg-orange-600 p-3 rounded-md" href="/admission">
                ADMISSION
              </a>
            </li>
            <li>
              <a className="hover:bg-orange-600 p-3 rounded-md" href="/">
                ACADEMICS
              </a>
            </li>
            <li>
              <a className="hover:bg-orange-600 p-3 rounded-md" href="/">
                CONTACT
              </a>
            </li>
            <li>
              <a className="hover:bg-orange-600 p-3 rounded-md" href="/register">
                REGISTER
              </a>
            </li>
            <li>
              <a className="hover:bg-orange-600 p-3 rounded-md" href="/login">
                LOGIN
              </a>
            </li>
          </ul>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden focus:outline-none z-50"
          onClick={toggleMenu}
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
