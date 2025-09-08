export async function getServerSideProps() {
  const response = await fetch(
    'https://www.infomoney.com.br/wp-json/wp/v2/posts?per_page=10'
  );
  const data = await response.json();

  const noticias = data.map(post => ({
    id: post.id,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered,
    link: post.link,
    date: post.date,
  }));

  return {
    props: {
      noticias,
    },
  };
}

export default function Noticias({ noticias }) {
  return (
    <div>
      <h1>Últimas Notícias do Infomoney</h1>
      <ul>
        {noticias.map(noticia => (
          <li key={noticia.id}>
            <a href={noticia.link} target="_blank" rel="noopener noreferrer">
              <h2 dangerouslySetInnerHTML={{ __html: noticia.title }} />
            </a>
            <span dangerouslySetInnerHTML={{ __html: noticia.excerpt }} />
            <small>{new Date(noticia.date).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
