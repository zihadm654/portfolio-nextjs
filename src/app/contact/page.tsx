'use client';
// import { Button } from '../../src/utility/Button';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../../lib/firebase';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';
// import contactImg from '../public/assets/undraw_contact_us_re_4qqt.svg';
function ContactPage() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const ref = await addDoc(collection(db, 'users'), {
        name: user.name,
        email: user.email,
        message: user.message,
      });
      console.log('send successfully');
    } catch (err) {
      console.log(err);
    }
    setUser({
      name: '',
      email: '',
      message: '',
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <Head>
        <title>Contact || Abdul Malek</title>
        <meta
          name="Contact page "
          content="this page is responsible for all the contact form and contact information for this website"
        />
      </Head>
      <motion.section exit={{ opacity: 0 }} className="contact__page">
        <div className="content">
          <div className="content__left">
            <h5>LET&apos;S TALK</h5>
            <h2>Hello! We&apos;ve been waiting for you.</h2>
            <p>
              Fill in the form or{' '}
              <a href="mailto:zihadm654@gmail.com">Send us an email</a>
            </p>
          </div>
          <div className="content__img">
            <Image
              src="/assets/undraw_contact_us_re_4qqt.svg"
              alt="contact img"
              height={500}
              width={500}
            />
          </div>
        </div>
        <form name="contact" onSubmit={handleSubmit}>
          <div className="inputs">
            <input
              required
              type="text"
              name="name"
              onChange={handleChange}
              value={user.name}
            />
            <label>What&apos;s your Name?</label>
          </div>
          <div className="inputs">
            <input
              required
              type="email"
              name="email"
              onChange={handleChange}
              value={user.email}
            />
            <label>Your Email </label>
          </div>
          <div className="inputs">
            <input
              required
              type="text-area"
              name="message"
              onChange={handleChange}
              value={user.message}
            />
            <label htmlFor="">Tell use about your project...</label>
          </div>
          <div>
            <button type="submit" value="submit">
              Send Email
            </button>
          </div>
        </form>
        <div className="contact__container"></div>
      </motion.section>
    </>
  );
}

export default ContactPage;
