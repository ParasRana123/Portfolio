import React from 'react'

const SingleCertificate = ({ name, year, issued, link }) => {
  return (
    <div className="border border-gray-300 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300 bg-white dark:bg-gray-800 w-full h-full flex flex-col justify-between">
      <div>
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800 dark:text-white">{name}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-2"><span className="font-semibold">Year:</span> {year}</p>
        <p className="text-gray-600 dark:text-gray-300 mb-4"><span className="font-semibold">Issued by:</span> {issued}</p>
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