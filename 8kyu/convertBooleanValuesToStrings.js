// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// OLD CODE:
/*
function boolToWord(bool) {
  //...
  if (bool === true) {
    return "Yes";
  } else {
    return "No";
  }
}
*/

// Needs Refactoring. Can be made shorter. Ternary.
// NEW CODE:
const boolToWord = (bool) => (bool ? "Yes" : "No");
