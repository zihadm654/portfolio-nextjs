import Link from "next/link";
import type { PostMeta } from "../utility/Functionality";

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      {posts?.map((post) => (
        <article key={post.slug} className="content">
          <Link href={`/blogs/${post.slug}`}>
            <a>
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
            </a>
          </Link>
        </article>
      ))}
    </>
  );
}
