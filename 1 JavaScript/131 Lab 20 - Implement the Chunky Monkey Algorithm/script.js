function chunkArrayInGroups (arr, n) {
  let mainArr = [];
  while (arr.length > 0) {
    let secArr = [];
    for (let i = 0 ; i < n ; i++) {
      if(arr.length > 0) {
        secArr.push(arr.shift());
      }
    }
    mainArr.push(secArr);
  }
  return mainArr;
}