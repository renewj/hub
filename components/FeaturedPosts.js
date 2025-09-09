import Link from 'next/link';

export default function FeaturedPosts({ posts }) {
  if (!posts?.length) return null;
  return (
    <section>
      <h2>Destaques</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <a>
                <strong>{post.title.rendered}</strong>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
