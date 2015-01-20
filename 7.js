/*
 *  SimpleSymbols
 *  For this challenge you will be determining whether or not certain characters are in correct positions.
 *
 *  Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.
 */
function SimpleSymbols(str) {
  function isLetter(c) { return c.toUpperCase() != c.toLowerCase(); }
  return str.split('').filter(function(el, i) {
    return str[i - 1] == '+' && isLetter(el) && str[i + 1] == '+';
  }).length === str.split('').filter(isLetter).length;
}


console.log(SimpleSymbols("+d+=3=+s+")); // => "true"
console.log(SimpleSymbols("f++d+")); // => "false"
