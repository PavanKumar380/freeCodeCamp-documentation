function frankenSplice (arr1, arr2, ind) {
  const n1 = arr1.length, n2 = arr2.length;
  let arr3 = [];
  if (n2 === 0) {
    for (let ar of arr1) {
      arr3.push(ar);
    }
  }
  for (let i = 0 ; i < n2 ; i++) {
    if (i === ind) {
      for (let ar of arr1) {
        arr3.push(ar);
      }
    }
    arr3.push(arr2[i]);
  }
  return arr3;
}