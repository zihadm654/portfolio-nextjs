'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TypewriterComponent from 'typewriter-effect';
import { fadeIn, stagger } from '../../utility/Animation';
import { Button } from '../../utility/Button';

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
          <h5>We Design & Develop </h5>
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
          Taking your <span>vision</span> and serving it as a
          <span> reality</span>
        </motion.h1>
        <motion.p variants={fadeIn}>
          We help brands in building beautiful websites, web apps and helping
          them carve their stories through engaging digital art experiences.
        </motion.p>
        <Button
          site='/book'
          variants='primary__btn'
          text='Book a Consultation'
        />
      </motion.div>
    </section>
  );
}

export default Hero;
