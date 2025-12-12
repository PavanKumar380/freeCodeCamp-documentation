function titleCase (str) {
  str = str.trim();
  let tCase = str[0].toUpperCase();
  let flag = 0;
  for (let i = 1 ; i < str.length ; i++) {
    if (flag) {
      tCase += str[i].toUpperCase();
    } else {
      tCase += str[i].toLowerCase();
    }
    flag = 0;
    if (str[i] === " ") {
      flag = 1;
    }
  }
  return tCase;
}