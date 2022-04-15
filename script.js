// document.querySelector("button").addEventListener("click", ()=>{
//     alert("clicked");
// })

function playSound(butt){

    switch(butt){
        case "w":
            var crash=new Audio("sounds/crash.mp3");       
            crash.play();
            return true;
            break;
        case "a":
            var kick=new Audio("sounds/kick-bass.mp3");       
            kick.play();
            return true;
            break;
        case "s":
            var snare=new Audio("sounds/snare.mp3");       
            snare.play();
            return true;
            break;
        case "d":
            var tom1=new Audio("sounds/tom-1.mp3");       
            tom1.play();
            return true;
            break;
        case "j":
            var tom2=new Audio("sounds/tom-2.mp3");       
            tom2.play();
            return true;
            break;
        case "k":
            var tom3=new Audio("sounds/tom-3.mp3");       
            tom3.play();
            return true;
            break;
        case "l":
            var tom4=new Audio("sounds/tom-4.mp3");       
            tom4.play();
            return true;
            break;
       
        default:
            return false;
    }
}
function animationStuff(char){
    document.querySelector("."+char).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+char).classList.remove("pressed");
    },150);
}
var all=document.querySelectorAll(".drum");
for(var i=0;i<all.length;i++){
    all[i].addEventListener("click",function (){
        // var audio=new Audio("sounds/tom-1.mp3");       
        // audio.play();
        playSound(this.innerHTML);
        animationStuff(this.innerHTML);
    })
}
document.addEventListener("keydown",function(event){
    if(playSound(event.key))animationStuff(event.key);
});

