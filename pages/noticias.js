import { useEffect, useState } from 'react';

export default function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/noticias')
      .then(res => res.json())
      .then(data => {
        setNoticias(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Últimas Notícias...</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : (
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
      )}
    </div>
  );
}
