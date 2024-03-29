// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   let reversed = "";
//   reversed = str
//     .split("")
//     .reverse("")
//     .join("");
//   if (reversed === str) {
//     return true;
//   } else if (reversed !== str) {
//     return false;
//   }
// }

// function palindrome(str) {
//   let rvrs = "";

//   for (let char of str) {
//     rvrs = char + rvrs;
//   }
//   return str === rvrs;
// }

// Less efficent
function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
