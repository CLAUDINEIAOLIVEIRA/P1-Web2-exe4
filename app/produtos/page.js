import Link from "next/link";

const produtos = [
  { id: 101, nome: "Teclado" },
  { id: 102, nome: "Mouse" },
  { id: 103, nome: "Monitor" },
];

export default function Produtos() {
  return (
    <section>
      <h1>Produtos</h1>
      <ul className="lista-produtos">
        {produtos.map((produto) => (
          <li key={produto.id}>
            <Link href={`/produtos/${produto.id}`}>
              {produto.id} - {produto.nome}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
