import Cards from '../../src/components/Cards';
import clientPromise from '../../lib/mongo';

const ProjectPage = ({ projects }) => {
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
          <h3>Featured Projects</h3>
          <Cards projects={projects} />
        </div>
      </section>
    </>
  );
};

export default ProjectPage;

export const getStaticProps = async () => {
  const client = await clientPromise;
  const db = client.db('portfolio_db');

  const data = await db.collection('projects').find().toArray();
  const projects = JSON.parse(JSON.stringify(data));

  return {
    props: { projects },
  };
};
