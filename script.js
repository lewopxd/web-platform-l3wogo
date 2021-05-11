console.log('hello!')

let box = document.querySelector(".box");
var screenX = window.screen.width * window.devicePixelRatio;
var screenY = window.screen.height * window.devicePixelRatio;
var offsetX = -32.727272;
box.style.transform = "perspective(1000px) rotateY(" + offsetX + "deg)";

window.onmousemove = function (e) {
  let x = -1 * (e.clientX / 4) + offsetX;
  box.style.transform = "perspective(1000px) rotateY(" + x + "deg)";

  var itemP = -x / (screenX / (360 / 32.727272) / 4);

  console.log(Math.round(itemP));

  var im = document.getElementById("im" + Math.round(itemP));
console.log(im);
  
  if(Math.round(itemP)==2){
    playAudio();
    pauseAudio2();
  }else{
    pauseAudio();
     playAudio2();
  }
  
  
  
}
  

var x = document.getElementById("AudioSkinny");

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}


var x2 = document.getElementById("tool");

function playAudio2() {
  x2.play();
}

function pauseAudio2() {
  x2.pause();
}