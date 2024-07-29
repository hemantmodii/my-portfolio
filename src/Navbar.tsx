import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function ScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        lastHash.current = '';
      }, 100);
    }
  }, [location]);

  return null;
}

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };


  return (
    <div>
      <div className={`py-6 px-[4%] flex justify-between font-semibold ${sidebarOpen ? 'bg-gray-100': 'bg-violet-100'}`}>
        <h1 className="text-lg cursor-pointer hover:text-violet-800">
          <Link to="/">HEMANT MODI</Link>
        </h1>
        <ul className="hidden md:flex gap-6 text-lg justify-center items-center">
        <li className="cursor-pointer transition-all duration-400 ease-in-out hover:text-violet-800 hover:translate-y-[-4px]">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="cursor-pointer transition-all duration-400 ease-in-out hover:text-violet-800 hover:translate-y-[-4px]">
            <a href="/work" onClick={ScrollToAnchor}>WORKS</a>
          </li>
          <li className="cursor-pointer transition-all duration-400 ease-in-out hover:text-violet-800 hover:translate-y-[-4px]">
            <Link to="/creatives">CREATIVES</Link>
          </li>
        </ul>
        <button
          className="block md:hidden text-lg transition-colors duration-300 ease-in-out hover:text-violet-500"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`fixed bg-violet-50 top-0 left-0 w-full h-full z-50 transform ${
          sidebarOpen ? 'translate-x-[-40%]' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="pt-12 pr-[14%] flex justify-end font-semibold bg-violet-200 pb-12">
          <h1 className="text-2xl cursor-pointer hover:text-violet-800">
            <Link to="/" onClick={closeSidebar}>HEMANT MODI</Link>
          </h1>
          {/* <button
            className="block md:hidden text-lg"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button> */}
        </div>
        <ul className="flex flex-col gap-10 text-lg justify-end items-end pr-[14%] mt-12">
        <li className="font-semibold cursor-pointer transition-all duration-400 ease-in-out hover:text-violet-800 hover:translate-x-[-8px] hover:underline-offset-2 hover:underline">
            <Link to="/profile/about" onClick={closeSidebar}>ABOUT</Link>
          </li>
          <li className="font-semibold cursor-pointer transition-all duration-400 ease-in-out hover:text-violet-800 hover:translate-x-[-8px] hover:underline-offset-2 hover:underline">
            <a href="/work" onClick={closeSidebar}>WORKS</a>
          </li>
          <li className="font-semibold cursor-pointer transition-all duration-400 ease-in-out hover:text-violet-800 hover:translate-x-[-8px] hover:underline-offset-2 hover:underline">
            <Link to="/profile/creatives" onClick={closeSidebar}>CREATIVES</Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
