import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaDribbble,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
function Hamburger({ menu, hide }) {
  return (
    <motion.div
      className={!menu ? 'hamburger' : 'hamburger menu'}
      // animate={!menu ? 'visible' : 'hidden'}
      // variants={container}
    >
      <div className="wrapper">
        <nav className="nav">
          <ul className="nav__links">
            <li>
              <Link onClick={hide} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={hide} href='/projects'>
                Projects
              </Link>
            </li>
            <li>
              <Link onClick={hide} href="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={hide} href="/blogs">
                Blogs
              </Link>
            </li>
            <li>
              <Link onClick={hide} href="/new">
                What&apos;s new
              </Link>
            </li>
            <li>
              <Link onClick={hide} href='/contact'>
                Contact
              </Link>
            </li>
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
      </div>
    </motion.div>
  );
}

export default Hamburger;
