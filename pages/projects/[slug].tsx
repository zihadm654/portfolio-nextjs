import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import Image from 'next/image';
import { db } from '../../src/lib/firebase';
import Head from 'next/head';
import Link from 'next/link';
import { ProjectsTypes } from '../../src/utility/Types';
import { SiGithub } from 'react-icons/si';
import { VscLiveShare } from 'react-icons/vsc';

interface Props {
  project: ProjectsTypes;
}
const CaseDetails = ({ project }: Props) => {
  return (
    <>
      <Head>
        <title>{project.name} || Abdul Malek</title>
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
                <div className="context links">
                  <p>Links</p>
                  <div className="button__links">
                    <Link className="github" href={project.repo}>
                        <p>Source Code</p>
                        <SiGithub />
                    </Link>
                    <Link className="livesite" href={project.site}>
                        <p>Live Site</p>
                        <VscLiveShare />
                    </Link>
                  </div>
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
                <h5>Project Description</h5>
                <p>{project.description}</p>
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
  const snapshot = await getDocs(collection(db, 'projects'));
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
  const docRef = doc(db, 'projects', id);
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
