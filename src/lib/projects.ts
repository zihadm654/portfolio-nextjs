import prisma from './prisma';

export async function getProjects() {
  try {
    const projects = await prisma.projects.findMany();
    return { projects };
  } catch (error) {
    console.error(error, 'error');
  }
}

export async function createProject(
  title,
  description,
  repo,
  site,
  time,
  img,
  role,
  tags,
  client
) {
  try {
    const newProject = await prisma.projects.create({
      data: {
        title,
        description,
        time,
        site,
        repo,
        img,
        role,
        tags,
        client,
      },
    });
    return newProject;
  } catch (error) {
    console.error(error, 'error');
  }
}
