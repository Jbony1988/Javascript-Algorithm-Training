// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  // If n is less than zero return negative one and then multiply by reversed string
  // if n is more than zero return positive 1 and then multiply by reveresed string
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
