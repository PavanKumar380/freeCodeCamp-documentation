localStorage.removeItem("bookmarks");

function isBookmark(item) {
  return Object.keys(item).length === 3 && item.hasOwnProperty("name") && item.hasOwnProperty("category") && item.hasOwnProperty("url");
}

function parseJson(json_string) {
  let json_object = null;

  try {
    json_object = JSON.parse(json_string);
  } catch(e) {
    return null;
  }

  return json_object;
}

function getBookmarks() {
  const item = parseJson(localStorage.getItem("bookmarks"));
  if(!Array.isArray(item)) {
    return [];
  } else {
    return item.filter(it => isBookmark(it));
  }
}

const mainSection = document.getElementById("main-section");
const cat = document.getElementById("category-dropdown");
const viewCatBtn = document.getElementById("view-category-button");
const addBmBtn = document.getElementById("add-bookmark-button");

const catNameArr = document.querySelectorAll(".category-name");

const formSection = document.getElementById("form-section");
const bmName = document.getElementById("name");
const bmUrl = document.getElementById("url");
const closeFormBtn = document.getElementById("close-form-button");
const addBmBtnForm = document.getElementById("add-bookmark-button-form");

const bmListSection = document.getElementById("bookmark-list-section");
const catList = document.getElementById("category-list");
const closeListBtn = document.getElementById("close-list-button");
const delBmBtn = document.getElementById("delete-bookmark-button");

function displayOrCloseForm() {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

function displayOrHideCategory() {
  mainSection.classList.toggle("hidden");
  bmListSection.classList.toggle("hidden");
}

closeFormBtn.addEventListener("click", displayOrCloseForm);

addBmBtn.addEventListener("click", () => {
  catNameArr.forEach(ct => ct.innerText = cat.value);
  displayOrCloseForm();
});

addBmBtnForm.addEventListener("click", () => {
  if(!bmName.value.trim()) {
    alert("Please provide a valid name.");
    return;
  }
  if(!bmUrl.value.trim()) {
    alert("Please provide a valid url.");
    return;
  }
  const barr = getBookmarks();
  barr.push({
    name: bmName.value,
    category: cat.value,
    url: bmUrl.value
  });
  localStorage.setItem("bookmarks", JSON.stringify(barr));
  bmName.value = "";
  bmUrl.value = "";
  displayOrCloseForm();
});

function updateCategories() {
  catNameArr.forEach(ct => ct.innerText = cat.value);
  const barr = getBookmarks().filter(bm => bm.category === cat.value);
  let str = "";
  if(barr.length === 0) {
    catList.innerHTML = "<p>No Bookmarks Found</p>";
  } else {
    barr.forEach(bm => {
      str+= `
        <input id="${bm.name}" type="radio" name="bookmarks" value="${bm.name}">
        <label for="${bm.name}"><a href="${bm.url}">${bm.name}</a></label>
      `;
    });
    catList.innerHTML = str;
  }
}

viewCatBtn.addEventListener("click", () => {
  updateCategories();
  displayOrHideCategory();
});

closeListBtn.addEventListener("click", displayOrHideCategory);

delBmBtn.addEventListener("click", () => {
  const checkedBm = document.querySelector('input[name="bookmarks"]:checked').value;
  const barr = getBookmarks();
  const newBarr = barr.filter(bm => bm.category !== cat.value || bm.name !== checkedBm);
  localStorage.setItem("bookmarks", JSON.stringify(newBarr));
  updateCategories();
});