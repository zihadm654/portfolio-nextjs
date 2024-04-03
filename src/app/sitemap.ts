import { config } from '@/lib/constant';
import { allBlogs } from '../../.contentlayer/generated';
import { getProjects } from '@/actions/getProjects';

export default async function sitemap() {
  const projectData = await getProjects();
  const projects = projectData?.map(({ id, createdAt }) => ({
    url: `https://portfolio-nextjs-zihadm654.vercel.app/projects/${id}`,
    lastModified: new Date(createdAt).toISOString().split('T')[0],
  }));

  const blogs = allBlogs.map((post) => ({
    url: `https://portfolio-nextjs-zihadm654.vercel.app/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ['', '/projects', '/about', '/contact', '/blogs'].map(
    (route) => ({
      url: `https://portfolio-nextjs-zihadm654.vercel.app/${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...projects, ...blogs];
}
