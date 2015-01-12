/*
 *  First Factorial
 *  For this challenge you will be determining
 *  the factorial for a given number.
 */

function FirstFactorial(n) {
  var x = 1;

  for (var i = 1; i <= n; i++) {
    x = x * i;
  }

  return x;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());
