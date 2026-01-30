import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      'https://www.infomoney.com.br/wp-json/wp/v2/posts?per_page=10'
    );
    // Formata os dados para o frontend
    const noticias = response.data.map(post => ({
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
