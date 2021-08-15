import React from 'react'
// import Loader from '../components/Loader'
import Cards from '../components/Cards'
const ProjectPage = () => {
  return (
    <section className="project">
      {/* <Loader /> */}
      <div className="project__title">
        <h3>
          Shaping world class websites,
          <br /> designs and experiences
        </h3>
        <p>
          I can help you successfully take your business online while
          assisting you throughout the building process.
        </p>
      </div>
      <h3>Personal Projects</h3>
      <Cards />
    </section>
  )
}

export default ProjectPage
