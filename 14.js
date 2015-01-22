/*
 *  Ex Oh
 *  For this challenge you will traverse a string and determine if there is an equal amount of certain characters.
 *
 *  Using the JavaScript language, have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.
 */
function ExOh(str) {
 return (str.match(/x/g) || []).length === (str.match(/o/g) || []).length;
}
