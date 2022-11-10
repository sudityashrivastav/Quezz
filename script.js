let orgNumb =Math.trunc(Math.random()*100);
let playerNum = document.getElementById("playerNumb");
let check = document.getElementById("button");
let result = document.getElementById("result");
let turns = document.getElementById("turns");
let btn = document.getElementById("button");

playerNum.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
     btn.click();
    }
  });
let chances = 10;

check.onclick = function checking(){
  chances--; 
  turns.innerHTML = "Attempts Left : " + chances;
  if(playerNum.value==""){
    result.innerHTML="Please add any number";
    chances ++;
  }
  
   else if(chances < 1){
    turns.innerHTML = "Game Over! The Number was " + orgNumb;
  }
  else if(playerNum.value > orgNumb){
    result.innerHTML="Your Number is Greater"
    
  }
  else if(playerNum.value < orgNumb){
    result.innerHTML="Your Number is Less"
  }
  
  else{
    result.innerHTML = "Congratulations Your Guess is Correct 🔥🔥🔥";
    turns.style.opacity = "0"
  }
}
//Check Original Number here
//console.log(orgNumb);
