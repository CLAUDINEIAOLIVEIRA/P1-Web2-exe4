"use client";

import { use } from "react";
import { useRouter } from "next/navigation";

export default function ProdutoDetalhes({ params }) {
    const router = useRouter();
    const { id } = use(params);

    return (
        <main>
            <h1>Detalhes do Produto</h1>

            <p>
                Exibindo detalhes do produto número: {id}
            </p>

            <button onClick={() => router.push("/produtos")}>
                Voltar para Produtos
            </button>
        </main>
    );
}