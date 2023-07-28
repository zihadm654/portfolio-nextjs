//import { motion } from 'framer-motion';
//import { fadeIn } from '../../utility/Animation';
import Cards from '../../components/Cards';
const getData = async () => {
  const res = await fetch('http://localhost:3000/api/projects');
  console.log(res);
  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  return res.json()
};
const ProjectPage = async () => {
    const data = await getData();
    console.log(data);
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
                key={item._id}
                id={item._id}
                time={item.time}
                description={item.description}
                title={item.title}
                repo={item.repo}
                site={item.site}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;

export const metadata = {
  title: 'projects',
  description:
    'This project page holds all the projects completed for showcase.',
};
