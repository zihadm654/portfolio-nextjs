'use client';
import { addProject } from '@/actions/add-project';
import React, { useRef, useState } from 'react';
import { CldImage, CldUploadButton } from 'next-cloudinary';

export type IResult = {
  info: {
    public_id: string;
  };
  event: 'success';
};

const Form = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [imgId, setImgId] = useState('');
  return (
    <>
      <form
        ref={ref}
        // action={async (formData: FormData) => {
        //   ref.current?.reset();
        //   await addProject(formData);
        // }}
      >
        <input name='title' placeholder='title' type='text' />
        <input name='description' placeholder='description' type='text' />
        <input
          name='img'
          placeholder='image'
          type='text'
          defaultValue={imgId}
        />
        <input name='client' placeholder='client' type='text' />
        <input name='repo' placeholder='repo' type='text' />
        <input name='site' placeholder='site' type='text' />
        <input name='time' placeholder='time' type='text' />
        <CldUploadButton
          onUpload={(result: IResult) => {
            setImgId(result.info.public_id);
          }}
          uploadPreset='eevqji4x'
        />
        <button>add</button>
      </form>
      {imgId && (
        <CldImage width='500' height='600' src={imgId} alt='' sizes='100vw' />
      )}
    </>
  );
};

export default Form;
