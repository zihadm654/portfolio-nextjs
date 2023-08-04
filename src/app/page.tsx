import type { Metadata } from 'next';
import About from '../sections/About';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Blogs from '../sections/Blogs';
import { config } from '@/lib/constant';

const getData = async () => {
  const URL = config.url;
  const res = await fetch(`${URL}/api/projects`, {
    next: { revalidate: 1060 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export default async function Page() {
  // const data = await getData();
  // console.log(data);
  return (
    <div className='container'>
      <Hero />
      {/* <Projects data={data} /> */}
      <Blogs />
      <Skills />
      <About />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Home Page',
  description:
    'This about page holds all the necessary information describing abdul malek zihad',
  metadataBase: new URL('https://abdulmalekzihad.me'),

};