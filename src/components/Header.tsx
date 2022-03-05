import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.png";
import Hamburger from "./Hamburger";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

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
        </div>
        <div className="menu" onClick={handleClick}>
          <h5 className={menu ? "active" : ""}>{!menu ? "Menu" : "Close"}</h5>
          {!menu ? (
            <HiOutlineMenuAlt4 style={{ fontSize: "3.5rem", color: "#fff" }} />
          ) : (
            <MdClose style={{ fontSize: "3.5rem", color: "#000" }} />
          )}
        </div>
      </header>
      <Hamburger menu={menu} hide={hide} />
    </>
  );
}
export default Header;
