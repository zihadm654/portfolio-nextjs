import { useState } from 'react';
import Footer from '../components/Footer';
import { Button } from '../utility/Button';
import Link from 'next/link';
function Contact() {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="contact">
        <div className="contact__title">
          <h5>Got a project?</h5>
          <h3>{`Let's`} work together</h3>
        </div>
        <div className="callaction">
          <Button
            site={'/contact'}
            className={'primary__btn'}
            text={'Book a free consultation'}
          />
          <Button
            site={'/contact'}
            className={'custom__btn'}
            text={'Send an email to me'}
          />
        </div>
        <div className="media">
          <div className="social__media">
            <Link href={'https://dribbble.com/zihadm654'}>
              <a>Dribbble</a>
            </Link>
            <Link href={'https://www.behance.net/zihadm654/'}>
              <a>Behance</a>
            </Link>
            <Link href={'https://instagram.com/zihadm65'}>
              <a>Instagram</a>
            </Link>
            <Link href={'https://github.com/zihadm654'}>
              <a>Github</a>
            </Link>
            <Link href={'https://www.linkedin.com/in/zihadm654'}>
              <a>Linkdin</a>
            </Link>
          </div>
          <hr />
          <div className="copyright">
            <p>
              &copy; 2021 Abdul Malik || Made with{' '}
              <span
                className={show ? 'active' : ''}
                onClick={() => {
                  setShow(!show);
                }}
              >
                Info.
              </span>
            </p>
            <p className="lang">
              {show ? 'Nextjs Scss Framer-Motion Firebase React-icons' : ''}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
