import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import Hamburger from "./Hamburger";
import { MdClose, MdMenu } from "react-icons/md";

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
    window.addEventListener("scroll", stickyNav);
  }, []);
  return (
    <>
      <header className={sticky ? "navbar sticky" : "navbar"}>
        <div className="navbar__left">
          <Link href="/">
            <a>
              <div className="logo">
                <Image src={logo} height="500" width="500" alt="" />
                <h5 className={menu ? "active" : ""}>Abdul Malek</h5>
              </div>
            </a>
          </Link>
        </div>
        <div className="links">
          <Link href="/projects">
            <a>Work</a>
          </Link>
          <Link href="/blogs">
            <a>Blogs</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/tranding">
            <a>What&apos;s New</a>
          </Link>
        </div>
        <div className="menu" onClick={handleClick}>
          <div className="icon">
            {!menu ? (
              <MdMenu style={{ fontSize: "3rem", color: "#000" }} />
            ) : (
              <MdClose style={{ fontSize: "3rem", color: "#000" }} />
            )}
          </div>
        </div>
      </header>
      <Hamburger menu={menu} hide={hide} />
    </>
  );
}
export default Header;
