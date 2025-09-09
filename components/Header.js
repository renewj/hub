import Link from "next/link";

export default function Header() {
  return (
    <header style={{ background: "#222", color: "#fff", padding: "1rem" }}>
      <nav>
        <Link href="/"><a style={{ color: "#fff", marginRight: "2rem", fontWeight: "bold" }}>Home</a></Link>
        <Link href="/categories"><a style={{ color: "#fff", marginRight: "2rem" }}>Categorias</a></Link>
        <Link href="/about"><a style={{ color: "#fff" }}>Sobre</a></Link>
      </nav>
    </header>
  );
}
