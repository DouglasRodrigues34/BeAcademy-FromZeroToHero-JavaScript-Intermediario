//setTimeout(() => console.log('Minha Resposta'),5000)

/* Promisses */

/*    function show(){
        setTimeout(()=>{
            console.log('Oi!')
        }, 2000);
        console.log('Até logo!')
    } */

//show()
/*    const minhaPromise = new Promise((resolve, reject) => {
        let n = 11
        if(n > 10){
            resolve()
        }else{
            reject()
        }
    }) */

//minhaPromise.then(result => console.log('resolveu')).catch(err => console.log('errou')).finally(() => console.log('finally'))

import fetch from 'node-fetch';

//fetch()
/*    const firstUser = (userId) => {
        let response =  fetch(`https://jsonplaceholder.typecode.com/todos/${userId}`)
        .then(res => res.json())
        .then(data => console.log(`O title é ${data.title}`))
    }

    firstUser(2) */


const cep = 01001000;
fetch(` https://viacep.com.br/ws/${cep}/json/`)
.then(r => r.json())
.then(cep =>{
    console.log(`O bairro é ${cep.bairro}e o logradouro é ${cep.logradouro}`)
});