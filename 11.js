/*
 *  AB Check
 *  For this challenge you will determine if two characters are separated a specific way in the string.
 *
 *  Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.
 *
 */
 function ABCheck(str) {
   if (str.match(/a.{3}b/)) {
     return true;
   } else {
     return false;
   }
 }
