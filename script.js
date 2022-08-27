let color = 'black';
const container = document.querySelector('.grid');
const colorContainer = document.querySelector('.colorContainer');
const colorChoices = document.querySelectorAll('.colorSelect');
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
function cngColor(event) {
  event.target.style.backgroundColor = color;
}
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
  /*document.querySelector('body').addEventListener('click', () => {
    console.log('test');
  });*/
  document.querySelector('body').addEventListener('mousedown', changeColor);
  document.querySelector('body').addEventListener('mouseup', removeChangeColor);
}

let button = document.querySelector('.resize');
button.addEventListener('click', () => {
  test = prompt('enter grid size');
  generateGrid(parseInt(test));
});
