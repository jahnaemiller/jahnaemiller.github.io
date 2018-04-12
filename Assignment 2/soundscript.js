/*let theAudioElement
console.log('hello world!');
function init() {
  theAudioElement = document.getElementById('theAudio');
  theAudioElement.play();
  console.log(5+5);
}*/
/*7393BA*/
let paused = true
let theAudioElement
let theButton
theAudioElement = document.getElementById('theAudio')
theButton = document.getElementById('playbutton')

theButton.onclick = () =>{
  if (paused)
  {
    theAudioElement.play();
    document.getElementById('image').src="pause.png";
  }

  else
  {
    theAudioElement.pause();
    document.getElementById('image').src="play.png";
  }

  paused = !paused
  document.getElementById('playbutton').style.border='none';
}
theAudioElement.addEventListener('ended', function(){
  window.location.href = "emotions.html";
})

function changeimage(){
if(paused) document.getElementById('image').src="pause.png";
else document.getElementById('image').src="play.png";
 /*if (document.getElementById('image').src=="play.png")
 {
   document.getElementById('image').src="pause.png"
 }
 if (document.getElementById('image').src=="pause.png")
 {
   document.getElementById('image').src="play.png "
 }*/
}
