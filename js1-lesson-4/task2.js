function lastValue(myArray){
    let lastElement = myArray.slice(-1);
    return lastElement;
}

console.log(lastValue( [2, 3, 4, 5, 6] ))
// Ska returnera 6

console.log(lastValue( [7, 2, 1, 12, 32] ))
//Ska returnera 32

console.log(lastValue( ["a", "b", "c", "d", "e"] ))
//Ska returnera "e"

console.log(lastValue( [{name:"John"}, {name:"Jane"}, {name:"Chris"}] ))
// Sa returnera {name: "Chris"}