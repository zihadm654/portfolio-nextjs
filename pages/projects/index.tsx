import { db } from '../../lib/firebase';
import { query, getDocs, collection, orderBy, limit } from 'firebase/firestore';

import Cards from '../../src/components/Cards';

const ProjectPage = ({ projects }) => {
  console.log(projects);

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
  const colRef = collection(db, 'projects');

  const res = await getDocs(colRef);
  const projects = res.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt.toMillis(),
    };
  });
  return {
    props: { projects },
  };
};
