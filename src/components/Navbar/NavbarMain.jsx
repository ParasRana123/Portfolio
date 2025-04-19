import React, { useState } from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';
import { GiHamburgerMenu } from "react-icons/gi";

function NavbarMain() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2'>
      <div className='flex justify-between w-full bg-black items-center p-4 rounded-r-full rounded-l-full border-[0.5px] border-orange-100'>
        <NavbarLogo />
        <div className='hidden lg:block'>
          <NavbarLinks menuOpen={true} />
        </div>
        <div className='lg:block'>
          <NavbarBtn />
        </div>
      </div>
      {/* Hamburger for small screens */}
      <div className='lg:hidden flex items-center p-4 bg-black rounded-full border-[0.5px]'>
        <button className='text-2xl p-2 border border-orange-400 rounded-full text-white' onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Nav Links when open */}
      <div className='absolute top-[100%] w-full lg:hidden left-0 mt-5'>
        <NavbarLinks menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      </div>
    </nav>
  );
}

export default NavbarMain;