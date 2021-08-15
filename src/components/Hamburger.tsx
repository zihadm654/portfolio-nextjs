function Hamburger() {
  return (
    <div className="hamburger">
      <div className="secondary__background"></div>
      <div className="menu__layer">
        <div className="container">
          <div className="wrapper">
            <div className="menu__links">
              <nav className="navbar">
                <ul className="nav__links">
                  <li>{/* <NavLink to="/">Home</NavLink> */}</li>
                  <li>{/* <NavLink to="/projects">Projects</NavLink> */}</li>
                  <li>{/* <NavLink to="/about">About</NavLink> */}</li>
                  <li>{/* <NavLink to="/blogs">Blogs</NavLink> */}</li>
                  <li>{/* <NavLink to="/story">Story</NavLink> */}</li>
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
            {/* <NavLink
              to={{ pathname: 'https://dribbble.com/zihadm654' }}
              target="_blank"
            >
              Dribbble
            </NavLink>
            <NavLink to={{ pathname: 'https://behance.net/zihadm654' }} target="_blank">
              Behance
            </NavLink>
            <NavLink to={{ pathname: 'https://instagram.com/zihadm654' }} target="_blank">
              Instagram
            </NavLink>
            <NavLink
              to={{ pathname: 'https://github.com/zihadm654' }}
              target="_blank"
            >
              Github
            </NavLink>
            <NavLink
              to={{
                pathname: 'https://www.linkedin.com/in/Abdul -malek-a095031a4/',
              }}
              target="_blank"
            >
              Linkdin
            </NavLink> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
