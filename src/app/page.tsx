import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <html lang="pt-BR">
      <head>
        <title>Home - Meu Site de Notícias</title>
        <meta name="description" content="Bem-vindo ao site de notícias." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Meu Site de Notícias",
              "url": "https://meusite.com/"
            })
          }}
        />
        <link rel="stylesheet" href="/assets/css/styles.css" />
        <script src="/assets/js/scripts.js" defer></script>
      </head>
      <body>
        <Header />
        <main>
          <h1>Bem-vindo ao Meu Site de Notícias</h1>
          <p>Confira as últimas notícias e informações.</p>
        </main>
        <Footer />
      </body>
    </html>
  );
}
