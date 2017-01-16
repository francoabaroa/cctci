/* Implement an algorithm to determine if a string has all unique characters. What if you
can not use additional data structures? */

function uniqueChars(str) {
  str = str.split('');
  var storage = {};
  for (var i = 0; i < str.length; i++) {
    if (storage[str[i]] === undefined) {
      storage[str[i]] = str[i];
    } else {
      return false;
    }
  }
  return true;
}

console.log(uniqueChars('helordo'));