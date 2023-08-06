'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.png';
import Hamburger from './Hamburger';
import { dancing_script } from '../utility/fonts';
import ThemeButton from './ThemeButton';
import {motion} from 'framer-motion'
import {usePathname} from 'next/navigation'

function Header() {
  const [menu, setMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  
  const showSidebar = ()=> setMenu(!menu)
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
  const path = usePathname()
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
          <ul className='links'>
            {links?.map(link=>(
              <li key={link.href}>
                <Link className='relative' href={link.href}>
                  {link.href === path && (
                    <motion.span 
                    layoutId="underline"
                    className='active__underline '/>
                    )}
                  {link.label}
                </Link>
              </li>

            ))}
          </ul>
        </div>
        <div className='container'>
          <ThemeButton />
          <div className={menu ? 'menu active' : 'menu'} onClick={showSidebar}>
          </div>
        </div>
      </header>
      <Hamburger menu={menu} hide={hide} />
    </>
  );
}
export default Header;

const links = [
  {href: "/", label: "Home"},
  {href: "/projects", label: "Projects"},
  {href: "/blogs", label: "Blogs"},
  {href: "/about", label: "About"},
  {href: "/new", label: "New"},
]