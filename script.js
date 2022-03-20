// Image animation

let images = ["docs/assets/slide1.png", "docs/assets/slide2.png"];

let index = 0;
const imgElement = document.querySelector("#mainPhoto");

function change() {
  imgElement.src = images[index];
  index > 0 ? (index = 0) : index++;
}

window.onload = function () {
  setInterval(change, 4000);
};

// Reel section

function getElement(string) {
  return document.getElementById(string);
}

let eventsButtons = [
  getElement("events-button"),
  getElement("small-events-button"),
];

let businessButtons = [
  getElement("business-button"),
  getElement("small-business-button"),
];

let educationButtons = [
  getElement("education-button"),
  getElement("small-education-button"),
];

let eventsInfo = [
  getElement("events-text"),
  getElement("events-video"),
  getElement("small-events-text"),
  getElement("small-events-video"),
];

let businessInfo = [
  getElement("business-text"),
  getElement("business-video"),
  getElement("small-business-text"),
  getElement("small-business-video"),
];
let educationInfo = [
  getElement("education-text"),
  getElement("education-video"),
  getElement("small-education-text"),
  getElement("small-education-video"),
];

function events() {
  for (let i = 0; i < eventsButtons.length; i++) {
    eventsButtons[i].classList.add("button-active");
    businessButtons[i].classList.remove("button-active");
    educationButtons[i].classList.remove("button-active");
  }

  for (let i = 0; i < eventsInfo.length; i++) {
    eventsInfo[i].setAttribute("style", "display: block");
    businessInfo[i].setAttribute("style", "display: none");
    educationInfo[i].setAttribute("style", "display: none");
  }
}
function business() {
  for (let i = 0; i < eventsButtons.length; i++) {
    eventsButtons[i].classList.remove("button-active");
    businessButtons[i].classList.add("button-active");
    educationButtons[i].classList.remove("button-active");
  }

  for (let i = 0; i < businessInfo.length; i++) {
    eventsInfo[i].setAttribute("style", "display: none");
    businessInfo[i].setAttribute("style", "display: block");
    educationInfo[i].setAttribute("style", "display: none");
  }
}
function education() {
  for (let i = 0; i < eventsButtons.length; i++) {
    eventsButtons[i].classList.remove("button-active");
    businessButtons[i].classList.remove("button-active");
    educationButtons[i].classList.add("button-active");
  }

  for (let i = 0; i < educationInfo.length; i++) {
    eventsInfo[i].setAttribute("style", "display: none");
    businessInfo[i].setAttribute("style", "display: none");
    educationInfo[i].setAttribute("style", "display: block");
  }
}
