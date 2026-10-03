Next.js: App Router e Roteamento

Exercício 4.1: Estrutura de Rotas e Navegação Dentro de um projeto Next.js (utilizando o diretório app/):
Crie as páginas:
Home: app/page.js
Sobre: app/sobre/page.js
Produtos: app/produtos/page.js
Crie um componente de menu de navegação reutilizável (Navbar) usando o componente <Link/> do next/link para navegar entre essas 3 rotas sem recarregar a página.

Exercício 4.2: Rotas Dinâmicas ([id])
Dentro de app/produtos/, crie uma pasta dinâmica [id] com o arquivo page.js.
Faça com que ao acessar a URL /produtos/101, a página leia o parâmetro params.id e exiba o texto: "Exibindo detalhes do produto número: 101".
Adicione um botão "Voltar para Produtos" usando a navegação do Next.js.

