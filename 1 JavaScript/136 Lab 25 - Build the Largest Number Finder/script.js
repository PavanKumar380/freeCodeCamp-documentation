function largest (arr) {
  let max = arr[0];
  for (let ar of arr) {
    max = ar > max ? ar : max;
  }
  return max;
}

function largestOfAll (arr) {
  let lArr = [];
  for (let ar of arr) {
    lArr.push(largest(ar));
  }
  return lArr;
}