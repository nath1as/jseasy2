function crunch(string) {
  var newString = '';
  for (i in string) {
    if (string[i] !== string[i-1]) {
      newString += string[i];
    }
  }
  console.log(newString);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
