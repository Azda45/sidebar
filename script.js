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
  var logout = document.getElementById("logout")
  var icon = document.getElementById("toggle-icon")

  if (checkboxElement.checked) {
    // sidebar
    sidebar.classList.remove("sidebars-open");
    sidebar.classList.add("sidebars-close");
    // toggle
    toggle.classList.remove("toggle-open");
    toggle.classList.add("toggle-close");
    // logout
    logout.classList.remove("logout-open")
    logout.classList.add("logout-close")
    // icon
    icon.classList.remove("bx-chevron-left")
    icon.classList.add("bx-chevron-right")
  } else {
    // sidebar
    sidebar.classList.remove("sidebars-close");
    sidebar.classList.add("sidebars-open");
    // toggle
    toggle.classList.remove("toggle-close");
    toggle.classList.add("toggle-open");
        // logout
        logout.classList.remove("logout-close")
        logout.classList.add("logout-open")
        // icon
        icon.classList.remove("bx-chevron-right")
        icon.classList.add("bx-chevron-left")
  }
}

document.getElementById("myCheckbox").addEventListener("change", changeClassBasedOnCheckbox);