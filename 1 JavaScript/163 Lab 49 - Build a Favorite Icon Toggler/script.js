const btns = document.querySelectorAll(".favorite-icon");

function toggleHeart(btn) {
  btn.classList.toggle("filled");
  if (btn.classList.contains("filled")) {
    btn.innerHTML = "&#10084;";
  } else {
    btn.innerHTML = "&#9825;";
  }
}

btns.forEach(btn => {
  btn.addEventListener("click", () => toggleHeart(btn));
});