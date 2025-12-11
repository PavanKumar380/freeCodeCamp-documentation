function mutation (arr) {
  const w1 = arr[0].toLowerCase();
  const w2 = arr[1].toLowerCase();
  console.log(w1);
  console.log(w2);
  for (let l of w2) {
    if(w1.includes(l)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}