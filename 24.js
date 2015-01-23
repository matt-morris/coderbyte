/*
 *  Swap Case
 *  For this challenge you will be swapping the case of each character in the string.
 *
 *  Using the JavaScript language, have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.
 */
function SwapCase(str) {
  return str.split('').map(function(c) {
    if (c.toUpperCase() === c) {
      return c.toLowerCase();
    } else {
      return c.toUpperCase();
    }
  }).join('');
}
