import React, { useState } from 'react';
import logo from '../assets/logo.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full sticky top-0 bg-orange-400 z-50">
      <div className="container mx-auto flex  justify-between">
        {/* Logo */}
        <div>
          <img
            className="w-20"
            src={logo}
            alt="logo"
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="">
            <svg
              className="w-8 h-8 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div className={`md:flex items-center justify-around flex-1 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row gap-6 md:gap-10 text-white">
            <li>
              <a className="hover:bg-orange-500 p-3 rounded-md " href="/">
                HOME
              </a>
            </li>
            <li>
              <a className="hover:bg-orange-500 p-3 rounded-md " href="/about">
                ABOUT US
              </a>
            </li>
            <li>
              <a className="hover:bg-orange-500 p-3 rounded-md " href="/admission">
                ADMISSION
              </a>
            </li>
            <li>
              <a className="hover:bg-orange-500 p-3 rounded-md " href="/">
                ACADEMICS
              </a>
            </li>
            <li>
              <a className="hover:bg-orange-500 p-3 rounded-md " href="/">
                CONTACT
              </a>
            </li>
          </ul>

          <ul className="flex flex-col md:flex-row ml-0 md:ml-10 gap-6 md:gap-0 text-gray-400">
          <li>
              <a className="hover:bg-orange-500 p-3 rounded-md text-white " href="/register">
                REGISTER
              </a>
            </li>
            <li>
              <a className="hover:bg-orange-500 p-3 rounded-md text-white " href="/login">
                LOGIN
              </a>
            </li>
    
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
