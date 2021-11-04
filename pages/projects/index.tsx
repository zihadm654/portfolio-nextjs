import Cards from '../../src/components/Cards';
const ProjectPage = () => {
  return (
    <>
      <section className="project">
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
        <h2></h2>
      </section>
    </>
  );
};

export default ProjectPage;
