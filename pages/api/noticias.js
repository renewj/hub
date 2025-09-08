export default async function handler(req, res) {
  try {
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

    res.status(200).json(noticias);
  } catch (error) {
    res.status(500).json({ error: 'Não foi possível buscar as notícias.' });
  }
}
