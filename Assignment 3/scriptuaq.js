//script for uaq

let crowd1 = document.getElementById("Crowd1");
let crowd2 = document.getElementById("Crowd2");
let flag = document.getElementById("Flag");
let filter = document.getElementById("UAQFilter");

flag.onclick = () =>
{
  console.log("clicked!");
  filter.style.opacity = '1';
  crowd1.style.opacity = '0';
  crowd2.style.opacity = '1';
}
