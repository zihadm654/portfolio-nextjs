import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/logo.png';
import Hamburger from './Hamburger';
import { CgMenu } from 'react-icons/cg';
import { MdClose } from 'react-icons/md';

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
      <nav className={sticky ? 'navbar sticky' : 'navbar'}>
        <div className="navbar__left">
          <Link href="/">
            <a>
              <div className="logo">
                <Image src={logo} height="500" width="500" alt="" />
                <h4>Abdul Malik</h4>
              </div>
            </a>
          </Link>
        </div>
        <div className="menu" onClick={handleClick}>
          <h5>{!menu ? 'menu' : 'close'}</h5>
          <div>
            {!menu ? (
              <CgMenu style={{ fontSize: '3rem' }} />
            ) : (
              <MdClose style={{ fontSize: '3rem' }} />
            )}
          </div>
        </div>
      </nav>
      <Hamburger menu={menu} hide={hide} />
    </>
  );
}
export default Header;
