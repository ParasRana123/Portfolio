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
import { FaBrain } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdTranslate } from "react-icons/md";

const skills = [
    {
        skill: "AI/ML",
        icon: FaBrain
    },
    {
        skill: "NLP",
        icon:  MdTranslate
    },
    {
        skill: "Tailwind CSS",
        icon: RiTailwindCssFill
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

const AllSkills = () => {
  return (
    <div>
        <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
            {skills.map((item , index) => {
                return (
                    <motion.div
                                      variants={fadeIn("up" , `0.${index}`)}
                                      initial='hidden'
                                      whileInView='show'
                                      viewport={{once: false , amount: 0}}
                    >
                        <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>} />
                    </motion.div>
                );
            })}
        </div>
    </div>
  )
}

export default AllSkills