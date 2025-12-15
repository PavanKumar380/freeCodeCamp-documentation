function destroyer (arr, ...args) {
  const destArr = [];
  for (const ar of arr) {
    if(args.includes(ar)) {
      continue;
    }
    destArr.push(ar);
  }
  return destArr;
}