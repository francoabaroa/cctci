/* Write a method to decide if two strings are anagrams or not. */

function anagramTester(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}
