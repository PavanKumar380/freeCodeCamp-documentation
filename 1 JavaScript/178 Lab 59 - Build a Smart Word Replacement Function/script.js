function myReplace(str, wrd, repWrd) {
  repWrd = repWrd.toLowerCase();
  const wrdCap = wrd.charAt(0).toUpperCase() + wrd.slice(1);
  const repWrdCap = repWrd.charAt(0).toUpperCase() + repWrd.slice(1);
  const reg = new RegExp("(?<word>" + wrd + ")", "g");
  const regCap = new RegExp("(?<word>" + wrdCap + ")", "g");
  return str.replace(regCap, repWrdCap).replace(reg, repWrd);
}