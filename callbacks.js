/* Funções de callbacks */
function hello(name){
    console.log(name)
}

function helloUser(n){
    n('Marcelo Vasques')
}

//helloUser(hello)

const callback = e => alert('Foi clicado')

window.addEventListener('click', callback)