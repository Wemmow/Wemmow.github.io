document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

let onDrugs = confirm("Do you want the website to go on drugs?");

function Drugged() {
  let elements = document.querySelectorAll("html *"); // Select all elements within the html

  if (onDrugs == true) {
    elements.forEach((element) => {
      element.style.background = "linear-gradient(to top, #008aff, #00ffe7)";
      element.style.animation = "animate 5s linear infinite";
    });
  }
}

Drugged();
