/* function palCheck (input) {
  input.toLowerCase();
  var rev = input.split(" ").reverse().join(" ");
  for (var i = 0; i < input.length; i++) {
    if (rev !== input) {
    return false;
  } else {
    return true;
    }
  }
}
*/

/*function palCheck (input) {
  input.toLowerCase();
  var rev = input.split("").reverse().join("");
  if (rev !== input) {
    return false;
  } else {
    return true;
  }
}
*/

/*Alan's Solution

function palCheck(testPhrase) {
  var lowerCase = testPhrase.toLowerCase()
  var stripped = lowerCase.replace(/ /g, "");
  for (var i = 0; i < (testPhrase.length/2); i++) {
    if (stripped.charAt(i) === stripped.charAt(stripped.length-1-i)) {
    return true;
  } else {
  return false
  }
}
*/

//Austin's Solution
function palCheck(word) {
  word = word.toLowerCase().replace(" ","")
  if(word.split("").reverse().join("") === word) {
  return true;
} else {
  return false;
  }
}

console.log(palCheck ("taco cat"));
