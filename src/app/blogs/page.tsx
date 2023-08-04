import { Metadata } from 'next/types';
import Link from 'next/link';
import { allBlogs } from '../../../.contentlayer/generated';
export default function Page() {
  return (
    <div className='blog__page'>
      <h2>Blogs</h2>
      <div className='container'>
        {allBlogs
          ?.sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((blog) => (
            <Link key={blog.slug} href={`/${blog.slug}`}>
              <article className='content'>
                <h5>{blog.title}</h5>
                <p>{blog.description}</p>
              </article>
            </Link>
          ))}
      </div>
    </div>
  );
}
export const metadata: Metadata = {
  title: 'Blogs',
  description:
    'This about page holds all the necessary information about Abdul Malek Blogs',
};
