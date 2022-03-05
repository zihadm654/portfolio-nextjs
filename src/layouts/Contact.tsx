import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { Button } from "../utility/Button";
import Link from "next/link";
import { BsArrowUp } from "react-icons/bs";
function Contact() {
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState(false);
  // useEffect(() => {
  // }, [])
  const elevator = () => {
    window.scroll(0, 0);
  };
  return (
    <>
      <section className="contact">
        <div className="marquee-root"></div>
        <div className="contact__title">
          <h5>Got a project?</h5>
          <h3>Let&apos;s work together</h3>
        </div>
        <div className="callaction">
          <Button
            site={"/contact"}
            className={"primary__btn"}
            text={"Book a free consultation"}
          />
          <Button
            site={"/contact"}
            className={"custom__btn"}
            text={"Send an email to me"}
          />
        </div>
        <div className="media">
          <div className="social__media">
            <Link href={"https://dribbble.com/zihadm654"}>
              <a>Dribbble</a>
            </Link>
            <Link href={"https://www.behance.net/zihadm654/"}>
              <a>Behance</a>
            </Link>
            <Link href={"https://instagram.com/zihadm65"}>
              <a>Instagram</a>
            </Link>
            <Link href={"https://github.com/zihadm654"}>
              <a>Github</a>
            </Link>
            <Link href={"https://www.linkedin.com/in/zihadm654"}>
              <a>Linkdin</a>
            </Link>
          </div>
          <hr />
          <div className="copyright">
            <p>
              &copy; created by Abdul Malek || Made with{" "}
              <span
                className={show ? "active" : null}
                onClick={() => {
                  setShow(!show);
                }}
              >
                Info
              </span>
            </p>
            <p className="lang">
              {show ? "Nextjs Scss Framer-Motion Firebase React-icons" : ""}
            </p>
          </div>
        </div>
        <div onClick={elevator} className="up">
          <BsArrowUp />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
