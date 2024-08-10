"use strict";
function filtrarProdutosPorPreco(produtos, precoMaximo) {
    return produtos.filter(produto => produto.preco <= precoMaximo);
}
const produtos = [
    { nome: 'Fone', preco: 50 },
    { nome: 'Bolsa', preco: 150 },
    { nome: 'Ingresso', preco: 75 },
    { nome: 'Filé', preco: 20 },
    { nome: 'DoisPadês', preco: 140 }
];
const precoMaximo = 100;
const produtosFiltrados = filtrarProdutosPorPreco(produtos, precoMaximo);
console.log(produtosFiltrados);
