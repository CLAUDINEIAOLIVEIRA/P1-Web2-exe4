/**
 * P1 - T303 - Programação e Design para Web II
 * Professora: Claudineia Moreira de Oliveira
 * Aluno: Willian | Matrícula: 2521560991008
 * Questão 4 - Exercício 4.1: Página Produtos
 */

import Link from "next/link";
import { produtos, formatarPreco } from "../../data/produtos";

export default function Produtos() {
  return (
    <section>
      <h1>Produtos</h1>
      <div className="grade">
        {produtos.map((p) => (
          <article key={p.id} className="card">
            <img src={p.imagem} alt={p.nome} />
            <div className="card-corpo">
              <span className="selo">ID {p.id}</span>
              <h3>{p.nome}</h3>
              <p className="preco">{formatarPreco(p.preco)}</p>
              <Link href={`/produtos/${p.id}`} className="botao">Ver detalhes</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
