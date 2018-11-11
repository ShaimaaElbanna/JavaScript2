'use strict';
/*3.2 You must write a function that takes 4 arguments.
A start value
An end value
A callback to call if the number is divisible by 3
A callback to use if the number is divisible by 5
The function should first generate an array containing values from start value to
 end value (inclusive).

Then the function should take the newly created array and iterate over it,
 and calling the first callback if the array value is divisible by 3.

The function should call the second callback if the array value is divisible by 5.

Both functions should be called if the array value is divisible by both 3 and 5.

*/

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  // Add your code here
//step 1: create a new function that starts from the start value to the end value, note stopIndex + 1 to include the last element
  for (var i = startIndex; i < stopIndex + 1; i++) {
    values.push(i);
  }
  //console.log( values); to test the array
  
  //step 2: 
  values.map(function checknumbers(i){
      if ((i % 3 == 0) && (i % 5 == 0)){
        console.log( i + " is divisible by");
        threeCallback();
        fiveCallback()
      } else if (i % 5 == 0){
        console.log( i + " is divisible by" + " 5 only");
      } else if (i % 3 == 0){
        console.log( i + " is divisible by" + " 3 only");
      } 
       })
}
let  sayThree = function threeCallback(){
    console .log ("3")
  }
let  sayFive = function fiveCallback(){
    console .log ("5")
  }

threeFive(10, 15, sayThree, sayFive);
