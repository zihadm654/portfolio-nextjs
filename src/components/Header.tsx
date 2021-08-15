import Image from 'next/image';
import logo from '../assets/logo.png';
function Header() {
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner__header">
            {/* <Link to="/"> */}
            <div className="logo">
              <Image src={logo} height="500" width="500" alt="" />
              <h4>Abdul Malik</h4>
            </div>
            {/* </Link> */}
            <div className="menu">
              {/* <p>{menu ? "menu" : "close"}</p> */}
              <div></div>
            </div>
          </div>
        </div>
      </div>
      {/* <Hamburger menu={menu} /> */}
    </header>
  );
}
export default Header;
