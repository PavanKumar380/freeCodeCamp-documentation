function isPrime (n) {
  for (let i = 2 ; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function getPrimeArray(n) {
  const arr = [2];
  for (let i = 3 ; i <= n ; i++) {
    if(isPrime(i)) {
      arr.push(i);
    }
  }
  return arr;
}

function getPrimeFactors(num) {
  return getPrimeArray(num).reduce((fact, ar) => {
    while (num % ar === 0 && num > 1) {
      fact.push(ar);
      num /= ar;
    }
    return fact;
  }, []);
}

const getLongestRun = (arrs, n) => arrs.reduce((run, arr) => Math.max(arr.filter(ar => ar === n).length, run), 0);

function smallestCommons(arr) {
  const a = Math.max(2, Math.min(arr[0], arr[1]));
  const b = Math.max(arr[0], arr[1]);
  if(a === b) {
    return b;
  }
  if(b - a === 1) {
    return a * b;
  }
  const pFactors = [];
  for (let i = a ; i <= b ; i++) {
    pFactors.push(getPrimeFactors(i));
  }
  return getPrimeArray(b).reduce((LCD, p) => LCD *= Math.pow(p,getLongestRun(pFactors, p)), 1);
}