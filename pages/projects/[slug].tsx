import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import Image from "next/image";
import { db } from "../../lib/firebase";
import Head from "next/head";

const CaseDetails = ({ project }) => {
  return (
    <>
      <Head>
        <title>{project.name}</title>
        <meta name="description" content={project.description} />
      </Head>
      <section className="case__details">
        {project && (
          <>
            <div className="container">
              <div className="case__study--left">
                <div className="context">
                  <p>Case Study</p>
                  <h4>{project.name}</h4>
                </div>
                <div className="context">
                  <p>My Role</p>
                  {project.role.map((item, i) => (
                    <h5 key={i}>{item}</h5>
                  ))}
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
                <h5>{project.description}</h5>
              </div>
            </div>
            <div className="img__wrapper">
              <Image src={project.img} alt={project.img} layout="fill" />
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default CaseDetails;

export const getStaticPaths = async () => {
  const snapshot = await getDocs(collection(db, "projects"));
  const paths = snapshot.docs.map((doc) => {
    return {
      params: { slug: doc.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.slug;
  const docRef = doc(db, "projects", id);
  const docSnap = await getDoc(docRef);
  const project = {
    id: docSnap.id,
    ...docSnap.data(),
    createdAt: docSnap.data().createdAt.toMillis(),
  };
  return {
    props: { project },
  };
};
