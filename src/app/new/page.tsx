import { PageWrapper } from '@/utility/page-warpper';
import { Metadata } from 'next/types';
// import { motion } from 'framer-motion';
// import { fadeIn, stagger } from '../../utility/Animation';
const New = () => {
  return (
    <PageWrapper className='h-screenHeightWithoutHeader'>

      <section className='tranding'>
        <div
          className='recent'
          // variants={stagger}
          // initial="hidden"
          // animate="show"
        >
          <h4
          // variants={fadeIn}
          >
            Recently Added
          </h4>
          <p
          // variants={fadeIn}
          >
            coming soon...
          </p>
        </div>
      </section>
      </PageWrapper>
  );
};

export default New;
export const metadata: Metadata = {
  title: 'New',
  description:
    'This about page holds all the necessary information about What is new added',
};
