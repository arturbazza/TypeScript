"use strict";
function filtrarAnosAntigos(anos) {
    const anoAtual = new Date().getFullYear();
    const anosAnteriores = [];
    for (let i = 0; i < anos.length; i++) {
        if (anos[i] < anoAtual) {
            anosAnteriores.push(anos[i]);
        }
    }
    return anosAnteriores;
}
console.log(filtrarAnosAntigos([2024, 2025, 2000, 2010])); //[2000, 2010];
