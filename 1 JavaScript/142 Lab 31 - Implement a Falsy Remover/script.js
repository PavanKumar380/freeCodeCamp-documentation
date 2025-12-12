function bouncer (arr) {
  let trueArr = [];
  for (let ar of arr) {
    if(ar) {
      trueArr.push(ar);
    }
  }
  return trueArr;
}