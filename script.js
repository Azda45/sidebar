var docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Please Come Back ;(";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

function changeClassBasedOnCheckbox() {
  var checkboxElement = document.getElementById("myCheckbox");
  var sidebar = document.getElementById("sidebars");
  var toggle = document.getElementById("toggle");

  if (checkboxElement.checked) {
    // sidebar
    sidebar.classList.remove("sidebars-open");
    sidebar.classList.add("sidebars-close");
    // toggle
    toggle.classList.remove("toggle-open");
    toggle.classList.add("toggle-close");
  } else {
    // sidebar
    sidebar.classList.remove("sidebars-close");
    sidebar.classList.add("sidebars-open");
    // toggle
    toggle.classList.remove("toggle-close");
    toggle.classList.add("toggle-open");
  }
}

document.getElementById("myCheckbox").addEventListener("change", changeClassBasedOnCheckbox);