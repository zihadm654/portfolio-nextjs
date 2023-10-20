'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const addProject = async (formData: FormData) => {
  const title = formData.get('title');
  const description = formData.get('description');
  const repo = formData.get('repo');
  const site = formData.get('site');
  const time = formData.get('time');
  const img = formData.get('img');
  const client = formData.get('client');

  await prisma.projects.create({
    data: {
      title: title as string,
      description: description as string,
      client: client as string,
      repo: repo as string,
      site: site as string,
      time: time as string,
      img: img as string,
    },
  });
  revalidatePath('/dashboard');
};
