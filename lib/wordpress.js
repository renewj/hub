const API_URL = process.env.WORDPRESS_API_URL || 'https://www.infomoney.com.br/wp-json/wp/v2';

export async function fetchPosts(page = 1, perPage = 10) {
  const res = await fetch(`${API_URL}/posts?page=${page}&per_page=${perPage}`);
  const posts = await res.json();
  return posts;
}

export async function fetchFeaturedPosts() {
  // Você pode marcar posts como destaque via meta ou categoria.
  // Exemplo: categoria 'destaque' com id=2
  const res = await fetch(`${API_URL}/posts?categories=2&per_page=5`);
  return await res.json();
}

export async function fetchCategories() {
  const res = await fetch(`${API_URL}/categories`);
  return await res.json();
}
