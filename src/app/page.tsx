import type { Metadata } from 'next';
import About from '../sections/About';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Blogs from '../sections/Blogs';
import { config } from '@/lib/constant';
import { PageWrapper } from '@/utility/page-warpper';

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
  return (
    <PageWrapper className='h-screenHeightWithoutHeader'>
    <div className='container'>
      <Hero />
      <Projects data={data} />
      <Blogs />
      <Skills />
      <About />
    </div>
    </PageWrapper>
  );
}

export const metadata: Metadata = {
  title: 'Home Page',
  description:
    'This about page holds all the necessary information describing abdul malek zihad',
};