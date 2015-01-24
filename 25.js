/*
 *  Number Addition
 *  For this challenge you will traverse a string searching for all the numbers and then you will add them up.
 *
 *  Using the JavaScript language, have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol.
 */
function NumberAddition(str) {
  return str.match(/\d+/g).reduce(function(current, previous) {
    return parseInt(current, 10) + parseInt(previous, 10);
  }, 0);
}
