const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", () => {
  let count = textInput.value.length;
  charCount.innerHTML = `Character Count: ${count}/50`;
  if (count >= 50) {
    charCount.style = "color: red";
    textInput.value = textInput.value.slice(0, 50);
    count = textInput.value.length;
    charCount.innerHTML = `Character Count: ${count}/50`;
  } else {
    charCount.style = "color: darkslategray";
  }
});