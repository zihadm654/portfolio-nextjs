import Cards from '../../src/components/Cards';
const ProjectPage = () => {
  return (
    <>
      <section className="projects">
        <div className="projects__title">
          <h3>
            Shaping world class websites,
            <br /> designs and experiences
          </h3>
          <p>
            I can help you successfully take your business online while
            assisting you throughout the building process.
          </p>
        </div>
        <div className="container">
          <h3>Personal Projects</h3>
          <Cards />
          <h2></h2>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
