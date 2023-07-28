'use client';
import {Icon} from '../utility/Button';
import Link from 'next/link';
// import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
// import { useInView } from 'react-intersection-observer';
// import { useEffect } from 'react';
import {SiGithub} from 'react-icons/si';
import {VscLiveShare} from 'react-icons/vsc';

const Cards = ({id, img, description, time, title, repo, site}) => {
    // const controls = useAnimation();
    // const [ref, inView] = useInView();

    // useEffect(() => {
    //   if (inView) {
    //     controls.start('show');
    //   }
    // }, [controls, inView]);

    return (
        <div className='wrapper' key={id}>
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
                        <SiGithub/>
                    </Link>
                    <Link className='livesite' href={site}>
                        <p>Live Site</p>
                        <VscLiveShare/>
                    </Link>
                </div>
                <Icon site={`/projects/${id}`} text='see case study'/>
            </div>
        </div>
    );
};

export default Cards;

export const FeaturedCard = ({
                                 id,
                                 img,
                                 description,
                                 createdAt,
                                 title,
                                 repo,
    site,time
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
            key={id}
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
                <p>{createdAt}</p>
                <div className='button__links'>
                    <Link className='github' href={repo}>
                        <p>Source Code</p>
                        <SiGithub/>
                    </Link>
                    <Link className='livesite' href={site}>
                        <p>Live Site</p>
                        <VscLiveShare/>
                    </Link>
                </div>
                <Icon site={`/projects/${id}`} text='see case study'/>
            </div>
        </div>
    );
};
