function findElement (arr, fun) {
  for (let ar of arr) {
    if (fun(ar)) {
      return ar;
    }
  }
  return undefined;
}