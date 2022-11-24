// rest parameters
function getSum(...args) {
    let total = 0
    for (const arg of args) {
        total += arg
    }
    return total
}
//console.log(getSum(2, 5))

//spread operator

const arr = [1, 2, 3];
const arr2 = [...arr, 4];

//console.log(arr2)

// merge arrays

const a =  [1, 2, 3];
const b= [4, 5, 6];

const mergeArrays = [0, 'Marcelo',...b, ...a]
//console.log(mergeArrays)

/* Destrcturing */

 const carro = {
    marca: 'Fiat',
    ano: 2018,
    portas: 2,
 }

 //const marca =  carro.marca
 //const ano = carro.ano

 const{marca, ano, portas} = carro;

 //console.log(`O carro é da marca ${marca}, ano ${ano} e tem ${portas} portas.`)

 const client = {
    nome: 'Marcelo',
    compras: {
        digitais:{
            livros: ['Dom Casmurro', 'O Cortiço'],
            filmes:['Senhor dos Anéis', 'Matrix']
        },
        fisicas:{
            cadernos: ['Caderno']
        }
    }
 }
 /*console.log(cliente.compras.digitais.livros)
 console.log(cliente.compras.digitais.filmes)*/

 const {livros, filmes} = cliente.compras.digitais;
 /*console.log(livros);
 console.log(filmes);*/

 const frutas = ['banana', 'Uva', 'Morango'];
 const primeiraFruta = frutas[0];
 const segundaFruta = frutas [1];
 const terceiraFruta = frutas [2]

 //com destructuring

 const [p, segunda, terceira] = frutas;
 console.log(p)