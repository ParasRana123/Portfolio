import React from 'react';
import { Link } from 'react-scroll';

const Links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Certificate", section: "certificates" },
  { link: "Contact", section: "contact" }
];

function NavbarLinks({ menuOpen, setMenuOpen }) {
  return (
    <ul
      className={`flex flex-col items-center gap-6 text-white font-bold text-center
        absolute top-[120%] left-1/2 -translate-x-1/2 
        text-xl bg-[rgba(173,216,230,0.7)] backdrop-blur-lg w-full py-3 px-4
        ${menuOpen ? "flex" : "hidden"}
        lg:flex lg:flex-row lg:static lg:translate-x-0 lg:bg-black lg:py-0 lg:px-6 lg:w-auto`}
    >
      {Links.map((item, index) => (
        <li key={index} className="group">
          <Link
            to={item.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer text-white hover:text-cyan-300 transition-all duration-300"
          >
            {item.link}
          </Link>
          <div className="mx-auto bg-cyan-600 w-0 group-hover:w-full h-[2px] transition-all duration-300"></div>
        </li>
      ))}
    </ul>
  );
}

export default NavbarLinks;