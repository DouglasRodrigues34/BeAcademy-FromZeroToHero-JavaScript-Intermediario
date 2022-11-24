/* Classes */
const Foo = function(x){
    this.x = x
}

const foo = new Foo('x')
    console.log(foo)

class Book {
    constructor(title, year, author){
        this.title = title;
        this.year = year;
        this.author = author;
    }
}
const domCasmurro = new Book('Dom Casmurro', 1899, 'Machado de Assis')
const harryPotter = new Book ('Harry Potter', 1997, 'J. K. Rowling')

let bookList = []

bookList.push(domCasmurro, harryPotter)
console.log(bookList)

class copaDoMundo{
    constructor(country, year){
        this.country = country;
        this.year = year;
    }
    showChampion(team){
        return `A copa do ${this.country} foi disputada no ano de ${this.year} e o campeão foi ${team}`
    }

}
const copa86 = new copaDoMundo('México', 1986)
const copa70 = new copaDoMundo('México', 1970)
const champion86 = copa86.showChampion('Argentina')
const champion70 = copa70.showChampion('Brasil')

console.log (champion86)
console.log (champion70)