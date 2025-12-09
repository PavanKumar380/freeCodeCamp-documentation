function confirmEnding(str1, str2) {
  const l1 = str1.length;
  const l2 = str2.length;
  return str1.includes(str2, l1 - l2);
}