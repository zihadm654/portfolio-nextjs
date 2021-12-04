import Image from 'next/image';

const CaseDetails = ({ project }) => {
  return (
    <section className="case__details">
      {project && (
        <>
          <div className="container">
            <div className="case__study--left">
              <div className="context">
                <p>Case Study</p>
                <h4>{project.title}</h4>
              </div>
              <div className="context">
                <p>My Role</p>
                <h5>{project.role}</h5>
              </div>
              <div className="context">
                <p>Client</p>
                <h5>{project.client}</h5>
              </div>
              <div className="context">
                <p>Year</p>
                <h5>{project.time}</h5>
              </div>
            </div>
            <div className="case__study--right">
              <h4>{project.name}</h4>
              <h5>{project.sub}</h5>
            </div>
          </div>
          <div className="img__wrapper">
            <Image src={project.img} alt={project.img} layout="fill" />
          </div>
        </>
      )}
    </section>
  );
};

export default CaseDetails;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const data = await fetch(
    `http://localhost:3000/api/project_data?slug=${params.slug}`
  );
  const project = await data.json();

  return {
    props: { project },
    revalidate: 1,
  };
};
