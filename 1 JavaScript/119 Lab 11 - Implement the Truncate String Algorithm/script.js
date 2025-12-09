function truncateString(str, num) {
  if (str.length > num) {
    str = str.slice(0, num);
    str += "...";
  }
  return str;
}