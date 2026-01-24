function permuteString(str, pre = "", res = []) {
  if(str.length === 0) {
    res.push(pre);
    return res;
  } else {
    str.split("").forEach((ch, ind, arr) => {
      const newArr = [...arr];
      newArr.splice(ind, 1);
      const newStr = newArr.join("");
      const p = pre + ch;
      permuteString(newStr, p, res);
    });
  }
  const resSet = new Set(res);
  res = [...resSet];
  return res;
}