import React from 'react'
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import SingleSkill from './SingleSkill';
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'
import { GiBrain } from "react-icons/gi";
import { BsTranslate } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";

const skills = [
    {
        skill: "AI/ML",
        icon: GiBrain
    },
    {
        skill: "NLP",
        icon: BsTranslate
    },
    {
        skill: "Tailwind CSS",
        icon: SiTailwindcss
    },
    {
        skill: "PHP",
        icon: FaPhp
    },
    {
        skill: "MongoDB",
        icon: SiMongodb
    },
    {
        skill: "ExpressJS",
        icon: FaNodeJs
    },
    {
        skill: "React",
        icon: FaReact
    },
    {
        skill: "Node",
        icon: FaNode
    },
    {
        skill: "Python",
        icon: FaPython
    },
];

const AllSkillsSM = () => {
  return (
    <div className='grid md:grid-cols-4 sm:gap-cols-2 gap-12 my-12'>
        {skills.map((item , index) => {
            return <motion.div 
                    variants={fadeIn("up" , 0.2)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{once: false , amount: 0.7}}
            key={index} className='flex flex-col items-center'>
                <item.icon className='text-7xl text-orange-500 '/>
                <p className='text-center mt-4 text-white'>{item.skill}</p>
            </motion.div>
        })}
    </div>
  )
}

export default AllSkillsSM
