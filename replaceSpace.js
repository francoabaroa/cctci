/* Write a method to replace all spaces in a string with ‘%20’. */

function replaceSpaces(string) {
  var stringy = string.split('');

  for (var i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) === 32) {
      stringy[i] = '%20';
    }
  }
  return stringy.join('');
}

console.log(replaceSpaces('hello world bro how are you'));