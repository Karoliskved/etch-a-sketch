let container=document.querySelector(".grid")
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function cngColor(event){

    event.target.style.backgroundColor="black"
}
function changeColor(){
    let gridItems=document.querySelectorAll(".griditem");
    gridItems.forEach(element => {
    element.addEventListener('mouseover', cngColor);
})
}

function generateGrid(n){
    removeAllChildNodes(container)
    const div=document.createElement('div')
    div.classList.add('griditem')
    for(let j=0; j<n; j++){
    const divrow=document.createElement('div')
    divrow.classList.add('gridRow')
    container.appendChild(divrow)
    for(let i=0; i<n; i++){
        const div=document.createElement('div')
        div.classList.add('griditem')
        divrow.appendChild(div)
    }
}
    changeColor()
}


let button=document.querySelector(".resize")
button.addEventListener('click', ()=>{
    test=prompt("enter grid size");
    generateGrid(parseInt(test));

})

