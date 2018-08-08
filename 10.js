function century(year) {
  var centuryNum = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNum--;
  }

function centurySuffix(centuryNum) {
  var last;

  if (catchWithTh(centuryNum % 100)) {
    return 'th';
  }

  last = centuryNum % 10;
  switch (last) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}
  
  console.log(centuryNum + centurySuffix(centuryNum));
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

