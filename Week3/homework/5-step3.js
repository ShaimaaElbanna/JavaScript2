'use strict';
// paste your freeCodeCamp solutions in here
  //Modify function multiplyAll so that it multiplies the product variable by each 
  //number in the sub-arrays of arr
  function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
        for (let i = 0; i < arr.length; i++){
            for (let s = 0; s < arr[i].length; s++){
                product = arr[i][s] * product;
            }
        }

        return product;

    // Only change code above this line
  }
  
  // Modify values below to test your code
 console.log( multiplyAll([[1,2],[3,4],[5,6,7]]));
 console.log( multiplyAll([[1,2],[1,1],[1,5,1]]));