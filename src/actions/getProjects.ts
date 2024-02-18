'use server';
import prisma from '@/lib/prisma';

export const getProjects = async () => {
  try {
    const projects = await prisma.projects.findMany({
      orderBy: {
        id: 'desc',
      },
    });

    return await projects;
  } catch (err) {
    console.log(err);
  }
};
export const getProject = async (id) => {
  try {
    const project = await prisma.projects.findUnique({
      where: {
        id: id,
      },
    });

    return await project;
  } catch (err) {
    console.log(err);
  }
};
