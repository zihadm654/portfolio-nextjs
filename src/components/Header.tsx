import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.png';
import Hamburger from './Hamburger';
import { useTheme } from 'next-themes';
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
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => {
    window.addEventListener('scroll', stickyNav);
    setMounted(true);
  }, []);
  return (
    <>
      <header className={sticky ? 'navbar sticky' : 'navbar'}>
        <div className="navbar__left">
          <Link href="/">
            <a>
              <div className="logo">
                <Image src={logo} height="500" width="500" alt="logo" />
                <h5 className={menu ? 'active' : ''}>Abdul Malek</h5>
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
            <Link href="/new">
              <a>What&apos;s New</a>
            </Link>
          </div>
        </div>
        <div className="container">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="toggle__btn"
            onClick={() =>
              setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
            }
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                {resolvedTheme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
          <div
            className={menu ? 'menu active' : 'menu'}
            onClick={handleClick}
          ></div>
        </div>
      </header>
      <Hamburger menu={menu} hide={hide} />
    </>
  );
}
export default Header;
