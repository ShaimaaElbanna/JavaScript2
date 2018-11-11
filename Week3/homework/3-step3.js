'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // add your code here
  var newstr = "";
  for (var i = 0; i < num; num--){
    newstr += str

  }
  return newstr;
}

console.log( repeatStringNumTimesWithFor("abc", 3));

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
var newstr = "";
  while (num > 0){
    newstr += str;
    num--
  }
  // add your code here
  return newstr;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // add your code here
  var newstr = "";
  do{
    newstr += str;
    num--
  } while (num > 0)
  return newstr;
}

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));
