// 'use client';
import Form from '@/components/Form';
import prisma from '@/lib/prisma';
import { CldImage } from 'next-cloudinary';

const Dashboard = async () => {
  const projects = await prisma.projects.findMany();

  return (
    <section className='dashboard'>
      <div className='container'>
        <h1>Dashboard</h1>
        <Form />
      </div>
      {projects.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>{item.site}</p>
          {/* <CldImage src={item.img} alt={item.title} /> */}
        </div>
      ))}
    </section>
  );
};

export default Dashboard;
