import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://abdulmalekzihad.me/sitemap.xml',
    host: 'https://abdulmalekzihad.me',
  };
}
