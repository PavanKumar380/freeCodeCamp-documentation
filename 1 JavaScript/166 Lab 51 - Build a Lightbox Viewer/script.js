const gal = document.querySelectorAll(".gallery-item");

const lBox = document.querySelector(".lightbox");

function closeBox() {
  lBox.style.display = "none";
}

function showLightBox(g) {
  const paintURL = g.getAttribute("src").slice(0, -14) + ".jpg";
  const lImg = document.getElementById("lightbox-image");
  lImg.setAttribute("src", paintURL);
  lBox.style.display = "flex";
  const close = document.getElementById("close-btn");
  close.addEventListener("click", () => closeBox());
  lBox.addEventListener("click", () => closeBox());
}

gal.forEach(gItem => gItem.addEventListener("click", () => showLightBox(gItem)));