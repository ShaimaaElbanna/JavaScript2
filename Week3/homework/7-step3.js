'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);
console.log(f1(x));

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here

/*in f1(); we deal with a number that defined with const, which means any operation made on this const will be done on a copy of it inside the function, so it will be changing inside the function only not globally, that's why console.log(x) = 9 but console.log(f1(x)) = 10*/


/*but in if2(); we deal with an object which means that the variable will be changing or affected inside and also outside the function f2(). and you can see it if you console,log (f2(y))*/
