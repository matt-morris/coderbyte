/*
 *  Letter Count I
 *  For this challenge you will determine which word has the greatest number of repeated letters.
 *
 *  Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 
 */
function LetterCountI(str) {
  var globalMax = 1;
  var answer = -1;
  str.split(/\s/).map(function(word) {
    var max = 0;
    word.split('').map(function(c) {
      var current = word.match(new RegExp(c, 'g')).length;
      if (current > max) { max = current; }
    });
    if (max > globalMax) {
      globalMax = max;
      answer = word;
    }
  });
  return answer;
}
