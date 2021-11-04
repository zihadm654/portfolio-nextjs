import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/logo.png';
import Hamburger from './Hamburger';
import { CgMenuMotion } from 'react-icons/cg';
import { MdClose } from 'react-icons/md';

function Header() {
  const [menu, setMenu] = useState(false);
  // useEffect(() => {});
  const handleClick = () => {
    menu ? setMenu((prev) => !prev) : setMenu((prev) => !prev);
    /*router.push(href)*/
  };
  const hide = () => setMenu(!menu);
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
      <Hamburger menu={menu} hide={hide} />
    </>
  );
}
export default Header;
