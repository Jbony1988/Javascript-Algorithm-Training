// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   const arr = str
//     .split("")
//     .reverse("")
//     .join("");
//   return arr;
// }

// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// function reverse(str) {
//   let rvrs = "";

//   loop through each character and store it in the char variable
//   and then add it at the begining of the rvrs variable
//   for (let char of str) {
//     rvrs = char + rvrs;
//   }

//   return rvrs;
// }

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;
