function firstValue(myArray){
    return myArray[0];
}

console.log(firstValue( [2, 3, 4, 5, 6] ))
// Ska returnera 2

console.log(firstValue( [7, 2, 1, 12, 32] ))
//Ska returnera 7

console.log(firstValue( ["a", "b", "c", "d", "e"] ))
//Ska returnera "a"

console.log(firstValue( [{name:"John"}, {name:"Jane"}, {name:"Chris"}] ))
// Sa returnera {name: "John"}