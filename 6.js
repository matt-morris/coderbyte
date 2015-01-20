/*
 *  Letter Capitalize
 *  For this challenge you will be capitalizing certain characters in a string.
 *
 *  Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.
 */
function LetterCapitalize(str) {
  return str.split(' ').map(function(word) {
    return word[0].toUpperCase() + word.slice(1, word.length);
  }).join(' ');
}
