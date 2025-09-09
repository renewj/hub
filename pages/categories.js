import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { fetchCategories } from '../lib/wordpress'

export default function CategoriesPage() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategories().then(setCategories)
  }, [])

  return (
    <>
      <Header />
      <main>
        <h1>Categorias</h1>
        <ul>
          {categories.map(cat => (
            <li key={cat.id}>{cat.name}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  )
}
