'use client';
import { Icon } from '../utility/Button';
import Link from 'next/link';
// import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
// import { useInView } from 'react-intersection-observer';
// import { useEffect } from 'react';
import { SiGithub } from 'react-icons/si';
import { VscLiveShare } from 'react-icons/vsc';

const Cards = ({ projects }) => {
  // const controls = useAnimation();
  // const [ref, inView] = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     controls.start('show');
  //   }
  // }, [controls, inView]);

  return (
    <div className="cards">
      {projects &&
        projects.map((card) => {
          return (
            <div className="wrapper" key={card.id}>
              <Link href={`/projects/${card.id}`} passHref>
                <div className="card">
                  <Image
                    src={
                      card.img ||
                      'https://firebasestorage.googleapis.com/v0/b/portfolio-next-50c1e.appspot.com/o/desktop-design.jpg?alt=media&token=72a5c8cb-d319-48b6-bf58-5d3982f64f86'
                    }
                    alt={card.img}
                    height={500}
                    width={500}
                  />
                </div>
              </Link>
              <div className="card__text">
                <p>{card.time}</p>
                <h5>{card.name}</h5>
                <p>{card.description}</p>
                <div className="button__links">
                  <Link className="github" href={card.repo}>
                    <p>Source Code</p>
                    <SiGithub />
                  </Link>
                  <Link className="livesite" href={card.site}>
                    <p>Live Site</p>
                    <VscLiveShare />
                  </Link>
                </div>
                <Icon site={`/projects/${card.id}`} text="see case study" />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cards;

export const FeaturedCard = ({ posts, stagger, fadeIn }) => {
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
      // variants={stagger}
      className="cards"
    >
      {posts?.map((card) => {
        return (
          <div
            // ref={ref}
            // initial="hidden"
            // animate={controls}
            // variants={fadeIn}
            className="wrapper"
            key={card.id}
          >
            <Link href={`/projects/${card.id}`} passHref>
              <div className="card">
                <Image
                  src={
                    card.img ||
                    'https://firebasestorage.googleapis.com/v0/b/ortfolio-next-50c1e.appspot.com/o/desktop-design.jpg?alt=media&token=72a5c8cb-d319-48b6-bf58-5d3982f64f86'
                  }
                  alt={card.img}
                  height={500}
                  width={500}
                />
              </div>
            </Link>
            <div className="card__text">
              <h5>{card.name}</h5>
              <p>{card.description}</p>
              <p>{new Date(card.createdAt).toDateString()}</p>
              <div className="button__links">
                <Link className="github" href={card.repo}>
                  <p>Source Code</p>
                  <SiGithub />
                </Link>
                <Link className="livesite" href={card.site}>
                  <p>Live Site</p>
                  <VscLiveShare />
                </Link>
              </div>
              <Icon site={`/projects/${card.id}`} text="see case study" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
