function cleanUp(string) {
  var newString = '';
  var resultString = '';
  var i;

  for (i = 0; i < string.length; i++) {
    if (string[i].match(/^[0-9a-z ]+$/)) {
      newString += string[i];
    }
  }
  for (i = 0; i < newString.length; i++) {
    if (newString[i] === ' ' && newString[i - 1] === ' ') {
      continue;
    } else {
      resultString += newString[i];
    }
  }
  console.log(resultString);
}
cleanUp("---what's my +*& line?");  
