var docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Please Come Back ;(";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

function changeClassBasedOnCheckbox() {
  const checkboxElement = document.getElementById("myCheckbox");
  const elements = [
    { id: "sidebars", openClass: "sidebars-open", closeClass: "sidebars-close" },
    { id: "toggle", openClass: "toggle-open", closeClass: "toggle-close" },
    { id: "logout", openClass: "logout-open", closeClass: "logout-close" },
    { id: "toggle-icon", openClass: "bx-chevron-left", closeClass: "bx-chevron-right" }
  ];

  elements.forEach(({ id, openClass, closeClass }) => {
    const element = document.getElementById(id);
    element.classList.toggle(openClass, !checkboxElement.checked);
    element.classList.toggle(closeClass, checkboxElement.checked);
  });
}

document.getElementById("myCheckbox").addEventListener("change", changeClassBasedOnCheckbox);