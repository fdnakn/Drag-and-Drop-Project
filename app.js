const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");


fill.addEventListener("dragstart",dragStart);
fill.addEventListener("dragend",dragEnd);

for (const empty of empties) {
    empty.addEventListener("dragover",dragOver);
    empty.addEventListener("dragenter",dragEnter);
    empty.addEventListener("dragleave",dragLeave);
    empty.addEventListener("drop",dragDrop);
}

function dragStart(){
    this.classList.add("hold");

    setTimeout(()=>this.classList="invisible",0);
}
function dragEnd(){
    this.classList.add("fill");
}
function dragOver(e){
    e.preventDefault();
    this.classList.add("hovered");
}
function dragEnter(){
   
    
}
function dragLeave(){
    this.classList.remove("hovered");
}
function dragDrop(){
    this.className = 'empty'
    this.append(fill)
}