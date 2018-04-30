/*function lasers(angle, speed, x, y, xSpeed, ySpeed)
 {
 this.angle = angle;
 this.speed = speed;
 this.xSpeed = speed * cos(angle);
 this.ySpeed = speed * cos(angle);
 this.x = width/2 + 20 * cos(angle);
 this.y = height/2 + 20 * sin(angle);
 
 //draws lasers
 this.update = function() {
 x = x + xSpeed;
 y = y + ySpeed;
 
 rect(x, y, 1, 5);
 pushMatrix();
 rotate(angle);
 popMatrix();
 
 //checks if offscreen
 if (x < 0 || x > width || y < 0 || y > height)
 {
 return true;
 } else
 {
 return false;
 }
 }
 }*/

var stars = [];
var glow = 0;
var growFactor = 0.02;
var currentTime = 0;
  
function getRandomInt(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function star()
{
  this.x = getRandomInt(30, width);
  this.y = getRandomInt(30, height);
}


function preload()
{

  icon1 = loadImage("ico1.png");
  icon2 = loadImage("ico2.png");
  icon3 = loadImage("ico3.png");
  icon4 = loadImage("ico4.png");
  icon5 = loadImage("ico5.png");
}

function setup() {

  var currentTime = 0;

  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  var i;

  for (i = 0; i < 70; i++) //generate seventy random positions for the stars
  {
    entry = new star();
    stars.push(entry);
  }
}

function draw() {

  fill(255, 255, 255);

  var i;
  
  for (i = 0; i < 70; i++)
  {
    ellipse(stars[i].x, stars[i].y, 3 + glow, 3 + glow);
  }

  if ((millis() - currentTime) < 2000)
  {
    console.log("check!");
    glow += growFactor;
  }
  
  if (millis() - currentTime >= 2500)
  {
    currentTime = millis();
    console.log("current time = ", currentTime);
    growFactor = -growFactor;
  }
 
  

  image(icon1, width/2 - 100, 50);
  image(icon2, 100, height/2 - 75);
  image(icon3, width - 300, height/2 - 75);
  image(icon4, width/3 - 125, height - 150);
  image(icon5, 2 * width/3 - 100, height - 150);
  
  console.log(glow);
  
}