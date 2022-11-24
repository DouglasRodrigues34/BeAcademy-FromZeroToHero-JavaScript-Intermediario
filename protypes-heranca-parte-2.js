/* Prototypes */
/*    function pessoa(nome, idade, peso) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }
*/

//const marcelo = newPessoa('Marcelo', 44, 80);
//console.log(marcelo)

const notebook = {
    cor: 'preta',
    ano: 2022,
    specifications: function(value){
       return `Este MacBook custa R$ ${value},00, cor ${this.cor}, ano ${this.ano}`
    }
}

//console.log(notebook.cor)

const dell = {
    marca: 'Dell'
}

const macBook = {
   marca: 'MacBook'
}

//Object.setPrototypeOf(dell, notebook)
Object.setPrototypeOf(macBook, notebook)

//console.log(dell.specifications(5000))
console.log(macBook.specifications(15000))