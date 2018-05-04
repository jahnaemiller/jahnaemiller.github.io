var stars = [];
var glow = 0;
var growFactor = 0.02;
var currentTime = 0;
var angle;
var restartTimer = 0;


var icon1;
var icon2;
var icon3;
var icon4;
var icon5;

var icon1_x;
var icon1_y;

var icon2_x;
var icon2_y;

var icon3_x;
var icon3_y;

var icon4_x;
var icon4_y;

var icon5_x;
var icon5_y;

var info1;
var info2;
var info3;
var info4;
var info5;

var lasersList = [];
var numLasers = 0;
var timeSinceLastLaser = 0;

var windowOpen = false;
var iconHit = false;

function infoPopUp(x)
{
  windowOpen = true;

  if (x == 1)
  {
    info1.show();
  }

  if (x == 2)
  {
    info2.show();
  }

  if (x == 3)
  {
    info3.show();
  }

  if (x == 4)
  {
    info4.show();
  }

  if (x == 5)
  {
    info5.show();
  }
}


function lasers(_angle, _speed)
{
  this.angle = _angle;
  this.speed = _speed;

  this.speedVector = p5.Vector.fromAngle(angle);
  this.speedVector.mult(5);
  console.log(this.speedVector);
  this.xSpeed = this.speedVector.x;
  this.ySpeed = this.speedVector.y;
  this.x = width/2 + 20 * cos(this.angle);
  this.y = height/2 + 20 * sin(this.angle);

  //draws lasers
  this.update = function()
  {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
  }

  this.render = function()
  {
    stroke(255, 0, 0);
    fill(255, 0, 0);
    /*ellipse(this.x, this.y, 3, 3);
    push();
    rotate(this.angle);
    pop();*/

    rect(this.x, this.y, 3, 3);
    push();
    rotate(angle);
    pop();

    stroke(255);
    fill(255);
  }

  this.offscreen = function()
  {
    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  this.checkCollisionIco1 = function()
  {
    if (this.x >= icon1_x && this.x <= icon1_x + icon1.width && this.y >= icon1_y && this.y <= icon1_y + icon1.height)
    {
      console.log("icon 1 hit!");
      return true;
    }
    else
    {
      return false;
    }
  }

  this.checkCollisionIco2 = function()
  {
    if (this.x >= icon2_x && this.x <= icon2_x + icon2.width && this.y >= icon2_y && this.y <= icon2_y + icon2.height)
    {
      console.log("icon 2 hit!");
      return true;
    }
    else
    {
      return false;
    }
  }

  this.checkCollisionIco3 = function()
  {
    if (this.x >= icon3_x && this.x <= icon3_x + icon3.width && this.y >= icon3_y && this.y <= icon3_y + icon3.height)
    {
      console.log("icon 3 hit!");
      return true;
    }
    else
    {
      return false;
    }
  }

  this.checkCollisionIco4 = function()
  {
    if (this. x >= icon4_x && this.x <= icon4_x + icon4.width && this.y >= icon4_y && this.y <= icon4_y + icon4.height)
    {
      console.log("icon 4 hit!");
      return true;
    }
    else
    {
      return false;
    }
  }

  this.checkCollisionIco5 = function()
  {
    if (this.x >= icon5_x && this.x <= icon5_x + icon5.width && this.y >= icon5_y && this.y <= icon5_y + icon5.height)
    {
      console.log("icon 5 hit!");
      return true;
    }
    else
    {
      return false;
    }
  }
}

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

  info1 = createDiv('Our first project -- a website. Click this box to see it. Click anywhere else to continue playing.');
  info2 = createDiv('Our second project -- a sound piece. Click this box to see it. Click anywhere else to continue playing.');
  info3 = createDiv('Our third project -- a comic. Click this box to see it. Click anywhere else to continue playing.');
  info4 = createDiv('Our fourth project -- a video. Click this box to see it. Click anywhere else to continue playing.');
  info5 = createDiv('Our fifth project -- an animation. Click this box to see it. Click anywhere else to continue playing.');

  var currentTime = 0;

  createCanvas(windowWidth, windowHeight);
  textFont("VT323");

  icon1_x = width/2 - 100;
  icon1_y = 50;

  icon2_x = 100;
  icon2_y = height/2 - 75;

  icon3_x = width - 300;
  icon3_y = height/2 - 75;

  icon4_x =  width/3 - 125;
  icon4_y = height - 150;

  icon5_x = 2 * width/3 - 100;
  icon5_y = height - 150;

  info1.hide();
  info2.hide();
  info3.hide();
  info4.hide();
  info5.hide();

  info1.position(icon1_x - 250, icon1_y - icon1.width/8);
  info2.position(icon2_x, icon2_y - 160);
  info3.position(icon3_x, icon3_y - 160);
  info4.position(icon4_x, icon4_y - 160);
  info5.position(icon5_x, icon5_y - 160);

  info1.style("font-family: 'VT323', monospace");
  info1.style("background-color: rgba(255, 255, 255, 0.5)");
  info1.style("border-radius: 2px");
  info1.style("color: white");
  info1.style("font-size: 22px");
  info1.style("cursor: pointer");
  info1.style("padding: 0.5%");
  info1.size(200, 125);

  info2.style("font-family: 'VT323', monospace");
  info2.style("background-color: rgba(255, 255, 255, 0.5)");
  info2.style("border-radius: 2px");
  info2.style("color: white");
  info2.style("font-size: 22px");
  info2.style("cursor: pointer");
  info2.style("padding: 0.5%");
  info2.size(200, 125);

  info3.style("font-family: 'VT323', monospace");
  info3.style("background-color: rgba(255, 255, 255, 0.5)");
  info3.style("border-radius: 2px");
  info3.style("color: white");
  info3.style("font-size: 22px");
  info3.style("cursor: pointer");
  info3.style("padding: 0.5%");
  info3.size(200, 125);

  info4.style("font-family: 'VT323', monospace");
  info4.style("background-color: rgba(255, 255, 255, 0.5)");
  info4.style("border-radius: 2px");
  info4.style("color: white");
  info4.style("font-size: 22px");
  info4.style("cursor: pointer");
  info4.style("padding: 0.5%");
  info4.size(200, 125);

  info5.style("font-family: 'VT323', monospace");
  info5.style("background-color: rgba(255, 255, 255, 0.5)");
  info5.style("border-radius: 2px");
  info5.style("color: white");
  info5.style("font-size: 22px");
  info5.style("cursor: pointer");
  info5.style("padding: 0.5%");
  info5.size(200, 125);

  info1.mousePressed(goToWebsite);
  info2.mousePressed(goToSound);
  info3.mousePressed(goToComic);
  info4.mousePressed(goToVideo);
  info5.mousePressed(goToAnimation);



  background(0, 0, 0);
  var i;
  stroke(255);
  fill(255);

  for (i = 0; i < 70; i++) //generate seventy random positions for the stars
  {
    entry = new star();
    stars.push(entry);
  }
}

