let banner = document.getElementById("enter");
let audio = document.getElementById("stillness");
let response = document.getElementById("response");
let video = document.getElementById("ivideo");
let container = document.getElementById("cont");

audio.loop = true;

banner.onclick = function()
{
  console.log("clicked!");
  banner.style.margin = "0% auto";
  banner.style.fontSize = "40px";
  banner.textContent = "coding fun times: it's (allegedly) fun";
  audio.play();
}

let mute = document.getElementById("mute");
let vol = document.getElementById("vol");

function lowerVolume()
{
  audio.volume -= 0.25;
}

function raiseVolume()
{
  audio.volume += 0.25;
}

mute.onclick = function()
{
  lowerVolume();
}

vol.onclick = function()
{
  raiseVolume();
}

response.onmouseover = function()
{
  console.log("hovering!");
  response.textContent = "click me for video instead"
}

response.onmouseout = function()
{
  console.log("not hovering!");
  response.textContent = "come here if audio isn't your thing"
}

response.onclick = function()
{
  audio.pause();
  ivideo.style.display = "block";
  container.style.opacity = "0";
  response.style.border = "none";
  response.style.height = "0px";
  response.style.opacity = "0";

  setTimeout(function() {response.style.display = "none"; container.style.display = "none"; ivideo.style.marginTop = "5%";}, 150);
}
