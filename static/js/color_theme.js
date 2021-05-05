let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) { 
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) { 
    // Change color-theme on page and save theme information in cookies
  if (mode == "light") {
    document.getElementById("theme-style").href = "styles/style.css";
  } else if (mode == "dark") {
    document.getElementById("theme-style").href = "styles/dark-mode.css";
  } else if (mode == "blue") {
    document.getElementById("theme-style").href = "styles/blue-mode.css";
  } else if (mode == "green") {
    document.getElementById("theme-style").href = "styles/green-mode.css";
  }
  localStorage.setItem('theme', mode);
}
