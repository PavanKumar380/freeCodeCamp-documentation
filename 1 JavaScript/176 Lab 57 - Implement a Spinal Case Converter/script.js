function spinalCase(str) {
  const regReplace = /\s|_/g;
  const regInsert = /[a-z][A-Z]/g;
  str = str.replaceAll(regReplace, "-");
  if(regInsert === null) {
    return str;
  }
  const strLowArr=str.toLowerCase().split('');
  const regArr = str.matchAll(regInsert).toArray();
  let i = 0;
  regArr.forEach(ar => {
    i++;
    return strLowArr.splice(ar.index + i, 0, '-');
  });
  return strLowArr.join('');
}