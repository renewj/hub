import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import PostList from '../components/PostList'
import FeaturedPosts from '../components/FeaturedPosts'
import Categories from '../components/Categories'
import { useState, useEffect } from 'react'
import { fetchPosts, fetchFeaturedPosts, fetchCategories } from '../lib/wordpress'
import Script from 'next/script'

export default function Home() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [featured, setFeatured] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchPosts(page).then(setPosts)
    fetchFeaturedPosts().then(setFeatured)
    fetchCategories().then(setCategories)
  }, [page])

  return (
    <>
    <Head>
        <title>{{hub}}</title>
      </Head>
      <Header />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
        <Hero />
    <main style={{margin:'0 auto',maxWidth:'800px'}}>
        <FeaturedPosts posts={featured} />
        <Categories categories={categories} />
        <PostList posts={posts} />
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>Anterior</button>
          <button onClick={() => setPage(page + 1)}>Próxima</button>
        </div>
      </main>
      <Footer />
    </>
  )
}
