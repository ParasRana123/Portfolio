import React from 'react'
import CertificateText from './CertificateText'

const projects = [
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
    <div>
        <CertificateText />
    </div>
  )
}

export default CertificateMain
