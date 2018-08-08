function twice(num) {
  var digits = String(num).length;

  if (digits % 2 == 0) {
    if (String(num).slice(0, digits/2) === String(num).slice(digits/2)) {
      console.log(num);
    } else {
      console.log(2 * num);
      }
    } else {
      console.log(2 * num);
    } 
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
