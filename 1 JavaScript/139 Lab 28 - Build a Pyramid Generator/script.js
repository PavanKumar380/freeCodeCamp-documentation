function pyramid (s, n, down) {
  let pyr = "\n"
  if (down) {
    for (let i = 0 ; i < n ; i++) {
      for (let j = 0 ; j < i ; j++) {
        pyr += " ";
      }
      for (let j = 0 ; j < 2 * (n - i) - 1 ; j++) {
        pyr += s;
      }
      pyr += "\n"
    }
  } else {
    for (let i = 0 ; i < n ; i++) {
      for (let j = 0 ; j < n - i - 1 ; j++) {
        pyr += " ";
      }
      for (let j = 0 ; j < 2 * i + 1 ; j++) {
        pyr += s;
      }
      pyr += "\n"
    }
  }
  return pyr;
}