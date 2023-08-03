'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.png';
import Hamburger from './Hamburger';
import { dancing_script } from '../utility/fonts';
import ThemeButton from './ThemeButton';

function Header() {
  const [menu, setMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  const handleClick = () => {
    menu ? setMenu((prev) => !prev) : setMenu((prev) => !prev);
  };
  const hide = () => setMenu(!menu);

  const stickyNav = () => {
    if (window.scrollY >= 70) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', stickyNav);
  }, []);
  return (
    <>
      <header className={sticky ? 'navbar sticky' : 'navbar'}>
        <div className='navbar__left'>
          <Link href='/'>
            <div className='logo'>
              <Image src={logo} height='500' width='500' alt='logo' />
              <h5 className={`${dancing_script.className}`}>Abdul Malek</h5>
            </div>
          </Link>
          <div className='links'>
            <Link href='/projects'>Work</Link>
            <Link href='/blogs'>Blogs</Link>
            <Link href='/about'>About</Link>
            <Link href='/new'>What&apos;s New</Link>
          </div>
        </div>
        <div className='container'>
          <ThemeButton />
          <div className={menu ? 'menu active' : 'menu'} onClick={handleClick}>
          </div>
        </div>
      </header>
      <Hamburger menu={menu} hide={hide} />
    </>
  );
}
export default Header;
