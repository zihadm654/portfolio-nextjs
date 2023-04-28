import Link from 'next/link';
import type { PostMeta } from '../utility/Functionality';
import { motion } from 'framer-motion';
import { fadeIn, stagger } from '../utility/Animation';

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <motion.div variants={stagger} animate="show">
      {posts?.map((post) => (
        <motion.article variants={fadeIn} key={post.slug} className="content">
          <Link href={`/blogs/${post.slug}`}>
              <div className="description">
                <div className="blog__title">
                  <h4>{post.title}</h4>
                  <p>{post.created_at}</p>
                </div>
                <p>{post.description}</p>
                <div className="tags">
                  {post.tags.map((tag) => (
                    <p key={tag}>#{tag}</p>
                  ))}
                </div>
              </div>
          </Link>
        </motion.article>
      ))}
    </motion.div>
  );
}
