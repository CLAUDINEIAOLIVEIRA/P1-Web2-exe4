/**
 * P1 - T303 - Programação e Design para Web II
 * Professora: Claudineia Moreira de Oliveira
 * Aluno: Willian | Matrícula: 2521560991008
 * Questão 4 - Exercício 4.2: Rota dinâmica [id]
 */

import Link from "next/link";
import { buscarProduto, formatarPreco } from "../../../data/produtos";

// Exercício 4.2 - Rota dinâmica. No Next 15, params é uma Promise (usa-se await).
export default async function ProdutoDetalhe({ params }) {
  const { id } = await params;
  const produto = buscarProduto(id);

  return (
    <section>
      <h1>Exibindo detalhes do produto número: {id}</h1>

      {produto ? (
        <div className="detalhe">
          <img src={produto.imagem} alt={produto.nome} />
          <div>
            <span className="selo">ID {produto.id}</span>
            <h2>{produto.nome}</h2>
            <p className="preco">{formatarPreco(produto.preco)}</p>
            <h4>Descrição</h4>
            <p>{produto.descricao}</p>
          </div>
        </div>
      ) : (
        <p className="aviso">Nenhum produto cadastrado com o número {id}.</p>
      )}

      <Link href="/produtos" className="botao voltar">
        ← Voltar para Produtos
      </Link>
    </section>
  );
}
