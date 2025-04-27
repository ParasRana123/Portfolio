import React from 'react'
import CertificateText from './CertificateText'
import SingleCertificate from './SingleCertificate'

const certificates = [
  {
    name: "API Fundamentals Students Expert",
    year: "Jan 2025",
    issued: "Postman",
    link: "https://badgr.com/public/assertions/oVfChpBaSTOLAFjO8NmTTQ",
  },
  {
    name: "Complete Generative AI Bootcamp",
    year: "Jan 2025",
    issued: "Udemy",
    link: "https://www.udemy.com/certificate/UC-4e560c4c-31a4-49d0-a6f5-b650f46a85f3/",
  },
  {
    name: "Data Visualisation",
    year: "Jan 2025",
    issued: "Kaggle",
    link: "https://www.kaggle.com/learn/certification/parasrana12/data-visualization",
  },
  {
    name: "Feature Engineering",
    year: "Jan 2024",
    issued: "Kaggle",
    link: "https://www.kaggle.com/learn/certification/parasrana12/feature-engineering",
  },
];

const CertificateMain = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <CertificateText />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {certificates.map((item, index) => (
          <SingleCertificate 
            key={index} 
            name={item.name} 
            year={item.year} 
            issued={item.issued} 
            link={item.link} 
          />
        ))}
      </div>
    </div>
  );
}

export default CertificateMain