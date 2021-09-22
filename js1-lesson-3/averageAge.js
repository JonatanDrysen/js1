const ages = [21, 32, 53, 40, 12, 76, 62];

let sumOfAges = 0;

for(let i = 0; i < ages.length; i++) {
    sumOfAges += ages[i];
}

const averageAge = sumOfAges / ages.length;
const roundedAverageAge = Math.round(averageAge);

console.log(`average age is ${roundedAverageAge} years`);