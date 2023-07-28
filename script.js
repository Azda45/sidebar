function changeClassBasedOnCheckbox() {
  var checkboxElement = document.getElementById("myCheckbox");
  var divElement = document.getElementById("container");

  if (checkboxElement.checked) {
    divElement.classList.remove("container-red");
    divElement.classList.remove("container-red");
    divElement.classList.remove("container-red");
    divElement.classList.add("container-black");
    divElement.classList.add("container-black");
    divElement.classList.add("container-black");
  } else {
    divElement.classList.remove("container-black");
    divElement.classList.remove("container-black");
    divElement.classList.remove("container-black");
    divElement.classList.add("container-red");
    divElement.classList.add("container-red");
    divElement.classList.add("container-red");
  }
}

document.getElementById("myCheckbox").addEventListener("change", changeClassBasedOnCheckbox);