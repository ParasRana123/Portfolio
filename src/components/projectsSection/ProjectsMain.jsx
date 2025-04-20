import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const projects = [
    {
      name: "Virtual Voice Assistant",
      year: "Jan 2025",
      align: "right",
      image: "/images/website-img-1.jpg",
      link: "https://github.com/ParasRana123/Movie_Recommender",
    },
    {
      name: "Movie Recommendation System",
      year: "Nov 2024",
      align: "left",
      image: "/images/website-img-2.webp",
      link: "https://github.com/ParasRana123/NOVA",
    },
    {
      name: "AI Chatbot Platform",
      year: "Oct 2024",
      align: "right",
      image: "/images/website-img-3.jpg",
      link: "https://github.com/ParasRana123/ShardAI",
    },
    {
      name: "AI-Powered Facial Recognition Match System",
      year: "Sept 2024",
      align: "left",
      image: "/images/website-img-4.jpg",
      link: "https://github.com/ParasRana123/CelebFacelookalike",
    },
  ];

const ProjectsMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
      <motion.div
              variants={fadeIn("up" , 0.2)}
              initial='hidden'
              whileInView='show'
              viewport={{once: false , amount: 0}}
      >
      <ProjectsText />
      </motion.div>
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
            {projects.map((item , index) => {
                return <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link}/>
            })}
        </div>
    </div>
  )
}

export default ProjectsMain