import Head from 'next/head';
import About from '../src/layouts/About';
import Hero from '../src/layouts/Hero';
import Projects from '../src/layouts/Projects';
import Skills from '../src/layouts/Skills';
import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '../src/lib/firebase';
import Blogs from '../src/layouts/Blogs';
import { getAllPosts } from '../src/utility/Functionality';
import { ProjectsTypes, BlogTypes } from '../src/utility/Types';

interface Props {
  posts: ProjectsTypes[];
  blogs: BlogTypes[];
}
const metaUrl =
  'https://firebasestorage.googleapis.com/v0/b/portfolio-next-50c1e.appspot.com/o/Facebook%20cover%20-%202.jpg?alt=media&token=d7474dda-4d4e-44d1-bca3-110a75bcffe6';

const Home: React.FC<Props> = ({ posts, blogs }: Props) => {
  return (
    <motion.div className="container" exit={{ opacity: 0 }}>
      <Head>
        <title>HomePage || Abdul Malik</title>
        <meta
          name="description"
          content="Abdul malek personal site describing my work skills and many more aspect of who am i."
        />
        <meta
          property="og:url"
          content="https://portfolio-nextjs-zihadm654.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta
          property="fb:app_id"
          content="https://www.facebook.com/zihadm654"
        />
        <meta
          property="og:title"
          content="Abdul Malik personal website for professional work"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Abdul malek personal site describing my work skills and many more aspect of who am i"
        />
        <meta property="og:image" content={metaUrl} />
      </Head>
      <Hero />
      <Projects posts={posts} />
      <Blogs blogs={blogs} />
      <Skills />
      <About />
    </motion.div>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  //fetching projects
  const res = query(
    collection(db, 'projects'),
    limit(6),
    orderBy('createdAt', 'desc')
  );
  const snap = await getDocs(res);
  const projects = snap?.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
      createdAt: doc.data().createdAt.toMillis(),
    };
  });
  const posts = projects;
  // blogs
  const blogs = getAllPosts()
    .slice(0, 3)
    .map((blog) => blog.meta);
  return {
    props: { posts, blogs },
  };
};
