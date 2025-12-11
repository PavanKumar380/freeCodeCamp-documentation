function fearNotLetter (str) {
  for (let i = 0 ; i < str.length - 1 ; i++) {
    const a = str.charCodeAt(i);
    const b = str.charCodeAt(i+1);
    if (b - a > 1) {
      return String.fromCharCode(a+1);
    }
  }
  return;
}