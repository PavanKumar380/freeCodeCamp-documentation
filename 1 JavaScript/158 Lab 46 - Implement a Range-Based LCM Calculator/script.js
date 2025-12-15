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
  const arr = getPrimeArray(num);
  const fact = [];
  for (const ar of arr) {
    while (num % ar === 0 && num > 1) {
      fact.push(ar);
      num /= ar;
    }
  }
  return fact;
}

function getLongestRun(arrs, n) {
  let maxRun = 0;
  for (const arr of arrs) {
    let run = 0;
    for (const ar of arr) {
      if(ar === n) {
        run++;
      }
    }
    maxRun = Math.max(run, maxRun);
  }
  return maxRun;
}

function smallestCommons(arr) {
  const a = Math.max(2, Math.min(arr[0], arr[1]));
  const b = Math.max(arr[0], arr[1]);
  if(b === 2) {
    return 2;
  }
  const pFactors = [];
  for (let i = a ; i <= b ; i++) {
    pFactors.push(getPrimeFactors(i));
  }
  const pArray = getPrimeArray(b);
  let LCD = 1;
  for (const p of pArray) {
    LCD *= Math.pow(p,getLongestRun(pFactors, p));
  }
  return LCD;
}