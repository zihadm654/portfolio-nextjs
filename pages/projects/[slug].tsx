import React, { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom"
// import { projectData } from '../data/projectData.js'
const CaseDetails = () => {
  const [project, setProject] = useState(null);
  // const { slug } = useParams()

  return (
    <section className="case__details">
      <div className="case__study">
        <h2>Case Study</h2>
        <p>Dividing projects into parts</p>
      </div>
      <div className="container">
        <div className="img__wrapper"></div>
        <div className="content">
          <h4></h4>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default CaseDetails;
