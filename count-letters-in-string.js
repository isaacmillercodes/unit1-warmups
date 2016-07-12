function countLetter (string, letter) {
  var count = 0;
  string = string.toUpperCase();
  letter = letter.toUpperCase();
  for (var i=0; i < string.length; i++) {
    if (string[i] === letter) {
      count += 1;
    }
  };
  if (count === 0) {
    console.log ("That letter was not found.");
  };
  console.log("That letter appears " + count + " times.");
}

var string = "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.";
var letter = "i";

countLetter(string, letter);
