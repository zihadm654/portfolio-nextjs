import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo.png';
import Hamburger from './Hamburger';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
function Header() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {});
  const handleClick = () => {
    setMenu((prev) => !prev);
  };
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner__header">
            <Link href="/">
              <a>
                <div className="logo">
                  <Image src={logo} height="500" width="500" alt="" />
                  <h4>Abdul Malik</h4>
                </div>
              </a>
            </Link>
            <div className="menu" onClick={handleClick}>
              <h5>{!menu ? 'menu' : 'close'}</h5>
              <div>
                {!menu ? (
                  <HiMenuAlt3 style={{ fontSize: '2rem' }} />
                ) : (
                  <MdClose style={{ fontSize: '2rem' }} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Hamburger menu={menu} />
    </header>
  );
}
export default Header;