function draw()
{
  background(0, 0, 0);
  closeWindow();

  for (i = 0; i < 70; i++)
  {
    ellipse(stars[i].x, stars[i].y, 3 + glow, 3 + glow);
  }

  if ((millis() - currentTime) < 2000)
  {
    glow += growFactor;
  }

  if (millis() - currentTime >= 2500)
  {
    currentTime = millis();
    growFactor = -growFactor;
  }

  image(icon1, icon1_x, icon1_y);
  image(icon2, icon2_x, icon2_y);
  image(icon3, icon3_x, icon3_y);
  image(icon4, icon4_x, icon4_y);
  image(icon5, icon5_x, icon5_y);

  push();
  translate(width/2, height/2);
  rotate(angle);
  fill(0);
  triangle(20, 0,  - 20,  - 10,  - 20, 10);
  fill(255);
  pop();

  if (windowOpen == false)
  {
    angle = atan2(mouseY - height * 0.5, mouseX - width * 0.5);

    var i;

    for (var i = lasersList.length - 1; i >= 0; i--)
    {
      lasersList[i].render();
      lasersList[i].update();

      if (lasersList[i].offscreen())
      {
        lasersList.splice(i, 1);
      }
      else {
        if (lasersList[i].checkCollisionIco1() || lasersList[i].checkCollisionIco2() || lasersList[i].checkCollisionIco3()
        || lasersList[i].checkCollisionIco4() || lasersList[i].checkCollisionIco5())
        {
            iconHit = true;
            if (lasersList[i].checkCollisionIco1())
            {
              infoPopUp(1);
            }

            if (lasersList[i].checkCollisionIco2())
            {
              infoPopUp(2);
            }

            if (lasersList[i].checkCollisionIco3())
            {
              infoPopUp(3);
            }

            if (lasersList[i].checkCollisionIco4())
            {
              infoPopUp(4);
            }

            if (lasersList[i].checkCollisionIco5())
            {
              infoPopUp(5);
            }
        }
      }
    }

    if (iconHit == true)
    {
      for (var i = lasersList.length - 1; i >= 0; i--)
      {
        lasersList.pop();
        iconHit = false;
      }
    }

    if (mouseIsPressed && millis() - timeSinceLastLaser > 300 && millis() - restartTimer > 300)
    {
      lasersList.push(new lasers(angle, 4));
      numLasers++ ;
      timeSinceLastLaser = millis();
    }
  }
}
//triangle(width/2 - 10, height/2,  width/2,  height/2 - 20,  width/2 + 10, height/2);


function goToWebsite()
{
  window.open("https://jahnaemiller.github.io/Assignment 1/landing.html", "_self");
}

function goToSound()
{
  window.open("https://jahnaemiller.github.io/Assignment 2/sound.html", "_self");
}

function goToComic()
{
  window.open("https://jahnaemiller.github.io/Assignment 3/index.html", "_self");
}

function goToVideo()
{
  window.open("https://jahnaemiller.github.io/Assignment 4/index.html", "_self");
}

function goToAnimation()
{
  window.open("https://jahnaemiller.github.io/Assignment 5/index.html", "_self");
}

function closeWindow()
{
  if (windowOpen == true)
  {
    if (mouseIsPressed)
    {
      info1.hide();
      info2.hide();
      info3.hide();
      info4.hide();
      info5.hide();
      windowOpen = false;
      restartTimer = millis();
    }
  }
}
