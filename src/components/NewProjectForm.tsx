import React from 'react';

const NewProjectForm = () => {
  return (
    <form action=''>
      <h2>Create new Project</h2>
      <input name='title' placeholder='title' type='text' />
      <input name='description' placeholder='description' type='text' />
      <input name='time' placeholder='time' type='text' />
      <input name='client' placeholder='client' type='text' />
      <input name='repo' placeholder='repo' type='text' />
      <input name='site' placeholder='site' type='text' />
    </form>
  );
};

export default NewProjectForm;
