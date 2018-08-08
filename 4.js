function findFibonacciIndexByLength(num) {
  var fibonacci = [1, 1];
  var i = 1;

  while (String(fibonacci[fibonacci.length -1]).length < num) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i]); 
    i++;
  }
  console.log(fibonacci.length);
}

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74
