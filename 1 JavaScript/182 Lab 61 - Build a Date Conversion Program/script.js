const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
  const formattedDate = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
  return `Formatted Date (MM/DD/YYYY): ${formattedDate}`;
}
console.log(formatDateMMDDYYYY(currentDate));

function formatDateLong(date) {
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric"
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return `Formatted Date (Month Day, Year): ${formattedDate}`;
}
console.log(formatDateLong(currentDate));