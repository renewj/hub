import Link from 'next/link';

export default function PostList({ posts }) {
  if (!posts?.length) return <p>Nenhum post encontrado.</p>;
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link href={`/post/${post.id}`}>
            <a>
              <h3>{post.title.rendered}</h3>
              <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
