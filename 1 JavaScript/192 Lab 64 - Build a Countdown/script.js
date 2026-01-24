function countdown(n) {
  if(n < 1) {
    return [];
  }
  if (n === 1) {
    return n;
  }
  const arr = [n].concat(countdown(n-1));
  return arr;
}