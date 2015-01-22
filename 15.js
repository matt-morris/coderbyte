/*
 *  Palindrome
 *  For this challenge you will determine if a string is written the same way forward and backwards.
 *
 *  Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. 
 */
function Palindrome(str) {
 return str.split(/\s?/).join('') === str.split(/\s?/).reverse().join('');
}
