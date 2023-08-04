//import { motion } from 'framer-motion';
//import { fadeIn } from '../../utility/Animation';
import { Metadata } from 'next/types';
import Cards from '../../components/Cards';
import { config } from '@/lib/constant';

const getData = async () => {
  const URL = config.url;
  const res = await fetch(`${URL}/api/projects`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};
export default async function Page() {
  const data = await getData();
  return (
    <>
      <section className='projects'>
        <div
          // variants={stagger}
          // initial="hidden"
          // animate="show"
          className='projects__title'
        >
          <h3>
            Shaping world class websites,
            <br /> designs and experiences
          </h3>
          <p>
            I can help you successfully take your business online while
            assisting you throughout the building process.
          </p>
        </div>
        <div className='container'>
          <h3>Featured Projects</h3>
          <div className='cards'>
            {data?.map((item) => (
              <Cards
              id={item.id}
                key={item.id}
                time={item.time}
                description={item.description}
                title={item.title}
                repo={item.repo}
                site={item.site}
                img={item.img}
                createdAt={item.createdAt}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata: Metadata = {
  title: 'projects',
  description:
    'This project page holds all the projects completed for showcase.',
};
// export const dynamicParams = false
// export const revalidate = true
// export const fetchCache = 'auto'
// export const runtime = 'nodejs'
// export const preferredRegion = 'auto'
// export const maxDuration = 5