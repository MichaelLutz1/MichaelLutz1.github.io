import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

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

const names = [
  "Pirate",
  "Scarecrow",
  "Lion",
  "Tin Man",
  "Dawg",
  "The Wicked Witch of the West",
];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    typeText(typingText, 200, names[0], 1000);
  }, 2500);

  const loadingScreen = document.querySelector("#loader");
  loadingScreen.style.display = "none";

  const hiddenItems = document.querySelectorAll(".hide");
  hiddenItems.forEach((el) => observer.observe(el));

  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.classList.add("active-item");
  });

  const mainName = document.querySelector(".main-name");
  mainName.classList.add("main-name-active");

  const introContainer = document.querySelector(".intro-container");
  introContainer.classList.add("intro-container-active");

  const arrow = document.querySelector(".down-arrow");
  arrow.classList.add("down-arrow-active");
});

let titleIndex = 0;
function typeText(element, speed, str, delay) {
  if (titleIndex >= names.length) {
    titleIndex = 0;
  }
  str = names[titleIndex];
  titleIndex++;
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
function handleScroll() {
  if (window.scrollY > 0) {
    navBar.classList.add("bg-main", "backdrop-blur-md", "bg-opacity-90");
  } else {
    navBar.classList.remove("bg-main", "backdrop-blur-md", "bg-opacity-90");
  }
}
function elementInView(e) {
  const rect = e.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener("scroll", debounce(handleScroll, 25));
