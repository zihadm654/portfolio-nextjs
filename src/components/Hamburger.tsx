// import {withRouter} from "next/router";

import Link from 'next/link';
function Hamburger({ menu }) {
  /*const router = useRouter()*/

  return (
    <div className={menu ? 'hamburger menu' : 'hamburger'}>
      <div className="menu__layer">
        <div className="container">
          <div className="wrapper">
            <div className="menu__links">
              <nav className="nav">
                <ul className="nav__links">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects">
                      <a>Projects</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/story">
                      <a>Story</a>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="info">
                <h4>My Promise</h4>
                <p>
                  I Promise you that you will not feel boaring working with me.
                  You will be comfortable with me in communication.I will try my
                  level best to give good service on time at a low cost.
                </p>
              </div>
            </div>
          </div>
          <div className="social__media">
            <Link href={'https://dribbble.com/zihadm654'}>
              <a>Dribble</a>
            </Link>
            <Link href={'https://behance.net/zihadm654'}>
              <a>Behance</a>
            </Link>
            <Link href={'https://instagram.com/zihadm654'}>
              <a>Instagram</a>
            </Link>
            <Link href={'https://github.com/zihadm654'}>
              <a>Github</a>
            </Link>
            <Link href={'https://www.linkedin.com/in/Abdul -malek-a095031a4/'}>
              <a>Linkedin</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
