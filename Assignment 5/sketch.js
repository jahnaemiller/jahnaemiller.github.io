var win = false;
var bottleX = 675;
var bottleY = 130;
var overBottle = false;
var dragging = false;
var xOffset = 0;
var yOffset = 0;
var binX = 0;
var binY = 0;
var currentTime = 0;
var alerted = false;
var generalText = "sorry, brave soldier, but my home is in another container.";
var paperText = "you are so close! my home is just over yonder!";
var correctText = "thank you. you will now be awarded handsomely.";
var correct = false;
var currentTime = 0;
var video;
var textVelocity = 0;
var instructionsRead = false;

function preload()
{
  bottle = loadImage("bottle.png");
  bin = loadImage("bin.png");
  video = createDiv('<iframe width="560" height="315" src="https://www.youtube.com/embed/LB871SVYMhI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
  video.hide();
  bg = loadImage("gray.jpeg");
}


function setup(){
  createCanvas(windowWidth, windowHeight);
  background(255);
  video.size(500, 350);
  video.hide();
  textFont("Pangolin");
}

function draw()
{
  background(bg);
  fill(255);
  textSize(140);
  text("REUNION", 360, height/2 - 100 + textVelocity);
  fill(0);
  textSize(18);

  if (instructionsRead == false)
  {
    text("kind soul! if it pleases you, carry me to my correct abode.", 520, height/2 - 220)
  }

  if (win == false)
  {
    if (dragging)
    {
      bottleX = mouseX + xOffset;
      bottleY = mouseY + yOffset;
    }

    binX = width/2 - bin.width/2;
    binY =  height - bin.height - 2;

    image(bin, binX, binY);
    image(bottle, bottleX, bottleY); //place holder for now --> go over logo

    if ((mouseX >= bottleX) && (mouseX <= bottleX + bottle.width) && (mouseY >= bottleY) && (mouseY <= bottleY + bottle.height))
    {
      cursor(HAND);
      console.log("hovering over bottle");
      overBottle = true;
    }
    else
    {
      cursor(ARROW);
      console.log("not over bottle");
      overBottle = false;
    }

    if (mouseIsPressed && overBottle == true)
    {
      dragging = true;
      xOffset = bottleX - mouseX;
      yOffset = bottleY - mouseY;
      instructionsRead = true;
    }
    else
    {
      dragging = false;
    }

    if (bottleY >= binY && bottleY <= binY + bin.height)
    {
      if (bottleX >= binX && bottleX <= binX + bin.width/3)
      {
        console.log("over general waste");

        if (alerted == false)
        {
          alerted = true;
          fill(0);
        }
        if (alerted == true)
        {
          text(generalText, bottleX - bottle.width/2, bottleY - 50);
        }
      }

      if (bottleX > binX + bin.width/3 && bottleX <= binX + 2 * (bin.width/3))
      {
        console.log("over paper");

        if (alerted == false)
        {
          alerted = true;
          fill(0);
        }
        if (alerted == true)
        {
          text(paperText, bottleX - bottle.width/2, bottleY - 50);
        }
      }

      if (bottleX > binX + 2 * (bin.width/3) && bottleX <= binX + bin.width - 90)
      {
        console.log("over plastic");
        win = true;
        currentTime = millis();
      }
    }
  }
  else
  {
    image(bin, binX, binY);
    image(bottle, bottleX, bottleY);
    textVelocity += -5;
    textSize(18);
    text(correctText, bottleX - bottle.width/2, bottleY - 50);
    cursor(ARROW);

    if (millis() - currentTime > 1400)
    {
      video.show();
      video.position(width/3 - 50, height/12);
    }
  }
}
