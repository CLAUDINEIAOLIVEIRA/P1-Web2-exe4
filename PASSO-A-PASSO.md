# Exercício 4: Next.js, App Router e rotas

## Parte 1: Criando o projeto Next.js

**Passo 1. Abra o terminal** na pasta `Exercicio 4` (menu **Terminal > Novo Terminal** ou `Ctrl + '`).

**Passo 2. Crie o projeto.**

```
npx create-next-app@latest rotas-next
```

O terminal vai fazer algumas perguntas. Responda assim:

| Pergunta | Resposta |
|---|---|
| Would you like to use the recommended Next.js defaults? | **No, customize settings** |
| Would you like to use TypeScript? | **No** |
| Which linter would you like to use? | **None** |
| Would you like to use React Compiler? | **No** |
| Would you like to use Tailwind CSS? | **No** |
| Would you like your code inside a `src/` directory? | **No** |
| Would you like to use App Router? | **Yes** |
| Would you like to customize the import alias? | **No** |

> As perguntas podem mudar um pouco conforme a versão. O importante é: **sem TypeScript**, **sem `src/`** e **com App Router**.

**Passo 3. Entre na pasta e abra no VS Code.**

```
cd rotas-next
code .
```

**Passo 4. Limpe os arquivos de exemplo.**

- Apague o arquivo `app/page.module.css`.
- Apague os arquivos `.svg` da pasta `public`.
- Apague todo o conteúdo de `app/globals.css` (vamos escrever o nosso no Passo 11).

> **Como funcionam as rotas no App Router?** Cada **pasta** dentro de `app/` vira um pedaço da URL, e o arquivo `page.js` dentro dela é a página que aparece:
>
> | Arquivo | Endereço no navegador |
> |---|---|
> | `app/page.js` | `/` |
> | `app/sobre/page.js` | `/sobre` |
> | `app/produtos/page.js` | `/produtos` |
> | `app/produtos/[id]/page.js` | `/produtos/101`, `/produtos/102`, ... |

## Parte 2: Exercício 4.1, as páginas e a Navbar

**Passo 5. Substitua o conteúdo de `app/page.js`** (Home):

```jsx
export default function Home() {
  return (
    <section>
      <h1>Home</h1>
      <p>Bem-vindo à nossa loja! Use o menu acima para navegar.</p>
    </section>
  );
}
```

**Passo 6. Crie a pasta `app/sobre`** e, dentro dela, o arquivo `page.js`:

```jsx
export default function Sobre() {
  return (
    <section>
      <h1>Sobre</h1>
      <p>Somos uma loja criada para praticar rotas com o Next.js.</p>
    </section>
  );
}
```

**Passo 7. Crie a pasta `app/produtos`** e, dentro dela, o arquivo `page.js`. Ele lista alguns produtos com link para os detalhes (que vamos criar no Exercício 4.2):

```jsx
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
```

**Passo 8. Crie a pasta `components`** na raiz do projeto (fora da pasta `app`) e, dentro dela, o arquivo `Navbar.js`:

```jsx
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
```

> **Por que `<Link>` e não `<a>`?** Com `<a href>`, o navegador recarrega o site inteiro a cada clique. O `<Link>` do Next.js troca só o conteúdo da página, sem recarregar, e por isso é bem mais rápido.

**Passo 9. Substitua todo o conteúdo de `app/layout.js`** para a Navbar aparecer em todas as páginas:

```jsx
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Loja Next",
  description: "Exercício de rotas com o App Router do Next.js",
};

// O layout envolve todas as páginas, por isso a Navbar aparece em todas elas
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
```

> **O que é o `layout.js`?** É a "moldura" do site. Tudo o que está nele aparece em todas as páginas, e o `{children}` é o lugar onde entra a página atual.

> **O que é `@/components/Navbar`?** O `@` é um atalho para a raiz do projeto. Assim não precisamos escrever `../components/Navbar`.

## Parte 3: Exercício 4.2, a rota dinâmica [id]

**Passo 10. Dentro de `app/produtos`, crie a pasta `[id]`** (com os colchetes no nome) e, dentro dela, dois arquivos.

O primeiro é o `page.js`:

```jsx
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
```

O segundo é o `loading.js`:

```jsx
// Mostrado enquanto o Next.js lê o id da URL
export default function Loading() {
  return <p>Carregando produto...</p>;
}
```

> **O que os colchetes fazem?** A pasta `[id]` aceita **qualquer valor** naquela parte da URL. Ao abrir `/produtos/101`, o Next.js entrega `{ id: "101" }` dentro de `params`.

> **Por que `await params`?** Nas versões novas do Next.js (15 em diante), `params` chega como uma Promise. Em versões antigas era só escrever `params.id`; agora é preciso esperar o valor com `await` e, por isso, a função leva `async`.

> **Para que serve o `loading.js`?** Ele mostra uma mensagem enquanto o Next.js lê o `id` da URL. No Next.js 16, sem esse arquivo o `npm run build` dá erro na rota `[id]` (`uncached or runtime data during prerendering`).

**Passo 11. Escreva os estilos em `app/globals.css`:**

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f2f4f7;
  color: #222;
}

main {
  max-width: 720px;
  margin: 0 auto;
  padding: 32px 16px;
}

/* Navbar (Exercício 4.1) */
.navbar {
  display: flex;
  gap: 24px;
  padding: 16px 24px;
  background-color: #1f2937;
}

.navbar a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.navbar a:hover {
  text-decoration: underline;
}

/* Lista de produtos */
.lista-produtos {
  padding-left: 20px;
}

.lista-produtos li {
  margin-bottom: 8px;
}

.lista-produtos a {
  color: #4a6cf7;
}

/* Botão de voltar (Exercício 4.2) */
.botao {
  display: inline-block;
  margin-top: 16px;
  padding: 10px 18px;
  border-radius: 8px;
  background-color: #4a6cf7;
  color: #fff;
  text-decoration: none;
}

.botao:hover {
  background-color: #3451c9;
}
```

**Passo 12. Rode e confira no navegador.**

```
npm run dev
```

Abra `http://localhost:3000`.

| O que testar | Resultado esperado |
|---|---|
| Clicar em **Home**, **Sobre** e **Produtos** | A página troca sem piscar (não recarrega) |
| Em Produtos, clicar em **101 - Teclado** | Vai para `/produtos/101` |
| Página do produto | "Exibindo detalhes do produto número: 101" |
| Digitar `/produtos/999` na barra de endereço | "Exibindo detalhes do produto número: 999" |
| Clicar em **Voltar para Produtos** | Volta para `/produtos` |

## Problemas comuns

- **A página do produto mostra o número vazio**: faltou o `await params` (ou o `async` na função).
- **`npm run build` dá erro na rota `/produtos/[id]`**: faltou o arquivo `loading.js` dentro da pasta `[id]`.
- **Erro 404 em `/sobre`**: o arquivo precisa se chamar exatamente `page.js`, dentro da pasta `app/sobre`.
- **Erro `Module not found: Can't resolve '@/components/Navbar'`**: a pasta `components` precisa estar na raiz do projeto, ao lado de `app`, e não dentro dela.
- **Erro dizendo que a execução de scripts foi desabilitada, ao rodar `npm` ou `npx`**: troque o terminal para o **Prompt de Comando (cmd)**, pela setinha ao lado do `+` no terminal do VS Code.

## Entrega

Não coloque as pastas `node_modules` e `.next` no .zip. Elas são grandes e são recriadas com `npm install` e `npm run dev`.
