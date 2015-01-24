/*
 *  Division Stringified
 *  For this challenge you will divide two numbers and return them in a certain format.
 *
 *  Using the JavaScript language, have the function DivisionStringified(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas. If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345".
 */
function DivisionStringified(first, second) {
  return ('' + parseInt(first / second, 10)).split('').reverse().map(function(el, i) {
    if (i > 2 && i % 3 === 0) {
      return el + ',';
    }
    else {
      return el;
    }
  }).reverse().join('');
}
