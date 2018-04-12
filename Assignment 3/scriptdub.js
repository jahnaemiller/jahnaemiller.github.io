//script for Dubai

let bubbles2 = document.getElementById("Bubbles2");
let bubbles3 = document.getElementById("Bubbles3");
let flag = document.getElementById("Flag");
let filter = document.getElementById("DubaiFilter");

flag.onclick = () =>
{
  console.log("clicked!");
  filter.style.opacity = '1';
  bubbles2.style.opacity = '1';
  bubbles3.style.opacity = '1';
}
