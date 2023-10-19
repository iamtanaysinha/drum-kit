for(var i=0 ;i< document.querySelectorAll(".drum").length;i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttonname= this.innerHTML;

       makesound(buttonname);
       addanimation(buttonname);
    });
}

document.addEventListener("keydown" , function (Event){

    makesound(Event.key); 
    addanimation(Event.key);   
})

function addanimation(temp){
    var anim= document.querySelector("."+temp);

    anim.classList.add("pressed");

    setTimeout(function (){
        anim.classList.remove("pressed");
    },100);
}
   
function makesound(key){

    switch (key) {
        case "w":
             var tom1 = new Audio("public/sounds/tom-1.mp3");
            tom1.play();
            break;
       
        case "a":
                var tom2 = new Audio("public/sounds/tom-2.mp3");
               tom2.play();
               break;
        case "s":
                var tom3 = new Audio("public/sounds/tom-3.mp3");
               tom3.play();
               break;
        case "d":
                var tom4 = new Audio("public/sounds/tom-4.mp3");
               tom4.play();
               break;   
        case "j":
                var crash = new Audio("public/sounds/crash.mp3");
               crash.play();
               break;   
        case "k":
                var kick = new Audio("public/sounds/kick-bass.mp3");
               kick.play();
               break;   
        case "l":
                var snare = new Audio("public/sounds/snare.mp3");
               snare.play();
               break;                                 
        default:
            break;
      }
}