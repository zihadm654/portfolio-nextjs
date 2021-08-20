import Cards from '../../src/components/Cards';
import Head from 'next/head';
const ProjectPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="title"
        />
      </Head>
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
