'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hamburger from './Hamburger';
import { dancing_script } from '../../utility/fonts';
import ThemeButton from '../ThemeButton';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

function Header() {
  const [menu, setMenu] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (menu) setMenu(false);
  }, [pathname]);
  return (
    <>
      <header className='navbar'>
        <div className='navbar__left'>
          <Link href='/'>
            <div className='logo'>
              <Image src={'/logo.png'} height='500' width='500' alt='logo' />
              <h5 className={`${dancing_script.className} caret-lime-400`}>
                Abdul Malek
              </h5>
            </div>
          </Link>
          <ul className='links'>
            {links?.map((link) => (
              <li key={link.href}>
                <Link className='relative caret-violet-950' href={link.href}>
                  {link.href === pathname && (
                    <motion.span
                      layoutId='underline'
                      className='active__underline '
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='navbar__right'>
          <ThemeButton />
          <div
            className={menu ? 'menu active' : 'menu'}
            onClick={() => setMenu(!menu)}
          ></div>
        </div>
      </header>
      <AnimatePresence mode='wait'>
        {menu && (
          <div className='burger__wrapper'>
            <Hamburger />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
export default Header;
const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/about', label: 'About' },
  { href: '/new', label: 'New' },
];
