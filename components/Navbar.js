// Exercício 4.1 - Menu reutilizável. O <Link> troca de página sem recarregar o site
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/sobre">Sobre</Link>
      <Link href="/produtos">Produtos</Link>
    </nav>
  );
}
