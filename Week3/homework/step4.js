'use strict';

// Add your code here



function createBase(x){
    return function creat2(y){
        return x + y;
    }
}

const addSix = createBase(6);

addSix(10); // returns 16
addSix(21); // returns 27
console.log(addSix(10))
console.log(addSix(50))
console.log(addSix(30))