import { Metadata } from 'next';
import About from '../sections/About';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Blogs from '../sections/Blogs';
import { config } from '@/lib/constant';

const URL = config.url;

const getData = async () => {
  const res = await fetch(`${URL}/api/projects`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const Home = async () => {
  const data = await getData();
  console.log(data, 'fetchdata');
  return (
    <div className='container'>
      <Hero />
      <Projects data={data} />
      <Blogs />
      <Skills />
      <About />
    </div>
  );
};
export default Home;
