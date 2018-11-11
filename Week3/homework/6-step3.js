'use strict';


// add your solution here, or add a comment on how you would tackle this problem
/*How would you print all the items of an array with 3 dimensions? 
How about with K dimensions? What if you didn't know how deep the array was nested?
 (You don't have to write code for this but think about it.)
*/
//My Answer
/* what I can do is create a function that creates a new empty array and then
 for each element in the old array it will check if the element is not an array 
 then it will send it to the new array if the element an array it will step into 
 it and do the same, and keep lobbying till no more element left */ 

 const arr2d = [[1, 2], [3, 4], [5, 6]];
 const arr3d = [[1, 2], [3, 4], [5, [5,4]]];
 const arr4d = [[1, 2], [3, 4], [5, [5,[4,5]]]];

 
 let deepFlatten = function (arr){
     let newarr = [];

     for (let i = 0; i < arr.length; i++){
        if ( Array.isArray(arr[i])){
            newarr =  newarr.concat(deepFlatten(arr[i])); // this line means that this function will keep calling it self as long as one of the elements is an array
        }else{
            newarr.push(arr[i])
        }
     }
return newarr;
 }
 console.log(deepFlatten(arr4d));
