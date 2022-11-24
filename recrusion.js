/*Recursion*/

function countDown(number){
    console.log(number);
    const newNumber =  number -1;
    if (newNumber > 0 )
    {
        countDown(newNumber);
    }
}
countDown(10);

/* Default Parameters*/
function say(message = 'Hi'){
    console.log(message);
}
//say()
//say('oi')

/* Closures*/
// escolo léxico é o escoppo onde a função foi definida

import {somarNumeros} from './escopo'
//let x = 10

const result = somarNumeros()
console.log(result)