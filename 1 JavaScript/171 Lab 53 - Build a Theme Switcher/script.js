const switchButton = document.getElementById("theme-switcher-button");
const themeMenu = document.getElementById("theme-dropdown");
const body = document.querySelector("body");
const stat = document.getElementById("status");

switchButton.addEventListener("click", () => {
  if(themeMenu.hidden) {
    switchButton.setAttribute("aria-expanded", "true");
    themeMenu.hidden = false;
  } else {
    switchButton.setAttribute("aria-expanded", "false");
    themeMenu.hidden = true;
  }
});

const menuItems = document.querySelectorAll('[role="menuitem"]');

const themes = [
  {
    name: "light",
    message: "Rise and shine! Light Theme selected!"
  },
  {
    name: "dark",
    message: "Soft on the eyes... Dark Theme selected!"
  },
  {
    name: "royal",
    message: "As you command! Royal Theme selected!"
  },
  {
    name: "oak",
    message: "A mighty choice! Oak Theme selected!"
  }
];

const getMessage = (themeName) => themes.filter(theme => theme.name === themeName)[0].message;

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    body.classList = [];
    body.classList.add(item.id);
    switchButton.classList = [];
    switchButton.classList.add(item.id);
    switchButton.setAttribute("aria-expanded", "false");
    themeMenu.hidden = true;
    stat.textContent = getMessage(item.id.substring(6));
  });
});