'use client';
import Link from 'next/link';
import Links from '@/components/navigation/Link';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaDribbble,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { menuSlide } from '@/utility/Animation';
import { useState } from 'react';
import Curve from '@/components/navigation/Curve';
function Hamburger({ hide }) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      className='hamburger'
      initial='initial'
      animate='enter'
      exit='exit'
      variants={menuSlide}
    >
      <nav
        onMouseLeave={() => {
          setSelectedIndicator(pathname);
        }}
        className='nav'
      >
        <h5 className='nav__title'>Navigation</h5>
        <ul className='nav__links'>
          {links.map((data, index) => {
            return (
              <Links
                key={index}
                data={{ ...data, index }}
                menu={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
                hide={hide}
              />
            );
          })}
        </ul>
        <div className='social__media'>
          <Link href={'https://dribbble.com/zihadm654'}>
            <FaDribbble />
          </Link>
          <Link href={'https://twitter.com/zihadm654'}>
            <FaTwitter />
          </Link>
          <Link href={'https://instagram.com/zihadm654'}>
            <FaInstagram />
          </Link>
          <Link href={'https://github.com/zihadm654'}>
            <FaGithub />
          </Link>
          <Link href={'https://www.linkedin.com/in/zihadm654'}>
            <FaLinkedin />
          </Link>
        </div>
      </nav>
      <Curve />
    </motion.div>
  );
}

export default Hamburger;

const links = [
  { href: '/', title: 'Home' },
  { href: '/projects', title: 'Projects' },
  { href: '/blogs', title: 'Blogs' },
  { href: '/about', title: 'About' },
  { href: '/new', title: 'New' },
];
