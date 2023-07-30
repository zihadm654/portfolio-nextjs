import { config } from '@/lib/constant';
import { allBlogs } from '../../.contentlayer/generated';
export default async function sitemap() {
  const projectData = await getData();
  const projects = projectData.map((project) => ({
    url: `https://abdulmalekzihad.me/projects/${project._id}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const blogs = allBlogs.map((post) => ({
    url: `https://abdulmalekzihad.me/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ['', '/projects', '/about', '/contact', '/blogs'].map(
    (route) => ({
      url: `https://abdulmalekzihad.me${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...projects];
}

const getData = async () => {
  const URL = config.url;
  const res = await fetch(`${URL}/api/projects`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};
