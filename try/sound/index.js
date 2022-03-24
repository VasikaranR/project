

document.querySelectorAll("button")[0].addEventListener("click",clickButton1);
function clickButton1(){
    var audio1= new Audio('atmosphericDrum.mp3');
    audio1.play();
}
document.querySelectorAll("button")[1].addEventListener("click",clickButton2);
function clickButton2(){
    var audio2= new Audio('echoDrum.mp3');
    audio2.play();
}
document.querySelectorAll("button")[2].addEventListener("click",clickButton3);
function clickButton3(){
    var audio3= new Audio('tribaldrum.mp3');
    audio3.play();
    
}
