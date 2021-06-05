const body = document.querySelector("body");
const button = document.querySelector(".button");
const colors = [
  "#0000FF",
  "#00FF00",
  "#FF0000",
  "#FFFFFF",
  "#FFFF00",
  "#000000",
  "#800080",
  "#FF5733",
  "#00649D",
];

const changer = () => {
  const choosenColor = parseInt(Math.random() * colors.length);
  const currentColor = colors[choosenColor];
  body.style.backgroundColor = currentColor;
  const p = document.getElementById("colorName");
  p.innerHTML = currentColor;
  p.style.color = "black";
  if (currentColor === "black") {
    p.style.color = "white";
  }
};

button.addEventListener("click", changer);
