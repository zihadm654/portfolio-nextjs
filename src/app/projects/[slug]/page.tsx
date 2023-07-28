import Image from 'next/image';
import Link from 'next/link';
import {ProjectsTypes} from '../../../utility/Types';
import {SiGithub} from 'react-icons/si';
import {VscLiveShare} from 'react-icons/vsc';

interface Props {
    project: ProjectsTypes;
}

const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/projects/${slug}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  return res.json()
}
//export async function generateStaticParams() {
//  const projects = await fetch('http://localhost:3000/api/projects').then((res) => res.json())
//
//  return projects.map((post) => ({
//    slug: post.slug,
//  }))
//}
const CaseDetails = async({params}: { params: { slug: string } }) => {
const {slug} = params
  const data = await getData(slug);
  console.log('data', data);
    return (
        <>
            <section className="case__details">
                 {data && (
          <>
            <div className="container">
              <div className="case__study--left">
                <div className="context">
                  <p>Case Study</p>
                  <h4>{data.name}</h4>
                </div>
                <div className="context links">
                  <p>Links</p>
                  <div className="button__links">
                    <Link className="github" href={data.repo}>
                      <p>Source Code</p>
                      <SiGithub />
                    </Link>
                    <Link className="livesite" href={data.site}>
                      <p>Live Site</p>
                      <VscLiveShare />
                    </Link>
                  </div>
                </div>
                <div className="context">
                  <p>My Role</p>
                  {data.role.map((item, i) => (
                    <h5 key={i}>{item}</h5>
                  ))}
                </div>
                <div className="context">
                  <p>Client</p>
                  <h5>{data.client}</h5>
                </div>
                <div className="context">
                  <p>Year</p>
                  <h5>{data.time}</h5>
                </div>
              </div>
              <div className="case__study--right">
                <h5>Project Description</h5>
                <p>{data.description}</p>
              </div>
            </div>
            <div className="img__wrapper">
              <Image src={data.img} alt={data.img} height={500} width={500} />
            </div>
          </>
        )}
            </section>
        </>
    );
};

export default CaseDetails;

import { Metadata} from 'next'

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params}: Props,
  ): Promise<Metadata> {
  // read route params
  const id = params.slug

  // fetch data
  const product = await fetch(`http://localhost:3000/api/projects/${id}`).then((res) => res.json())

  return {
    title: product.title,
//    openGraph: {
//      images: ['/some-specific-page-image.jpg', ...previousImages],
//    },
  }
}