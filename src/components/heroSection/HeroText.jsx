import React from 'react'

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center'>
        <h2 className='lg:text-2xl sm:text-xl  uppercase text-cyan-400'>Full Stack Web Developer</h2>
        <h1 className='md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange-400 font-bold uppercase'>Paras Rana</h1>
        <p className='text-lg mt-4 text-white'>A passionate Web and ML Developer 
            <br />with Over 2 years of experience</p>
    </div>
  )
}

export default HeroText
