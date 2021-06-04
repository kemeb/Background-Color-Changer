const body = document.querySelector("body");
const button = document.querySelector(".button");
const colors = ["blue", "green", "red", "white", "yellow", "black", "purple"];

button.addEventListener("click", backgroundColor);
function backgroundColor() {
  const choosenColor = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[choosenColor];
}
