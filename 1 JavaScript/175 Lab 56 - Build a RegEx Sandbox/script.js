const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let flagString = "";
  if (caseInsensitiveFlag.checked) {
    flagString += "i";
  }
  if (globalFlag.checked) {
    flagString += "g";
  }
  return flagString;
}

testButton.addEventListener("click", () => {
  const testStr = stringToTest.textContent;
  if(testStr === "") {
    return;
  }
  const reg = new RegExp("(?<pattern>" + regexPattern.value + ")", getFlags());
  if(testStr.match(reg) === null) {
    testResult.textContent = "no match";
  } else if(globalFlag.checked) {
    testResult.textContent = testStr.match(reg).join(', ');
  } else {
    testResult.textContent = testStr.match(reg)[0];
  }
  stringToTest.innerHTML = testStr.replace(reg, `<span class="highlight">$<pattern></span>`);
});