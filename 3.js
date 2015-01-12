/*
 *  Longest Word
 *  For this challenge you will be determining the largest word in a string.
 */

function LongestWord(sen) {
  return sen.split(/\s+/)
            .sort(function(a, b) { return a.length < b.length; })[0];
}
  
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());
