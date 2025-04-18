import React from 'react'

const SubHeroSection = () => {
  return (
    <div className='w-full border-y border-gray-300 text-gray-500 flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-4 bg-[#5D4037]'>
        <p className='hidden md:block'>Fast Learner</p>
        <p className='hidden md:block'>Team Work</p>
        <p className='block'>Details Master</p>
    </div>
  )
}

export default SubHeroSection