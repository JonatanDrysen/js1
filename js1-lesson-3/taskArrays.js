const arr1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
const arr2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
const arr3 = [23, 43, 12, 65, 34, 100, 1000];

let sum1 = 0;
let sum2 = 0;

for(let i = 0; i < arr1.length; i++){
    sum1 += arr1[i];
}

for(let i = 0; i < arr2.length; i++){
    sum2 += arr2[i];
}

let sumOfBothArrays = sum1 + sum2;

console.log(`Sum of array 1 is ${sum1}, sum of array 2 is ${sum2}. 
Sum of both arrays is ${sumOfBothArrays}.`);