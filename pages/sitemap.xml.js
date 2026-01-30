export async function getServerSideProps({ res }) {
  const apiUrl = process.env.WORDPRESS_API_URL || 'https://infomoney.com.br/wp-json/wp/v2'
  // Busca até 100 posts do WordPress. Ajuste per_page conforme necessário.
  const postsRes = await fetch(`${apiUrl}/posts?per_page=100`)
  const posts = postsRes.ok ? await postsRes.json() : []

  const siteUrl = process.env.SITE_URL || 'https://seu-site-nextjs.com'

  // Gera o XML do sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <priority>1.0</priority>
  </url>
  ${posts
    .map(
      post => `
      <url>
        <loc>${siteUrl}/post/${post.id}</loc>
        <lastmod>${post.modified_gmt ? post.modified_gmt.split(' ')[0] : ''}</lastmod>
        <priority>0.8</priority>
      </url>
    `
    )
    .join('')}
</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return { props: {} }
}

export default function Sitemap() {
  // Não renderiza nada no front-end
  return null
}
