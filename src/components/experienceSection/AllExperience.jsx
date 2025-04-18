import React from 'react'
import SingleExperience from './SingleExperience';
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const experiences = [
  {
    job: "Blockchain & Cybersecurity.",
    company: "Smart India Hackathon",
    date: "Sept 2024 - Oct 2024",
    responsibilities: [
      "Traces final crypto receiver using transaction data analysis.",
      "Applies machine learning and visual graphs to detect suspicious wallets.",
      "Developed using React, Node.js, MongoDB, and Python backend.",
    ],
  },
    {
      job: "Hackatron",
      company: "IIIT Gwalior",
      date: "Oct 2024 - Nov 2024",
      responsibilities: [
        "Implemented a chatbot built with Langchain, Gemini and Llama.",
        "Offers AI chat, PDF summarization, career and code tools.",
        "Platform Boosts productivity with unified AI tools.",
      ],
    },
    {
      job: "Postman API Hackathon",
      company: "BITS Pilani",
      date: "Dec 2024 - Jan 2025",
      responsibilities: [
        "Created an application that allows users to book doctor appointments and find the nearest clinic using geolocation.",
        "Patients search doctors by illness, location, name.",
        "Developed using PHP, SQL, JavaScript, and APIs.",
      ],
    },
  ];

const AllExperience = () => {
  return (
        <div className='flex md:flex-row sm:flex-col items-center justify-between'>
        {experiences.map((experience , index) => {
            return (
                <>
                   <SingleExperience key={index} experience={experience}/>;
                   {index < 2 ? <motion.div
                           variants={fadeIn("right" , 0.2)}
                           initial='hidden'
                           whileInView='show'
                           viewport={{once: false , amount: 0}}
                   >
                    <FaArrowRight className='text-6xl text-orange-500 lg:block sm:hiden'/>
                   </motion.div>
                    : ""}
                </>
            )
        })}
        </div>
  )
}

export default AllExperience
