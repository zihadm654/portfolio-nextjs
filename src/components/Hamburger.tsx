import Link from 'next/link';
function Hamburger({ menu }) {
  return (
    <div className={menu ? 'hamburger menu' : 'hamburger'}>
      <div className="menu__layer">
        <div className="container">
          <div className="wrapper">
            <div className="menu__links">
              <nav className="navbar">
                <ul className="nav__links">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects">
                      <a>Project</a>
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
            <Link href={'https://dribbble.com/zihadm654'}>Dribbble</Link>
            <Link href={'https://behance.net/zihadm654'}>Behance</Link>
            <Link href={'https://instagram.com/zihadm654'}>Instagram</Link>
            <Link href={'https://github.com/zihadm654'}>Github</Link>
            <Link href={'https://www.linkedin.com/in/Abdul -malek-a095031a4/'}>
              Linkdin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
