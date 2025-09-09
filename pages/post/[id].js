import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export async function getServerSideProps(context) {
  const { id } = context.params
  const apiUrl = process.env.WORDPRESS_API_URL || 'https://seu-site-wordpress.com/wp-json/wp/v2'
  let post = null

  const res = await fetch(`${apiUrl}/posts/${id}`)
  if (res.ok) {
    post = await res.json()
  }

  return {
    props: {
      post,
      notFound: !post || post.status === '404',
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
          <p>O conteúdo que você está tentando acessar não existe ou foi removido.</p>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
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
