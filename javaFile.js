
const resizeButton = document.querySelector("button"); 
resizeButton.addEventListener("click",()=>{

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
        target.style.backgroundColor ="black";
    }); 
    sketchArea.appendChild(newSquare); 
   }
}


