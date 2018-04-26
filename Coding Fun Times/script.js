let banner = document.getElementById("enter");
let audio = document.getElementById("stillness");
let response = document.getElementById("response");

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

mute.onclick = function()
{
  audio.pause();
}

vol.onclick = function()
{
  audio.play();
}

audio.onended = function()
{
  audio.loop();
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
  window.location.href = "https://www.youtube.com/watch?v=LB871SVYMhI";
}
