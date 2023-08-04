import { Mdx } from '@/components/mdx-content';
import type{ Metadata } from 'next';
import { allBlogs } from '../../../../.contentlayer/generated';
import {notFound} from 'next/navigation'

async function getBlogsFromParams(slug) {
  const blog = allBlogs?.find((doc) => doc.slugAsParams === slug);
  if (!blog) return;

  return blog;
}
export async function generateStaticParams() {
  const blogs = allBlogs
 
  return blogs.map((blog) => ({
    slug: blog.slugAsParams,
  }))
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allBlogs?.find((post) => post.slugAsParams === params.slug);

  if (!post) {
    return;
  }

  const { title, publishedAt: publishedTime, description } = post;
  // const ogImage = image
  //   ? `https://leerob.io${image}`
  //   : `https://leerob.io/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      // url: `https://leerob.io/blog/${slug}`,
      // images: [
      //   {
      //     url: ogImage,
      //   },
      // ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      // images: [ogImage],
    },
  };
}
function formatDate(date: string) {
  const currentDate = new Date();
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return `${fullDate} (${formattedDate})`;
}
const page = async ({ params }: { params: { slug: string } }) => {
  const data = await getBlogsFromParams(params.slug);

  if(!data){
    notFound()
  }
  return (
    <div className='blog__details'>
       <article>
        <h3 className="text-sm text-neutral-600 dark:text-neutral-400">
          {data?.title}
        </h3>
        <div className="description">

       <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p>
        {data?.description}
        </p>
      </div>
       <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(data?.publishedAt)}
        </p>
      </div>
        </div>
       </article>
      {<Mdx code={data?.body.code} />}
    </div>
  );
};

export default page;
