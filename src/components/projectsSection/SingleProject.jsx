import React from 'react';
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <motion.div 
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Text Section */}
      <div className="text-center md:text-left md:max-w-[50%] w-full">
        <h2 className="text-2xl md:text-3xl text-orange-500">{name}</h2>
        <p className="text-xl font-light text-white mt-2">{year}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-4 text-cyan-500 hover:text-orange-500 transition-all duration-300"
        >
          View <BiSolidRightTopArrowCircle className="ml-2" />
        </a>
      </div>

      {/* Image Section */}
      <div className="w-full md:max-w-[400px] overflow-hidden rounded-xl border border-white hover:scale-105 transform transition-transform duration-500">
        <div className="w-full h-full bg-cyan-500 opacity-50 absolute top-0 left-0 hover:opacity-0 transition-opacity duration-500 hidden md:block"></div>
        <img src={image} alt="Project" className="w-full h-auto object-cover" />
      </div>
    </motion.div>
  );
};

export default SingleProject;