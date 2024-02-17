import Image from 'next/image';
import Link from 'next/link';
import { SiGithub } from 'react-icons/si';
import { VscLiveShare } from 'react-icons/vsc';
import { Metadata } from 'next';
import { config } from '@/lib/constant';

const getData = async (slug: string) => {
  const URL = config.url;
  const res = await fetch(`${URL}/api/projects/${slug}`, {
    next: { revalidate: 3600 },
  });
  return res.json();
};

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const data = await getData(slug);
  return (
    <section className='case__details'>
      <div className='container'>
        <div className='case__study--left'>
          <div className='context links'>
            <p>Links</p>
            <div className='button__links'>
              <Link className='github' href={data.repo}>
                <h5>Source Code</h5>
                <SiGithub />
              </Link>
              <Link className='livesite' href={data.site}>
                <h5>Live Site</h5>
                <VscLiveShare />
              </Link>
            </div>
          </div>
          <div className='context'>
            <p>My Role</p>
            {/* {data?.role?.map((item, i) => (
                <h5 key={i}>{item}</h5>
              ))} */}
          </div>
          <div className='context'>
            <p>Client</p>
            <h5>{data.client}</h5>
          </div>
          <div className='context'>
            <p>Year</p>
            <h5>{data.time}</h5>
          </div>
        </div>
        <div className='case__study--right'>
          <div className='context'>
            <p>Case Study</p>
            <h3>{data.title}</h3>
          </div>
          <div className='sub'>
            <h5>Project Description</h5>
            <p>{data.description}</p>
          </div>
          <div className='sub'>
            <h5>Project Created Time</h5>
            <p>{new Date(data.createdAt).toISOString().split('/')[0]}</p>
          </div>
        </div>
      </div>
      <Image src={data.img} alt={data.img} height={500} width={500} />
    </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // read route params
  const { slug } = params;
  const URL = config.url;
  // fetch data
  const product = await fetch(`${URL}/api/projects/${slug}`, {
    next: { revalidate: 3600 },
  }).then((res) => res.json());
  console.log(product, 'product');
  // optionally access and extend (rather than replace) parent metadata
  return {
    title: product.title,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [
        {
          url: product.img,
          width: '600',
          height: '400',
          alt: product.title,
        },
        {
          url: product.img,
          width: '800',
          height: '600',
          alt: product.title,
        },
      ],
    },
  };
}
