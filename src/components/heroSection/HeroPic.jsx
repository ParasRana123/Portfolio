import React from 'react'
import { FiHexagon } from "react-icons/fi";
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const HeroPic = () => {
  return (
    <motion.div 
    variants={fadeIn("left" , 0.2)}
    initial='hidden'
    whileInView='show'
    viewport={{once: false , amount: 0}}
    className='h-full flex items-center justify-center'>
        <img src="/images/paras.png" alt="Paras Rana" className='max-h-[450px] w-auto' />
        <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
        <FiHexagon className='md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan-400 blur-md animate-[spin_20s_linear_infinite]'/>
        </div>
    </motion.div>
  )
}

export default HeroPic