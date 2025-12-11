const num = 5;

function factorialCalculator (n) {
  let fact = n;
  while (n > 2) {
    fact *= --n;
  }
  return fact;
}

const factorial = factorialCalculator(num);

const resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);