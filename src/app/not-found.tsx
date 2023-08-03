import React from 'react';
import { Button } from '../utility/Button';
const Index = () => {
  return (
    <div className='wrong'>
      <h2 className='description'>Awwww...this page is not available</h2>
      <Button text='Back to Home' variants='primary__btn' site='/' />
    </div>
  );
};

export default Index;
