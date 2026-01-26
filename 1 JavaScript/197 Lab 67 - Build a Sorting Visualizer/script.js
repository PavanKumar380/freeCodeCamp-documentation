const genBtn = document.getElementById("generate-btn");
const startArr = document.getElementById("starting-array");
const arrCont = document.getElementById("array-container");
const sortBtn = document.getElementById("sort-btn");

const generateElement = () => Math.ceil(100 * Math.random());

let array = [];
let len = 0;
let arraySorted = false;

const generateArray = () => [
  generateElement(),
  generateElement(),
  generateElement(),
  generateElement(),
  generateElement()
];

const generateContainer = () => document.createElement("div");

function fillArrContainer(el, arr) {
  let str = "";
  arr.forEach(ar => {
    str += `<span>${ar}</span>`
  });
  el.innerHTML = str;
}

const isOrdered = (n1, n2) => n1 <= n2;

function swapElements(arr, ind) {
  if(!isOrdered(arr[ind], arr[ind + 1])) {
    [arr[ind], arr[ind + 1]] = [arr[ind + 1], arr[ind]];
    return true;
  }
  return false;
}

function highlightCurrentEls(el, ind) {
  const ch = [
    el.children[ind],
    el.children[ind + 1]
  ];

  ch.forEach(c => {
    c.style.border = 'dashed red 2px';
  });
}

function clearArrCont() {
  const divs = document.querySelectorAll('div:not([id])');
  divs.forEach(div => div.remove());
}

genBtn.addEventListener("click", () => {
  clearArrCont();
  sortBtn.style.display = "block";
  array = generateArray();
  len = array.length;
  fillArrContainer(startArr, array);
  arraySorted = false;
});

function bubbleSort() {
  sortBtn.style.display = "none";
  let first = true;
  let swapped = true;
  while(swapped) {
    swapped = false;
    array.forEach((el, ind) => {
      if(first) {
        first = false;
        highlightCurrentEls(startArr, ind);
        if(swapElements(array, ind)) {
          swapped = true;
        }
      } else if(ind < len - 1) {
        const div = arrCont.appendChild(generateContainer());
        fillArrContainer(div, array);
        highlightCurrentEls(div, ind);
        if(swapElements(array, ind)) {
          swapped = true;
        }
      }
    });
  }
  const sortedDiv = arrCont.appendChild(generateContainer());
  fillArrContainer(sortedDiv, array);
  sortedDiv.style.border = '4px solid darkgreen';
}

sortBtn.addEventListener("click", () => {
  if(!arraySorted) {
    bubbleSort();
    arraySorted = true;
  }
});