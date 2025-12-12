function getFib (n) {
  if(!n) {
    return 0;
  }
  let f1 = 0, f2 = 1;
  let f3 = 1;
  for (let i = 1 ; i < n ; i++) {
    f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
  }
  return f3;
}

function sumFibs (n) {
  let sum = 0;
  for (let i = 1, fib = getFib(i) ; fib <= n ; i++, fib = getFib(i)) {
    if (fib % 2 === 1) {
      sum += fib;
    }
  }
  return sum;
}