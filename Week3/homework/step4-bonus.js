'use strict';

/*Write a function takes this array ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'] and returns an array
 which only has unique values in it (so it removes the duplicate ones). Make it a 'smart' algorithm 
 that could do it for every array (only strings/number). Try to make it as fast as possible! */



const values = ['a',5,5,7,7,"s","k","s","k", 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
//let soretd = values[5].delete; 
//console.log(soretd)
// Add your function here. Try and come up with a good name for this function

// Replace `yourFunction` with the name of the function you just created
function cleanarr(arr){
    arr.sort()
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === arr[i+1]){
            arr.splice(i,1);
        }
    }
return arr;
}
const uniqueValues = cleanarr(values);
console.log(uniqueValues);


