'use client';
import ContactForm from '@/components/forms/ContactForm';
// import { Button } from '../../src/utility/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
// import contactImg from '../public/assets/undraw_contact_us_re_4qqt.svg';

function isInputNamedElement(
  e: Element
): e is HTMLInputElement & { name: string } {
  return 'value' in e && 'name' in e;
}

function ContactPage() {
  const [state, setState] = useState<string>();
  async function handleOnSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData: Record<string, string> = {};

    Array.from(e.currentTarget.elements)
      .filter(isInputNamedElement)
      .forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });

    setState('loading');

    await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
      }),
    });

    setState('ready');
  }
  return (
    <>
      <section className='contact__page'>
        <div className='content'>
          <div className='content__left'>
            <h5>LET&apos;S TALK</h5>
            <h2>Hello! We&apos;ve been waiting for you.</h2>
            <p>
              Fill in the form or{' '}
              <a href='mailto:zihadm654@gmail.com'>Send us an email</a>
            </p>
          </div>
          <div className='content__img'>
            <Image
              src='/assets/undraw_contact_us_re_4qqt.svg'
              alt='contact img'
              height={500}
              width={500}
              className='bg-cover'
            />
          </div>
        </div>
        <ContactForm />
        <div className='contact__container'></div>
      </section>
    </>
  );
}

export default ContactPage;
