import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/noticias">Notícias</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
        </ul>
      </nav>
    </header>
  );
}
