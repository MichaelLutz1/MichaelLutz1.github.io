const hellos = [
  "Hola!",
  "Bonjour!",
  "Namaste!",
  "Nǐn hǎo!",
  "Guten tag!",
  "Ciao!",
  "Anyoung!",
  "Olá!",
  "Privet!",
  "G'day!",
  "Shalom!",
  "Hello!",
];

const hello = document.getElementById("hello");
let i = 0;
setInterval(flipIn, 5000);
function flipIn() {
  i++;
  if (i === hellos.length) {
    i = 0;
  }
  hello.classList.add("flip-out");
  setTimeout(() => {
    hello.innerHTML = hellos[i];
    hello.classList.add("flip-in");
    hello.classList.remove("flip-out");
  }, 500);
  hello.classList.remove("flip-in");
}

const toggleSwitch = document.querySelector("#darkmode-checkbox");

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("theme", "dark");
  } else {
    document.documentElement.setAttribute("theme", "white");
  }
}

toggleSwitch.addEventListener("change", switchTheme);
