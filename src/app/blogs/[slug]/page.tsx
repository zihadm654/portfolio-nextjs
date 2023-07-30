import { Mdx } from '@/components/mdx-content';
import { allBlogs } from '../../../../.contentlayer/generated';
import { Metadata } from 'next';

async function getBlogsFromParams(slug: string) {
  const blog = allBlogs.find((doc) => doc.slug === slug);
  if (!blog) return;

  return blog;
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { title, publishedAt: publishedTime, description, slug } = post;

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

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await getBlogsFromParams(params.slug);
  // console.log(params.slug);
  // console.log(data?.body.code, 'data');
  return (
    <div className='blog__details'>
      <article>{<Mdx code={data?.body.code} />}</article>;
    </div>
  );
};

export default page;
