/* Implement an algorithm to determine if a string has all unique characters. What if you
can not use additional data structures? */

function uniqueChars(str) {
  // str = str.split('');
  // var storage = {};
  // for (var i = 0; i < str.length; i++) {
  //   if (storage[str[i]] === undefined) {
  //     storage[str[i]] = str[i];
  //   } else {
  //     return false;
  //   }
  // }
  // return true;

  var helperFunction = function(string, comparChar) {
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
      if (string[i] === comparChar) {
        counter++;
      }
    }
    return counter === 2 ? true : false;
  }

  for (var j = 0; j < str.length; j++) {
    if (helperFunction(str, str[j])) {
      return true;
    }
  }
  return false;
}
