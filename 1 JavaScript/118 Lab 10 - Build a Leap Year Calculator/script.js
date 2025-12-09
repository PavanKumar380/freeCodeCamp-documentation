function isLeapYear(num) {
  if((num % 4 == 0 && num % 100 != 0) || num % 400 == 0) {
    return `${num} is a leap year.`;
  }
  return `${num} is not a leap year.`;
}

let year = 1984;

let result = isLeapYear(year);
console.log(result);