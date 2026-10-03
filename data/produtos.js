/**
 * P1 - T303 - Programação e Design para Web II
 * Professora: Claudineia Moreira de Oliveira
 * Aluno: Willian | Matrícula: 2521560991008
 * Questão 4: Dados dos produtos (usados na listagem e na rota dinâmica)
 */

// Lista de produtos usada pelas páginas /produtos e /produtos/[id]
export const produtos = [
  { id: 101, nome: "Notebook Pro 14", preco: 4299.9, imagem: "/produtos/101.svg", descricao: "Notebook leve com tela de 14 polegadas, 16 GB de memória e SSD de 512 GB. Ideal para estudar, programar e trabalhar em qualquer lugar." },
  { id: 102, nome: "Smartphone X12", preco: 2499.0, imagem: "/produtos/102.svg", descricao: "Smartphone com tela AMOLED, câmera dupla de 50 MP e bateria para o dia inteiro. Carregamento rápido incluso." },
  { id: 103, nome: "Fone Bluetooth Air", preco: 349.9, imagem: "/produtos/103.svg", descricao: "Fone sem fio com cancelamento de ruído e até 30 horas de bateria. Estojo de carregamento compacto." },
  { id: 104, nome: "Teclado Mecânico RGB", preco: 289.9, imagem: "/produtos/104.svg", descricao: "Teclado mecânico com switches azuis, iluminação RGB e estrutura reforçada. Ótimo para digitar e jogar." },
  { id: 105, nome: "Monitor 24\" Full HD", preco: 899.0, imagem: "/produtos/105.svg", descricao: "Monitor de 24 polegadas, resolução Full HD, painel IPS e taxa de atualização de 75 Hz." },
  { id: 106, nome: "Mouse Sem Fio Ergo", preco: 129.9, imagem: "/produtos/106.svg", descricao: "Mouse ergonômico sem fio, 6 botões programáveis e sensor de alta precisão. Funciona com pilha por até 12 meses." },
];

export function buscarProduto(id) {
  return produtos.find((p) => String(p.id) === String(id));
}

export function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
