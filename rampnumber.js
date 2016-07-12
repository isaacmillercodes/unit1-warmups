//A ramp number is a number whose digits from left to right either only rise or stay the same. 1234 is a ramp number as is 1124. 1032 is not.
//Input: A positive integer, n.
//Output: true if the input is a ramp number, false if it is not

function rampCheck(n) {
  if (Number.isInteger(n) === false || n < 0) {
    return false;
  }
  else {
    var nStr = n.toString();
    for (i = 0; i < nStr.length; i++) {
      if (nStr[i] < nStr[i - 1]) {
        return false
      }
    }
  }
  return true;
}

console.log(rampCheck(12345));
console.log(rampCheck(-7));
console.log(rampCheck(4528));
console.log(rampCheck(489));
console.log(rampCheck(1225));
console.log(rampCheck(31));
