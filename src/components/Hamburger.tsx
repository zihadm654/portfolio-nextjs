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
      animate={!menu ? 'visible' : 'hidden'}
      // variants={container}
    >
      <div className="wrapper">
        <nav className="nav">
          <ul className="nav__links">
            <li>
              <Link href="/">
                <a onClick={hide}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a onClick={hide}>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a onClick={hide}>About</a>
              </Link>
            </li>
            <li>
              <Link href="/blogs">
                <a onClick={hide}>Blogs</a>
              </Link>
            </li>
            <li>
              <Link href="/new">
                <a onClick={hide}>What&apos;s new</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a onClick={hide}>Contact</a>
              </Link>
            </li>
          </ul>
          <div className="social__media">
            <Link href={'https://dribbble.com/zihadm654'}>
              <a>
                <FaDribbble />
              </a>
            </Link>
            <Link href={'https://twitter.com/zihadm654'}>
              <a>
                <FaTwitter />
              </a>
            </Link>
            <Link href={'https://instagram.com/zihadm654'}>
              <a>
                <FaInstagram />
              </a>
            </Link>
            <Link href={'https://github.com/zihadm654'}>
              <a>
                <FaGithub />
              </a>
            </Link>
            <Link href={'https://www.linkedin.com/in/zihadm654'}>
              <a>
                <FaLinkedin />
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </motion.div>
  );
}

export default Hamburger;
