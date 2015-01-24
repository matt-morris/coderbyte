/*
 *  Distinct List
 *  For this challenge you will remove duplicate elements from an array.
 *
 *  Using the JavaScript language, have the function DistinctList(arr) take the array of numbers stored in arr and determine the total number of duplicate entries. For example if the input is [1, 2, 2, 2, 3] then your program should output 2 because there are two duplicates of one of the elements.
 */
function DistinctList(arr) {
  var result = [];
  var count = 0;
  arr.map(function(el) {
    if (result.indexOf(el) === -1) {
      result.push(el);
    }
    else {
      count++;
    }
  });
  return count;
}
