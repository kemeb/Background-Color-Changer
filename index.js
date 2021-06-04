const body = document.querySelector("body");
const button = document.querySelector(".button");
const colors = ["blue", "green", "red", "white", "yellow", "black", "purple"];

const changer = () => {
  const choosenColor = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[choosenColor];
};

button.addEventListener("click", changer);
