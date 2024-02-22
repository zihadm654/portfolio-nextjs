'use server';
import { db } from '@/lib/db';

export const getProjects = async () => {
  try {
    const projects = await db.projects.findMany({
      orderBy: {
        id: 'desc',
      },
    });

    return projects;
  } catch (err) {
    console.log(err);
  }
};
export const getProject = async (id) => {
  try {
    const project = await db.projects.findUnique({
      where: {
        id: id,
      },
    });

    return project;
  } catch (err) {
    console.log(err);
  }
};
