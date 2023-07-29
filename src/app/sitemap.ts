import { allBlogs } from '../../.contentlayer/generated';

export default async function sitemap() {
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

  return [...routes, ...blogs];
}
