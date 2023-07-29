import Image from 'next/image';
import Link from 'next/link';
import { ProjectsTypes } from '../../../utility/Types';
import { SiGithub } from 'react-icons/si';
import { VscLiveShare } from 'react-icons/vsc';

const getData = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/projects/${slug}`);
  return res.json();
};
//export async function generateStaticParams() {
//  const projects = await fetch('http://localhost:3000/api/projects').then((res) => res.json())
//
//  return projects.map((post) => ({
//    slug: post.slug,
//  }))
//}
const CaseDetails = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const data: ProjectsTypes = await getData(slug);
  console.log('data', data);
  return (
    <>
      <section className='case__details'>
        {data && (
          <>
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
                  {data.role.map((item, i) => (
                    <h5 key={i}>{item}</h5>
                  ))}
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
              </div>
            </div>
            <Image src={data.img} alt={data.img} height={500} width={500} />
          </>
        )}
      </section>
    </>
  );
};

export default CaseDetails;

import { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.slug;

  // fetch data
  const product = await fetch(`http://localhost:3000/api/projects/${id}`, {
    cache: 'no-store',
  }).then((res) => res.json());

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
