# Next.js + API Examples

Este projeto conecta Next.js à API REST do WordPress e entrega:

- Home com Hero
- Lista paginada de posts
- Destaques
- Categorias

## Como usar

1. Instale dependências:
   ```bash
   npm install
   ```

2. Configure a URL da sua API WordPress em `.env.local`:
   ```
   WORDPRESS_API_URL=https://seu-site-wordpress.com/wp-json/wp/v2
   ```

3. Rode o servidor:
   ```bash
   npm run dev
   ```

## Estrutura

- `/pages/index.js`: Home com hero, posts paginados, destaques e categorias
- `/components/PostList.js`: Lista paginada de posts
- `/components/Hero.js`: Hero section
- `/components/FeaturedPosts.js`: Destaques
- `/components/Categories.js`: Lista de categorias
- `/lib/wordpress.js`: Funções para consumir API do WordPress
