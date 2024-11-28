let squareResolution = 0; 

const resizeButton = document.querySelector("#areaSize"); 
resizeButton.addEventListener("click",()=>{
let newSize = prompt("Insert any new square resolution below 100")
if (newSize<=100 && newSize!=null && newSize>0){
    deleteChild();  
    draw(newSize); 
}
else {
    alert("Please enter a valid number"); 
}

}); 

function deleteChild() {
    const sketchArea = document.querySelector("#sketchArea"); 
    while(sketchArea.firstChild){
        sketchArea.removeChild(sketchArea.firstChild); 
    }

}


function draw(numOfSquares){
const sketchArea = document.querySelector("#sketchArea"); 
var totalSquares = numOfSquares**2; 

console.log(sketchArea.clientHeight);

for (let i=1; i<=totalSquares;i++){
    const newSquare = document.createElement("div"); 
    newSquare.style.height = `${960/numOfSquares}px`; 
    newSquare.style.width = `${960/numOfSquares}px`; 
    newSquare.style.border = "1px solid black"; 
    newSquare.style.boxSizing = "border-box"; 
    newSquare.addEventListener("mouseover",(e)=>{
        let target = e.target; 
        randomColor = Math.round((Math.random()*10**6));  
        target.style.backgroundColor = `#${randomColor}`;
    }); 
    sketchArea.appendChild(newSquare); 
   }
}


