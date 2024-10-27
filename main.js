function Cliente(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.vivo = function() {
        console.log(this.nome + " se encontra vivo")
    }
}

function ClientePF(nome, idade, situacao, patrimonio) {
    Cliente.call(this, nome, idade)
    this.situacao = situacao
    this.patrimonio = patrimonio

    this.dizInfoBasico = function() {
        console.log(`Nome: ${this.nome}  Idade: ${this.idade}`)
    }

    this.dizInfoPrivado1 = function() {
        console.log(`Situação: ${this.situacao}`)
    }

    this.dizInfoPrivado2 = function() {
        console.log(`Patrimonio: ${this.patrimonio}`)
    }
}

function ClientePJ(nome, idade, situacao, patrimonio) {
    Cliente.call(this, nome, idade)
    this.situacao = situacao
    this.patrimonio = patrimonio

    this.dizInfoBasico = function() {
        console.log(`Nome: ${this.nome}  Idade: ${this.idade}`)
    }

    this.dizInfoPrivado1 = function() {
        console.log(`Situação: ${this.situacao}`)
    }

    this.dizInfoPrivado2 = function() {
        console.log(`Patrimonio: ${this.patrimonio}`)
    }
}

const clientePF1 = new ClientePF("Jão", 23, "empregadoCLT", 20000)
const clientePJ1 = new ClientePJ("Carlos", 28, "autonomo", 60000)
const clientePJ2 = new ClientePJ("Rodolfo", 35, "herdeiro", 90000)

clientePF1.dizInfoBasico()
clientePF1.vivo()
clientePF1.dizInfoPrivado1()
clientePF1.dizInfoPrivado2()

clientePJ1.dizInfoBasico()
clientePJ1.vivo()
clientePJ1.dizInfoPrivado1()
clientePJ1.dizInfoPrivado2()

clientePJ2.dizInfoBasico()
clientePJ2.vivo()
clientePJ2.dizInfoPrivado1()
clientePJ2.dizInfoPrivado2()