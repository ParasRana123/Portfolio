import React from 'react'

const SingleCertificate = ({ name, year, issued, link }) => {
  return (
    <div className="border border-gray-300 rounded-2xl p-6 bg-[#61453d] dark:bg-gray-800 w-full h-full flex flex-col justify-between shadow-[0_4px_20px_rgba(255,255,255,0.3)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.5)] hover:scale-105 transition transform duration-300">
      <div>
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white">{name}</h2>
        <p className="text-gray-400 dark:text-gray-300 mb-2"><span className="font-semibold">Year:</span> {year}</p>
        <p className="text-gray-400 dark:text-gray-300 mb-4"><span className="font-semibold">Issued by:</span> {issued}</p>
      </div>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 hover:underline break-words mt-auto"
      >
        View Certificate
      </a>
    </div>
  )
}

export default SingleCertificate