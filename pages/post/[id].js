import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function PostPage() {
  const router = useRouter()
  const { id } = router.query
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      fetch(`${process.env.WORDPRESS_API_URL}/posts/${id}`)
        .then(res => res.json())
        .then(data => {
          setPost(data)
          setLoading(false)
        })
    }
  }, [id])

  if (loading) return <p>Carregando...</p>
  if (!post || post.status === '404') return <p>Post não encontrado.</p>

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
