'use client';

import { InlineWidget } from 'react-calendly';

const Book = () => {
  return (
    <>
      <div className='consultation'>
        <h2>Book a meeting</h2>
        <InlineWidget url='https://calendly.com/zihadm654/30min' />
      </div>
    </>
  );
};

export default Book;
