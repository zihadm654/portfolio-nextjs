// 'use client';
// import path from 'path';
// import fs from 'fs';
// import { sync } from 'glob';
// import matter from 'gray-matter';

// const POSTS_PATH = path.join(process.cwd(), 'posts');

// export const getSlugs = (): string[] => {
//   const paths = sync(`${POSTS_PATH}/*.mdx`);

//   return paths.map((path) => {
//     const parts = path.split('/');
//     const fileName = parts[parts.length - 1];
//     const [slug, _ext] = fileName.split('.');
//     return slug;
//   });
// };

// export const getAllPosts = () => {
//   const posts = getSlugs()
//     .map((slug) => getPostFromSlug(slug))
//     .sort((a, b) => {
//       if (a.meta.created_at > b.meta.created_at) return 1;
//       if (a.meta.created_at < b.meta.created_at) return -1;
//       return 0;
//     })
//     .reverse();
//   return posts;
// };

// interface Post {
//   content: string;
//   meta: PostMeta;
// }

// export type PostMeta = {
//   author: string;
//   slug: string;
//   title: string;
//   tags: string[];
//   created_at: string;
//   description: string;
//   cover_img: string;
// };

// export const getPostFromSlug = (slug: string): Post => {
//   const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
//   const source = fs.readFileSync(postPath);
//   const { content, data } = matter(source);

//   return {
//     content,
//     meta: {
//       slug,
//       author: data.author ?? slug,
//       title: data.title ?? slug,
//       tags: (data.tags ?? []).sort(),
//       created_at: (data.created_at ?? new Date()).toString(),
//       description: data.description ?? slug,
//       cover_img: data.img ?? slug,
//     },
//   };
// };
