/**
 * P1 - T303 - Programação e Design para Web II
 * Professora: Claudineia Moreira de Oliveira
 * Aluno: Willian | Matrícula: 2521560991008
 * Questão 4 - Exercício 4.1: Navbar com <Link/> (destaca a página atual)
 */

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", texto: "Home" },
  { href: "/sobre", texto: "Sobre" },
  { href: "/produtos", texto: "Produtos" },
];

// Menu reutilizável: <Link/> navega entre as rotas sem recarregar a página
export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <span className="logo">Loja P1</span>
      <div className="navbar-links">
        {links.map((l) => {
          const ativo = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
          return (
            <Link key={l.href} href={l.href} className={ativo ? "ativo" : ""}>
              {l.texto}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
