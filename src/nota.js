// const alunos = ['Fabricio', 'Jão', 'Hugo', 'Jose'];

// const infoAlunos = alunos.map(function(itemAtual) {
//     return {
//         nome: itemAtual,
//         nota: 10
//     }
// })

// console.log(infoAlunos)

const alunosENotas = [
    { nome: "Fabricio", nota: 9.5 },
    { nome: "Jão", nota: 2.2 },
    { nome: "Hugo", nota: 9.0 },
    { nome: "Jose", nota: 6.8 },
    { nome: "Marlei", nota: 5.5 }
];

function filtrarAprovados(itensAtuais) {
    return itensAtuais.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAprovados(alunosENotas);

console.log(alunosAprovados);