const mutiplicacao = (valor1: number, valor2: number): number => valor1 * valor2;
const result = mutiplicacao(8, 6);
console.log(result)

const pessoa = (name: string): string => name;
const nomeDaPessoa = pessoa('Jusé')
const disOi = `${nomeDaPessoa} diz oi`;
console.log(disOi);

class Pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome
    }

    dizOla(): string{
    return `${this.nome} diz olá`
    }
}

const pessoaPedro = new Pessoa('Toninho')
console.log(pessoaPedro.dizOla())