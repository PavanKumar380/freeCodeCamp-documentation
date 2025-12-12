function pairElement (str) {
  let res = [];
  for (const ch of str) {
    let pair = [ch];
    switch (ch) {
      case "A": pair.push("T");
      break;
      case "T": pair.push("A");
      break;
      case "C": pair.push("G");
      break;
      default: pair.push("C");
      break;
    }
    res.push(pair);
  }
  return res;
}