import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";

function NavbarBtn() {
  return (
    <button className='px-4 py-2 rounded-full text-xl font-bold text-white border-cyan-100 border flex items-center gap-1 bg-gradient-to-r from-cyan-700 to-orange-500 hover:border-oorange-500 hover:scale-110  transition-all duration-500'>Hire Me
    <div className='sm:hidden md:block'>
        <LuArrowDownRight />
    </div>
    </button>
  )
}
export default NavbarBtn
