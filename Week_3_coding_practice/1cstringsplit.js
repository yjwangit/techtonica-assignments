// Create a function that returns the first 3 letters of a string.
//
// Examples:
//
// first3("Techtonica") --> "Tec"
//
// first3("Baby Yoda") --> "Bab"
//
// * Hint: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)

function first3(string){
  let arr = string.split("",3);
  return arr.join("")// or: arr[0]+arr[1]+arr[2];
}