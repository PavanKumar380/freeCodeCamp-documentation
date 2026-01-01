const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const isPal = (txt) => {
  const stripRegex = /\s+|,|!|\.|\-|_|:|\\|\/|\(|\)/g;
  const text = txt.replace(stripRegex, "").toLowerCase();
  if (text === text.split('').reverse().join('')) {
    return true;
  }
  return false;
};

checkButton.addEventListener("click", () => {
  const text = textInput.value;
  if (text === "") {
    alert("Please input a value");
    return;
  }
  result.innerHTML = isPal(text)
    ? `<b>${text}</b> is a palindrome.`
    : `<b>${text}</b> is not a palindrome.`;
  textInput.value = "";
});