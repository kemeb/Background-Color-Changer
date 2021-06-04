const body = document.querySelector("body");
const button = document.querySelector(".button");
const colors = [
  "blue",
  "green",
  "red",
  "white",
  "yellow",
  "black",
  "purple",
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
