import { config } from '@/lib/constant';
import { allBlogs } from '../../.contentlayer/generated';

const getData = async () => {
  const URL = config.url;
  const res = await fetch(`${URL}/api/projects`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

export default async function sitemap() {
  // const projectData = await getData();
  // const projects = projectData?.map((project) => ({
  //   url: `${URL}/projects/${project.id}`,
  //   lastModified: new Date(project.createdAt).toISOString().split('T')[0],
  // }));

  // const blogs = allBlogs.map((post) => ({
  //   url: `https://abdulmalekzihad.me/${post.slug}`,
  //   lastModified: post.publishedAt,
  // }));

  const routes = ['', '/projects', '/about', '/contact', '/blogs'].map(
    (route) => ({
      url: `https://abdulmalekzihad.me${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes];
}
