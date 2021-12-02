import Image from 'next/image';

const CaseDetails = ({ project }) => {
  return (
    <section className="case__details">
      <div className="case__study">
        <h3>Case Study</h3>
        <p>Dividing projects into parts</p>
      </div>
      {project && (
        <div className="container">
          <div className="img__wrapper">
            <Image src={project.img} alt={project.img} layout="fill" />
          </div>
          <div className="content">
            <h4>{project.name}</h4>
            <p>{project.description}</p>
          </div>
        </div>
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
