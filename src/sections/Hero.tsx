'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TypewriterComponent from 'typewriter-effect';
import { fadeIn, stagger } from '../utility/Animation';
import { Button } from '../utility/Button';
import Image from 'next/image';

function Hero() {
  return (
    <section id='hero' className='hero'>
      <motion.div
        variants={stagger}
        initial='hidden'
        animate='show'
        className='hero__left'
      >
        <motion.div variants={fadeIn} className='heading__info'>
          <h5 className='caret-yellow-400'>We Design & Develop </h5>
          <TypewriterComponent
            options={{
              strings: [
                'Creative Design',
                'Redesign & Recreate',
                'Minimalistic Design',
                'Personal Website',
                'Brand Design',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.div>
        <motion.h1 variants={fadeIn}>
          Taking your vision and serving it as a reality
        </motion.h1>
        <motion.p variants={fadeIn}>
          We help brands in building beautiful websites, web apps and helping
          them carve their stories through engaging digital art experiences.
        </motion.p>
        <Button
          site='/contact'
          variants='primary__btn'
          text='Book a free Consultation'
        />
        <button className='custom__btn ml-4'>
          <Link
            style={{ backgroundColor: 'transparent' }}
            target='_blank'
            download
            href='/assets/Abdul Malek.pdf'
          >
            Download Resume
          </Link>
        </button>
      </motion.div>
      <div className='hero__right'>
        <Image
          src='/assets/undraw_creation_re_d1mi.svg'
          height={500}
          width={500}
          alt='main__model'
        />
      </div>
    </section>
  );
}

export default Hero;
