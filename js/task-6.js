function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createEl = document.querySelector('#controls button[data-create]');
const destroyEl = document.querySelector('#controls button[data-destroy]');
const input = document.querySelector('input');
const divBox = document.querySelector('#boxes');

createEl.addEventListener('click', createClick);

function createClick(event) {

  if (input.value > 0 && input.value < 101) {     
    createBoxes(input.value);
    input.value = '';
  } else {
    alert('Amount is not correct'); 
  };
}

let boxsize = '';
let newDiv = '';

function createBoxes(amount) {
  boxes.innerHTML = '';
  boxsize = 30;
  for (let i = 1; i <= amount; i += 1) {
    newDiv = `<div style='width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}'></div>`;
    boxes.insertAdjacentHTML("beforeend", newDiv);
    boxsize += 10;
  };
}

destroyEl.addEventListener('click', destroyBoxes);
function destroyBoxes(event) {
  divBox.innerHTML = '';
}