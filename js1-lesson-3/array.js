/*

syftet med arrayer:
Många världen i en variabel,
mindre kod
strukturerad kod
Lättare att jobba med 

*/

const names = [
    "jonatan",
    "karl",
    "sven",
    "sten",
    "baba",
]


names.forEach(function(name, number, myArray){ // (element, iterator), alltid variabel först, sen "nummer"
    console.log(name, number + 1, myArray)
})


function multiplyBy2(x, index) {
    console.log(x*2, index);
}

const ages = [32, 54, 23, 75, 26];

ages.forEach(multiplyBy2);


const greeting = names.map(function(name){
    return `hej ${name}`
})

console.log(greeting[2]);


let doesExist = false
names.forEach(function(name){
    if(name === "jonatan"){
        doesExist = true
    }
})

doesExist = names.indexOf("calle") < 0 ? false : true;
//console.log(doesExist);

console.log(names.reverse());

/*
.filter filtrerar ut specifika värden ur en array, som tex antal tecken:
names.filter(function(name){
    return name.length > 4
})
*/