// Exercício 4.2 - Rota dinâmica: o [id] da pasta vira params.id
import Link from "next/link";

// Nas versões novas do Next.js, params chega como Promise, por isso usamos async/await
export default async function DetalheProduto({ params }) {
  const { id } = await params;

  return (
    <section>
      <h1>Detalhes do produto</h1>
      <p>Exibindo detalhes do produto número: {id}</p>
      <Link href="/produtos" className="botao">
        Voltar para Produtos
      </Link>
    </section>
  );
}
