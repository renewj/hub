export default function Categories({ categories }) {
  if (!categories?.length) return null;
  return (
    <nav>
      <h2>Categorias</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
    </nav>
  );
}
