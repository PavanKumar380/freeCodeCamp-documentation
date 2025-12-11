function repeatStringNumTimes (str, n) {
  let rep = "";
  while (n > 0) {
    rep += str;
    n--;
  }
  return rep;
}