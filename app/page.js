/**
 * P1 - T303 - Programação e Design para Web II
 * Professora: Claudineia Moreira de Oliveira
 * Aluno: Willian | Matrícula: 2521560991008
 * Questão 4 - Exercício 4.1: Página Home
 */

import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <h1>Home</h1>
      <p>Bem-vindo ao projeto Next.js com App Router.</p>
      <Link href="/produtos" className="botao">Ver produtos</Link>
    </section>
  );
}
