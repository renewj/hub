import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Head from 'next/head'

export async function getServerSideProps(context) {
  const { id } = context.params
  const apiUrl = process.env.WORDPRESS_API_URL || 'https://infomoney.com.br/wp-json/wp/v2'
  let post = null
  let notFound = false

  try {
    const res = await fetch(`${apiUrl}/posts/${id}`)
    if (res.ok) {
      post = await res.json()
      notFound = false
    } else if (res.status === 404) {
      notFound = true
    } else {
      notFound = true
    }
  } catch (error) {
    notFound = true
  }

  return {
    props: {
      post,
      notFound,
    }
  }
}

export default function PostPage({ post, notFound }) {
  if (notFound) {
    return (
      <>
        <Header />
        <main style={{maxWidth: '800px', margin: '0 auto', padding: '2rem'}}>
          <Link href="/"><a>← Voltar</a></Link>
          <h1>Post não encontrado</h1>
          <p>O conteúdo que você está tentando acessar não existe ou ocorreu um erro no servidor.</p>
        </main>
        <Footer />
      </>
    )
  }

  // Dados para LD+JSON Schema.org
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": post.title.rendered,
    "datePublished": post.date,
    "dateModified": post.modified,
    "author": post.author
      ? {
          "@type": "Person",
          "name": post.author
        }
      : undefined,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${process.env.SITE_URL || 'https://seu-site-nextjs.com'}/post/${post.id}`
    },
    "articleBody": post.content?.rendered,
    // Adicione imagem destacada se disponível
    ...(post.featured_media && {
      "image": [
        `${process.env.SITE_URL || 'https://seu-site-nextjs.com'}/wp-content/uploads/${post.featured_media}`
      ]
    }),
    // Adicione publisher se desejar
    "publisher": {
      "@type": "Organization",
      "name": "Seu Site",
      "logo": {
        "@type": "ImageObject",
        "url": `${process.env.SITE_URL || 'https://seu-site-nextjs.com'}/logo.png`
      }
    }
  }

  return (
    <>
      <Head>
        <title>{post.title.rendered}</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
      </Head>
      <Header />
      <main style={{maxWidth: '800px', margin: '0 auto', padding: '2rem'}}>
        <Link href="/"><a>← Voltar</a></Link>
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        {post.categories?.length &&
          <div>
            <strong>Categorias:</strong> {post.categories.join(', ')}
          </div>
        }
      </main>
      <Footer />
    </>
  )
}
