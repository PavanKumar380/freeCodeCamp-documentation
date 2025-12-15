function isPrime (n) {
  for (let i = 2 ; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes (num) {
  if (num < 2) {
    return 0;
  }
  const arr = [2];
  for (let i = 3 ; i <= num ; i++) {
    if(isPrime(i)) {
      arr.push(i);
    }
  }
  return arr.reduce((acc, n) => acc + n, 0);
}