import Link from "next/link";
import { motion } from "framer-motion";
function Hamburger({ menu, hide }) {
  const container = {
    visible: {
      x: "100%",
      opacity: 0,
      transition: { ease: "easeOut", duration: 0.6 },
    },
    hidden: {
      opacity: 1,
      x: "0%",
      transition: { ease: "easeOut", duration: 0.6 },
    },
  };

  return (
    <motion.div
      className={!menu ? "hamburger" : "hamburger menu"}
      animate={!menu ? "visible" : "hidden"}
      variants={container}
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
              <Link href="/story">
                <a onClick={hide}>Story</a>
              </Link>
            </li>
          </ul>
          <div className="social__media">
            <Link href={"https://dribbble.com/zihadm654"}>
              <a>Dribble</a>
            </Link>
            <Link href={"https://behance.net/zihadm654"}>
              <a>Behance</a>
            </Link>
            <Link href={"https://instagram.com/zihadm654"}>
              <a>Instagram</a>
            </Link>
            <Link href={"https://github.com/zihadm654"}>
              <a>Github</a>
            </Link>
            <Link href={"https://www.linkedin.com/in/Abdul -malek-a095031a4/"}>
              <a>Linkedin</a>
            </Link>
          </div>
        </nav>
      </div>
    </motion.div>
  );
}

export default Hamburger;
