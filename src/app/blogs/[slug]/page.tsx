import type { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';

import 'highlight.js/styles/atom-one-dark.css';
// import {
//   PostMeta,
//   getPostFromSlug,
//   getSlugs,
// } from '../../../utility/Functionality';

// interface MDXPost {
//   source: MDXRemoteSerializeResult<Record<string, unknown>>;
//   meta: PostMeta;
// }

export default function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.meta.title} || Abdul Malek</title>
        <meta name="description" content={post.meta.description} />
      </Head>
      <div className="blog__details">
        <article>
          <h3>{post.meta.title}</h3>
          <div className="description">
            <div className="author__container">
              <div className="info__left">
                <p>{post.meta.author}</p>
                <span> / </span>
                <p>{post.meta.created_at}</p>
              </div>
              <div className="info__right">{/* <p>{post.meta.}</p> */}</div>
            </div>
          </div>
          <div className="img__container">
            {/* <Image src={post.meta.cover_img} alt="banner" layout="fill" /> */}
          </div>
          <p>{post.meta.description}</p>
        </article>
        <article className="markdown">
          <MDXRemote {...post.source} />
        </article>
      </div>
    </>
  );
}

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { slug } = params as { slug: string };
//   const { content, meta } = getPostFromSlug(slug);
//   const mdxSource = await serialize(content, {
//     mdxOptions: {
//       rehypePlugins: [
//         rehypeSlug,
//         [rehypeAutolinkHeadings, { behavior: 'wrap' }],
//         rehypeHighlight,
//       ],
//     },
//   });
//   return { props: { post: { source: mdxSource, meta } } };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = getSlugs().map((slug) => ({ params: { slug } }));
//   return {
//     paths,
//     fallback: false,
//   };
// };
