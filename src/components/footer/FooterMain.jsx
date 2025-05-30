import React from 'react';

const Links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" }
];

const FooterMain = () => {
  return (
    <div className='px-4'>
      {/* Divider Line */}
      <div className='w-full h-[1px] bg-[#9e9e9e] mt-24'></div>

      {/* This section is hidden on small screens */}
      <div className='md:flex hidden justify-between mt-4 max-w-[1200px] mx-auto'>
        <p className='text-3xl text-[#9e9e9e]'>Paras Rana</p>
        <ul className='flex gap-4 text-[#9e9e9e] text-xl'>
          {Links.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href={`#${item.section}`}
                  className='hover:text-white transition-all duration-500 cursor-pointer'
                >
                  {item.link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* This section is always visible */}
      <p className='max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-gray-500'>
        © 2025 Paras | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;