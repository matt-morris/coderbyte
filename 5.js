/*
 *  Simple Adding
 *  For this challenge you will be adding up all the numbers from 1 to a certain argument.
 */
function SimpleAdding(num) {
  var output = 0;
  for (var i = 0; i <= num; i++) {
    output += i;
  }
  return output;
}
