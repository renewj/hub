import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Meu Site de Notícias',
  description: 'Site de notícias com Next.js e schema LD+JSON'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="/assets/css/styles.css" />
        <script src="/assets/js/scripts.js" defer></script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
