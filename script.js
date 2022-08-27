let color = 'black';
let size = 0;
const container = document.querySelector('.grid');
const colorContainer = document.querySelector('.colorContainer');
const colorChoices = document.querySelectorAll('.colorSelect');
const body = document.querySelector('body');
colorChoices.forEach((color) => {
  color.addEventListener('click', chooseColor);
});

function chooseColor(event) {
  color = event.target.id;
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
//set color of an individual grid element
function cngColor(event) {
  event.target.style.backgroundColor = color;
}
// add event listener to all grid elements
function changeColor() {
  let gridItems = document.querySelectorAll('.griditem');
  gridItems.forEach((element) => {
    element.addEventListener('mouseover', cngColor);
  });
}
function removeChangeColor() {
  let gridItems = document.querySelectorAll('.griditem');
  gridItems.forEach((element) => {
    element.removeEventListener('mouseover', cngColor);
  });
}

function generateGrid(n) {
  removeAllChildNodes(container);
  const div = document.createElement('div');
  div.classList.add('griditem');
  for (let j = 0; j < n; j++) {
    const divrow = document.createElement('div');
    divrow.classList.add('gridRow');
    container.appendChild(divrow);
    for (let i = 0; i < n; i++) {
      const div = document.createElement('div');
      div.classList.add('griditem');
      divrow.appendChild(div);
    }
  }
  body.addEventListener('mousedown', changeColor);
  body.addEventListener('mouseup', removeChangeColor);
}

const resizeButton = document.querySelector('.resize');
resizeButton.addEventListener('click', () => {
  size = prompt('enter grid size');
  generateGrid(parseInt(size));
});
const wipeButton = document.querySelector('.wipe');
wipeButton.addEventListener('click', () => {
  generateGrid(parseInt(size));
});
