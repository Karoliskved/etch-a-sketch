let container=document.querySelector(".grid")
const div=document.createElement('div')
div.classList.add('griditem')
for(let j=0; j<16; j++){
    const divrow=document.createElement('div')
    divrow.classList.add('gridRow')
    container.appendChild(divrow)
    for(let i=0; i<16; i++){
        const div=document.createElement('div')
        div.classList.add('griditem')
        divrow.appendChild(div)
        
    }
}