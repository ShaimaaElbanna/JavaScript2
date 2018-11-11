  'use strict';
//3.1 We saw that we can pass functions as arguments to other functions.
// Your task is to write a function that takes another function as an argument and runs it.
  
function foo(func) {
    // What to do here? return the argument if it is a function
    return func();
  }

  function bar() {
    console.log('Hello, I am bar!');
  }

  foo(bar);
