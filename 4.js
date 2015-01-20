/*
 *  Letter Changes
 *  Description - For this challenge you will be manipulating characters in a string based off their positions in the alphabet.
 */
function LetterChanges(str) {
  return str.split('')
            .map(function(c) {
              if (c.toUpperCase() != c.toLowerCase()) {
                c = String.fromCharCode(c.charCodeAt(0) + 1);
              }
              if (['a', 'e', 'i', 'o', 'u'].indexOf(c) > -1) {
                c = c.toUpperCase();
              }
              return c;
            }).join('');
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
// LetterChanges(readline());

[
  "hello world",
  "sentence",
  "coderbyte",
  "beautiful^",
  "oxford",
  "this long cake@&",
  "a b c dee",
  "a confusing /:sentence:/[ this is not!!!!!!!~"
].map(function(str) { console.log(LetterChanges(str)); });
