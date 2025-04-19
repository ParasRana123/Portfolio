import React from 'react';
import { Link } from 'react-scroll';

const Links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" }
];

function NavbarLinks({ menuOpen , setMenuOpen }) {
  return (
    <ul className={`gap-6 text-white font-bold text-center 
      lg:flex lg:flex-row lg:relative lg:bg-black lg:top-0 lg:translate-x-0 
      ${menuOpen ? "flex" : "hidden"} flex-col absolute top-[120%] left-[50%] -translate-x-[50%] 
      text-xl bg-[rgba(173,216,230,0.7)] backdrop-blur-lg w-full py-1`}>
      {Links.map((link, index) => (
        <li key={index} className='group'>
          <Link
            to={link.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            onClick={() => setMenuOpen(false)}
            className='cursor-pointer text-white hover:text-cyan-300 transition-all duration-500'
          >
            {link.link}
          </Link>
          <div className='mx-auto bg-cyan-600 w-0 group-hover:w-full h-[1px] transition-all duration-500'></div>
        </li>
      ))}
    </ul>
  );
}

export default NavbarLinks;