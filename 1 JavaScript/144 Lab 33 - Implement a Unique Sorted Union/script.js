function uniteUnique (...arrs) {
  let unArr = [];
  for (const arr of arrs) {
    for (const ar of arr) {
      if (unArr.includes(ar)) {
        continue;
      }
      unArr.push(ar);
    }
  }
  return unArr;
}