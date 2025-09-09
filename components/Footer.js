export default function Footer() {
  return (
    <footer style={{ background: "#222", color: "#fff", padding: "1rem", textAlign: "center" }}>
      <small>&copy; {new Date().getFullYear()} - Meu Blog Next.js & WordPress</small>
    </footer>
  );
}
