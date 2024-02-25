function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const bodyBackground = document.querySelector("body");
const colorName = document.querySelector(".color");

btn.addEventListener("click", handleClick);

function handleClick(event) {
  const randomColor = getRandomHexColor();
  colorName.textContent = randomColor;
  bodyBackground.style.backgroundColor = randomColor;
}