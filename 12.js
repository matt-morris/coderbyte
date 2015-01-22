/*
 *  Vowel Count
 *  For this challenge you will be counting all the vowels in a string.
 *
 *  Using the JavaScript language, have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge.
 */
function VowelCount(str) {
  return str.split('').filter(function(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) > -1;
  }).length;
}
