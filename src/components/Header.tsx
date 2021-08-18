import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo.png';
import Hamburger from './Hamburger';
import { CgMenuMotion } from 'react-icons/cg';
import { MdClose } from 'react-icons/md';

function Header() {
  const [menu, setMenu] = useState(false);
  // useEffect(() => {});
  const handleClick = () => {
    setMenu((prev) => !prev);
    /*router.push(href)*/
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar__left">
          <Link href="/">
            <a>
              <div className="logo">
                <Image src={logo} height="500" width="500" alt="" />
                <h4>Abdul Malik</h4>
              </div>
            </a>
          </Link>
          <div className="navbar__links">
            <Link href="/projects">
              <a>Projects</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </div>
        <div className="menu" onClick={handleClick}>
          <h5>{!menu ? 'menu' : 'close'}</h5>
          <div>
            {!menu ? (
              <CgMenuMotion style={{ fontSize: '2rem' }} />
            ) : (
              <MdClose style={{ fontSize: '2rem' }} />
            )}
          </div>
        </div>
      </div>
      <Hamburger menu={menu} />
    </>
  );
}
export default Header;
