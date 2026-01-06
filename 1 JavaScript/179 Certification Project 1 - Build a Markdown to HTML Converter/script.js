const markdownInput = document.getElementById("markdown-input");
const rawOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

const reg = [
  {
    exp: /(?<!.)(^|\s+)#\s(?<rep>.+)/gm,
    tag: "h1"
  },
  {
    exp: /(?<!.)(^|\s+)##\s(?<rep>.+)/gm,
    tag: "h2"
  },
  {
    exp: /(?<!.)(^|\s+)###\s(?<rep>.+)/gm,
    tag: "h3"
  },
  {
    exp: /\*\*(?<rep>.+)\*\*/g,
    tag: "strong"
  },
  {
    exp: /__(?<rep>.+)__/g,
    tag: "strong"
  },
  {
    exp: /\*(?<rep>.+)\*/g,
    tag: "em"
  },
  {
    exp: /_(?<rep>.+)_/g,
    tag: "em"
  },
  {
    exp: /!\[(?<alt>.*)\]\((?<src>.+)\)/g,
    tag: "img"
  },
  {
    exp: /\[(?<linkText>.*)\]\((?<href>.+)\)/g,
    tag: "a"
  },
  {
    exp: /(?<!.)(^|\s+)>\s(?<rep>.+)/gm,
    tag: "blockquote"
  }
];

function convTags(str, rgx) {
  switch(rgx.tag) {
    case 'img': return str.replaceAll(rgx.exp, '<img src="$<src>" alt="$<alt>">');
    case 'a' : return str.replaceAll(rgx.exp, '<a href="$<href>">$<linkText></a>');
    default : return str.replaceAll(rgx.exp, `<${rgx.tag}>` + "$<rep>" + `</${rgx.tag}>`);
  }
}

function convertMarkdown() {
  const input = markdownInput.value;
  return reg.reduce((out, rg) => convTags(out, rg), input);
}

markdownInput.addEventListener("input", () => {
  const output = convertMarkdown();
  rawOutput.textContent = output;
  preview.innerHTML = output;
});