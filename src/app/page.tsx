import type { Metadata } from 'next';
import About from '../components/sections/About';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Blogs from '../components/sections/Blogs';
import { config } from '@/lib/constant';
import FAQS from '@/components/sections/Accordian';
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
  const data = await getData();
  console.log(data, 'data');
  return (
    <div className='container'>
      <Hero />
      <Projects data={data} />
      <Blogs />
      <Skills />
      <About />
      <FAQS />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Home Page',
  description:
    'This about page holds all the necessary information describing abdul malek zihad',
};
