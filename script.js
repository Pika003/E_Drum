
//Detecting Button Press

// the dom method here will give all the buttons with drum class
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// here we are using anonymous function so that we use one function for all drum clicks
for (var i = 0; i < numberOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    makeAnimation(buttonInnerHTML);

});

}

//Detecting Keyboard Press

document.addEventListener('keydown',function(event){

  makeSound(event.key);
  makeAnimation(event.key);

});

function makeSound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio('assets/audio/audio_1.mp3');
      tom1.play();
      break;

    case "a":
    var tom2 = new Audio('assets/audio/audio_2.mp3');
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio('assets/audio/audio_3.mp3');
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio('assets/audio/audio_4.mp3');
    tom4.play();
    break;

    case "j":
    var crash = new Audio('assets/audio/audio_5.mp3');
    crash.play();
    break;

    case "k":
    var kick = new Audio('assets/audio/audio_6.mp3');
    kick.play();
    break;

    case "l":
    var snare = new Audio('assets/audio/audio_7.mp3');
    snare.play();
    break;

    default: console.log();

  }

}

function makeAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
