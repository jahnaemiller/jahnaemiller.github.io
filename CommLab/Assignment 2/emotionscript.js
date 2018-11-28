let paused=true;
let theAudioElement;
theAudioElement = document.getElementById('theAudio')

let sad = document.getElementById('sad');
let str = document.getElementById('stressed');
let hap = document.getElementById('happy');

let button = document.getElementById("backarrow");

sad.onmouseover = function() {SadmouseOver()};
sad.onmouseout = function() {SadmouseOut()};

function SadmouseOver() {
    document.getElementById('sadimg').src = "sadblue.png";
    document.body.style.background= "#708E9E";
}

function SadmouseOut() {
    document.getElementById('sadimg').src = "sad.png";
}

hap.onmouseover = function() {HapmouseOver()};
hap.onmouseout = function() {HapmouseOut()};

function HapmouseOver() {
    document.getElementById('hapimg').src = "happyyel.png";
    document.body.style.background = "#F9F990";
}

function HapmouseOut() {
    document.getElementById('hapimg').src = "happy.png";
}

str.onmouseover = function() {StrmouseOver()};
function StrmouseOver()
{
    document.body.style.background= '#464845';
}

function enlargehappy()
{
  document.getElementById('happy').setAttribute("class","enlarge smooth")
  document.getElementById('sad').setAttribute("class","disappear smooth")
  document.getElementById('stressed').setAttribute("class","disappear smooth")
  document.getElementById("emotionspage").href="emotions.html"
  if (paused) theAudioElement.play();
  else theAudioElement.pause();
  paused = !paused
}

function enlargesad()
{
  document.getElementById('sad').setAttribute("class","enlarge smooth")
  document.getElementById('happy').setAttribute("class","disappear smooth")
  document.getElementById('stressed').setAttribute("class","disappear smooth")
  document.getElementById("emotionspage").href="emotions.html"

  theAudioElement=document.getElementById('theAudio2')
  if (paused) theAudioElement.play();
  else theAudioElement.pause();

  paused = !paused
}

function enlargestressed(){
  document.getElementById('stressed').setAttribute("class","enlarge smooth")
  document.getElementById('sad').setAttribute("class","disappear smooth")
  document.getElementById('happy').setAttribute("class","disappear smooth")
  document.getElementById("emotionspage").href="emotions.html"
  theAudioElement = document.getElementById('theAudio3')
  if (paused) theAudioElement.play();
  else theAudioElement.pause();
  paused = !paused
}

function chBackColor(color)
{
document.body.style.background=color;
}

function mainpage(){
  document.getElementById('emotionspage').src="sound.html";
}

button.onclick = () =>
{
  mainpage();
  console.log("clicked!");
}
