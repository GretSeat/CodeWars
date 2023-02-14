/*
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.

function booleanToString(b) {
  //your code here
}
*/

function booleanToString(b) {
  if (b == true) {
    return "true";
  } else {
    return "false";
  }
}
// refactored
const booleanToString = (b) => (b == true ? true : false);
