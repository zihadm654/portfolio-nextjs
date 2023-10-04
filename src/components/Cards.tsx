'use client';
import { Icon } from '../utility/Button';
import Link from 'next/link';
// import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
// import { useEffect } from 'react';
import { SiGithub } from 'react-icons/si';
import { VscLiveShare } from 'react-icons/vsc';

const Cards = ({
  id,
  img,
  description,
  time,
  title,
  repo,
  site,
  createdAt,
  tags,
}) => {
  // const controls = useAnimation();
  // const [ref, inView] = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     controls.start('show');
  //   }
  // }, [controls, inView]);
  return (
    <div className='wrapper'>
      <Link href={`/projects/${id}`} passHref>
        <div className='card'>
          <Image
            src={
              img ||
              'https://firebasestorage.googleapis.com/v0/b/portfolio-next-50c1e.appspot.com/o/desktop-design.jpg?alt=media&token=72a5c8cb-d319-48b6-bf58-5d3982f64f86'
            }
            alt={img}
            height={500}
            width={500}
          />
        </div>
      </Link>
      <div className='card__text'>
        <p>{time}</p>
        <h5>{title}</h5>
        <p>{description}</p>
        <div className='button__links'>
          <Link className='github' href={repo}>
            <p>Source Code</p>
            <SiGithub />
          </Link>
          <Link className='livesite' href={site}>
            <p>Live Site</p>
            <VscLiveShare />
          </Link>
        </div>
        <p>{new Date(createdAt).toISOString().split('T')[0]}</p>
        <article>
          {tags?.map((tag) => (
            <span className='text-2xl ml-2' key={tag}>
              {tag}
            </span>
          ))}
        </article>
        <Icon site={`/projects/${id}`} text='see case study' />
      </div>
    </div>
  );
};

export default Cards;

export const FeaturedCard = ({
  id,
  img,
  description,
  title,
  repo,
  site,
  tags,
}) => {
  // const controls = useAnimation();
  // const [ref, inView] = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     controls.start('show');
  //   }
  // }, [controls, inView]);

  return (
    <div
      // ref={ref}
      // initial="hidden"
      // animate={controls}
      // variants={fadeIn}
      className='wrapper'
    >
      <Link href={`/projects/${id}`} passHref>
        <div className='card'>
          <Image
            src={
              img ||
              'https://firebasestorage.googleapis.com/v0/b/ortfolio-next-50c1e.appspot.com/o/desktop-design.jpg?alt=media&token=72a5c8cb-d319-48b6-bf58-5d3982f64f86'
            }
            alt={img}
            height={500}
            width={500}
          />
        </div>
      </Link>
      <div className='card__text'>
        <h5>{title}</h5>
        <p>{description}</p>
        <article>
          {tags?.map((tag) => (
            <span className='text-2xl ml-2' key={tag}>
              {tag}
            </span>
          ))}
        </article>
        <div className='button__links'>
          <Link className='github' href={repo}>
            <p>Source Code</p>
            <SiGithub />
          </Link>
          <Link className='livesite' href={site}>
            <p>Live Site</p>
            <VscLiveShare />
          </Link>
        </div>
        <Icon site={`/projects/${id}`} text='see case study' />
      </div>
    </div>
  );
};
