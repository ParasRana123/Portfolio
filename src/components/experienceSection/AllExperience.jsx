import React from 'react';
import SingleExperience from './SingleExperience';
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const experiences = [
  {
    job: "Blockchain & Cybersecurity",
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
    <div className="flex flex-col md:flex-row md:items-start md:justify-center gap-10 flex-wrap mt-10">
      {experiences.map((experience, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center gap-6">
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              className="hidden md:block"
            >
              <FaArrowRight className="text-4xl text-orange-500" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExperience;