'use strict';

const numbers = [1, 2, 3, 4,5,6,7,8,9];

// Add your code here
let doubledNumber = numbers.filter(i => i % 2 !== 0).map(i=>  i * 2)

console.log("The doubled numbers are " , doubledNumber)

