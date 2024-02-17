'use client';
import { useState } from 'react';
import Footer from '../navigation/Footer';
import { Button } from '../../utility/Button';
import Link from 'next/link';
function Contact() {
  const [show, setShow] = useState(false);
  return (
    <section className='contact'>
      <div className='contact__title'>
        <p>Got a project?</p>
        <h3>Let&apos;s work together</h3>
      </div>
      <div className='callaction'>
        <Button
          site={'/contact'}
          variants={'primary__btn'}
          text={'A Free consultation'}
        />
        <Button
          site={'mailto:zihadm654@gmail.com'}
          variants={'custom__btn'}
          text={'Send email to me'}
        />
      </div>
      <div className='media'>
        <div className='social__media'>
          <Link href={'https://dribbble.com/zihadm654'}>Dribbble</Link>
          <Link href={'https://www.behance.net/zihadm654/'}>Behance</Link>
          <Link href={'https://instagram.com/zihadm65'}>Instagram</Link>
          <Link href={'https://github.com/zihadm654'}>Github</Link>
          <Link href={'https://www.linkedin.com/in/zihadm654'}>Linkdin</Link>
        </div>
        <hr />
        <div className='copyright'>
          <p>
            &copy; created by Abdul Malek || Made with{' '}
            <span
              className={show ? 'active' : ''}
              onClick={() => {
                setShow(!show);
              }}
            >
              Info
            </span>
          </p>
          <p className='lang'>
            {show ? 'Nextjs Scss Framer-Motion Firebase Mdx' : ''}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
