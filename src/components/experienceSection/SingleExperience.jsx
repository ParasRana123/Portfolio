import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const SingleExperience = ({ experience }) => {
  return (
    <motion.div 
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="w-[280px] h-[340px] md:h-[360px] border-2 border-orange-500 border-dashed rounded-2xl p-5 shadow-md hover:shadow-orange-500 transition duration-300 ease-in-out overflow-hidden"
    >
      <p className="font-bold text-cyan-500 text-lg">{experience.job}</p>
      <p className="text-orange-500">{experience.company}</p>
      <p className="text-gray-400 text-sm">{experience.date}</p>
      <ul className="list-disc mt-4 pl-5 text-white text-sm space-y-1">
        {experience.responsibilities.map((resp, index) => (
          <li key={index} className="leading-snug">{resp}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;