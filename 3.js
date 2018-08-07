function stringy(num) {
  var string = '';
  var swtch = true;
  var i;
  for (i = 1; i <= num; i++) {
     if (swtch) {
      string += '1';
      swtch = false;
      } else {
      string += '0';
      swtch = true;
    }
  }
  console.log(string);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
