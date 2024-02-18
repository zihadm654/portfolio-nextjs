import type { Metadata } from 'next';
import About from '../components/sections/About';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Blogs from '../components/sections/Blogs';
import { config } from '@/lib/constant';
import FAQS from '@/components/sections/Accordian';
import { getProjects } from '@/actions/getProjects';

export default async function Page() {
  const data = await getProjects();
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
