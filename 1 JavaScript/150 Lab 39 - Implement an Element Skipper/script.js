function dropElements (arr, func) {
  if (func(arr[0])) {
    return arr;
  }
  while (arr.length > 0) {
    if (!func(arr[0])) {
      arr.shift();
    } else {
      return arr;
    }
  }
  return arr;
}