/*
function sayHi(greeting, name){
    return `${greeting} dear ${name}`;
}

console.log(sayHi(greeting = "Whats up", name = "Jonatan"))
*/

const greeting1 = "Hejsan";
const name1 = "Jonatan";

function sayHi(greeting="hej", name="Anon"){
    console.log(`${greeting} kära ${name}`)
}

sayHi(greeting1, undefined);