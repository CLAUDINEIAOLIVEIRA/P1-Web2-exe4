# P1 - Programação e Design para Web II

**Aluno:** Willian
**Matrícula:** 2521560991008
**Professora:** Claudineia Moreira de Oliveira
**Disciplina:** T303 - Programação e Design para Web II
**Avaliação:** P1 | **Data:** 02/10/2026 | **Valor:** 6,0

## Questão 4 - Next.js: App Router e Roteamento (2,0)

### Exercício 4.1: Estrutura de Rotas e Navegação
Criar as páginas `app/page.js` (Home), `app/sobre/page.js` (Sobre) e `app/produtos/page.js` (Produtos) e um componente `Navbar` reutilizável com `<Link/>` do `next/link`, navegando sem recarregar a página.
Arquivos: `components/Navbar.js` e `app/layout.js`

### Exercício 4.2: Rotas Dinâmicas ([id])
Pasta `app/produtos/[id]/page.js`. Ao acessar `/produtos/101`, ler `params.id` e exibir "Exibindo detalhes do produto número: 101", com o botão "Voltar para Produtos" usando a navegação do Next.js.

## Estrutura e visual
- `data/produtos.js`: lista de produtos (id, nome, preço, imagem e descrição) usada na listagem e na rota dinâmica.
- `public/produtos/*.svg`: imagens dos produtos.
- `app/produtos/page.js`: grade de cards com imagem, ID, nome, preço e botão "Ver detalhes".
- `app/produtos/[id]/page.js`: lê `params.id`, exibe o texto exigido pelo enunciado e, quando o produto existe, imagem, preço e descrição, com o botão "Voltar para Produtos".
- `components/Navbar.js`: menu com `<Link/>` que destaca a página atual.

## Como executar
```bash
npm install
npm run dev
```
Acesse http://localhost:3000 e http://localhost:3000/produtos/101
