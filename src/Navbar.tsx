//navigation menu imports
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";

import {Link} from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

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
  },[location]);

  return null;
}

const Navbar = () => {


  return (
    <div
    className="pt-12 px-[4%] flex justify-between font-semibold">
      <h1 className="text-lg cursor-pointer hover:text-violet-800"><Link to={"/"}>HEMANT MODI</Link></h1>
      <ul className=" flex gap-6 text-lg justify-center items-center">
        <li className="cursor-pointer hover:text-violet-800"><a href="#main-work" onClick={ScrollToAnchor}>WORKS</a></li>
        <li className="cursor-pointer hover:text-violet-800"><Link to={'/profile/creatives'}>CREATIVES</Link></li>
        <li className="cursor-pointer hover:text-violet-800"><Link to={'/profile/about'}>ABOUT</Link></li>
      </ul>
    </div>
  )
}

export default Navbar