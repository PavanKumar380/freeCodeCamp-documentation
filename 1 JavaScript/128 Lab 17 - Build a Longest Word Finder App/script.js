function findLongestWordLength (sentence) {
  if (sentence.trim() === " ") {
    return 0;
  }
  const words = sentence.trim().split(" ");
  let max = 1;
  for (const word of words) {
    max = Math.max(max, word.length);
  }
  return max;
}