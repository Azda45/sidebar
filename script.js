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
    { id: "toggle-icon", openClass: "bxs-chevron-left", closeClass: "bxs-chevron-right" },
    { id: "link1", openClass: "link1-open", closeClass: "link1-close" },
    { id: "link2", openClass: "link2-open", closeClass: "link2-close" },
    { id: "link3", openClass: "link3-open", closeClass: "link3-close" },
    { id: "link4", openClass: "link4-open", closeClass: "link4-close" },
    { id: "link5", openClass: "link5-open", closeClass: "link5-close" },
    { id: "text1", openClass: "text", closeClass: "text-close" },
    { id: "text2", openClass: "text", closeClass: "text-close" },
    { id: "text3", openClass: "text", closeClass: "text-close" },
    { id: "text4", openClass: "text", closeClass: "text-close" },
    { id: "text5", openClass: "text", closeClass: "text-close" },
  ];

  elements.forEach(({ id, openClass, closeClass }) => {
    const element = document.getElementById(id);
    element.classList.toggle(openClass, !checkboxElement.checked);
    element.classList.toggle(closeClass, checkboxElement.checked);
  });
}

document.getElementById("myCheckbox").addEventListener("change", changeClassBasedOnCheckbox);