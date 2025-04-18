import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h1 className='text-6xl text-cyan-500 mb-10'>About Me</h1>
        <p className='text-white'>I'm a dedicated Full Stack Developer with expertise in Machine Learning, Deep Learning, NLP, and Generative AI. I specialize in building end-to-end web applications and integrating intelligent systems into real-world solutions. With a strong grasp of both frontend and backend technologies, I enjoy creating seamless, scalable, and smart user experiences. I'm driven by curiosity, innovation, and a passion for solving complex problems with technology.</p>
        <a href='/resume.pdf' download target="_blank" rel="noopener noreferrer" className='border border-orange-500 rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange-500 transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan-400'>Download my Resume</a>
    </div>
  )
}

export default AboutMeText