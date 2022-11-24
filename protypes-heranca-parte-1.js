/* Prototypes */
function pessoa(nome, idade, peso) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
}

//const marcelo = newPessoa('Marcelo', 44, 80);
//console.log(pessoa.prototype)
const pessoa = 'Marcelo'

const notebook = {
    cor: 'preta',
    ano: 2022,
    especifications: function(value) {
        return `Este notebook custa R$${value},00; cor ${this.cor}; ano ${this.ano}`
    }
}

const dell = {
    marca: 'Dell'
}

Object.setPrototypeOf(dell, notebook)

console.log(dell.especifications(5000))