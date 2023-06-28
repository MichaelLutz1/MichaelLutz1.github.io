import "../main.css";
// import { renderScene } from "./js/waterDrops.js";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

// renderScene(document);

const name = document.getElementById("vanta-bg");
const typingText = document.querySelector("#typing-text");
const navBar = document.querySelector("#nav-bar");

FOG({
  el: name,
  THREE,
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  highlightColor: 0x707070,
  midtoneColor: 0x434343,
  lowlightColor: 0x0,
  baseColor: 0x0,
  blurFactor: 0.6,
});

document.addEventListener("DOMContentLoaded", () => {
  typeText(typingText, 200, "Scallywag", 1000);
  const loadingScreen = document.querySelector("#loader");
  loadingScreen.style.display = "none";
});

function typeText(element, speed, str, delay) {
  const chars = str.split("");
  let i = 0;
  element.textContent = "";
  const interval = setInterval(() => {
    if (element.textContent.length < chars.length) {
      element.textContent += chars[i];
      i++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        deleteText(element, speed - 100, str, delay);
      }, delay);
    }
  }, speed);
}
function deleteText(element, speed, str, delay) {
  let chars = str.split("");
  const interval = setInterval(() => {
    if (element.textContent.length > 0) {
      element.textContent = chars.slice(0, -1).join("");
      chars = chars.slice(0, -1);
    } else {
      clearInterval(interval);
      setTimeout(() => {
        typeText(element, speed + 100, str, delay);
      }, delay);
    }
  }, speed);
}

function debounce(callback, delay) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
}

window.addEventListener(
  "scroll",
  debounce(function () {
    if (window.scrollY > 0) {
      navBar.classList.add("bg-main", "backdrop-blur-md", "bg-opacity-95");
    } else {
      navBar.classList.remove("bg-main", "backdrop-blur-md", "bg-opacity-95");
    }
  }, 50)
);
