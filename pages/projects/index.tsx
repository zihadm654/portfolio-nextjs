import { db } from "../../lib/firebase";
import { getDocs, collection } from "firebase/firestore";
import { GetStaticProps } from "next";
import Cards from "../../src/components/Cards";
import Head from "next/head";

const ProjectPage = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Projects page || Abdul Malek</title>
        <meta
          name="projects"
          content="This project page holds all the projects completed for showcase."
        ></meta>
      </Head>
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

export const getStaticProps: GetStaticProps = async () => {
  const colRef = collection(db, "projects");

  const res = await getDocs(colRef);
  const projects = res?.docs.map((doc) => {
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
