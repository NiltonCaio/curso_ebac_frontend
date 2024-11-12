"use strict";
const mutiplicacao = (valor1, valor2) => valor1 * valor2;
const result = mutiplicacao(8, 6);
console.log(result);
const pessoa = (name) => name;
const nomeDaPessoa = pessoa('Jusé');
const disOi = `${nomeDaPessoa} diz oi`;
console.log(disOi);
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    dizOla() {
        return `${this.nome} diz olá`;
    }
}
const pessoaPedro = new Pessoa('Toninho');
console.log(pessoaPedro.dizOla());
