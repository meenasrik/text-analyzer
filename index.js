function analyzeText(text) {
  var output = "";

  output += characterCount(text) + " characters ";
  output += wordCount(text) + " words ";
  output += spacesCount(text) + " spaces";
  return "Analysis: " + output;
}

function characterCount(text) {
  return text.length;
}

function wordCount(text) {
  return text.split(' ').length;
}

function spacesCount(text) {
  // wordCount(text) - 1 will not account for more than a single space in between
  var lenCharacters = text.length;
  var lenWithoutSpaces = text.split(" ").join('').length;
  return lenCharacters - lenWithoutSpaces;
}

var sampleText = "hey how are you doing?";

if (process.env.NODE_ENV !== "test") {
  console.log(analyzeText(sampleText));
}
