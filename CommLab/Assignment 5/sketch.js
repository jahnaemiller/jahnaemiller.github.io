var win = false;
var bottleX = 0;
var bottleY = 0;
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
var transparency = 0;
var darken;
var videoTransparency = 0;

function preload()
{
  bottle = loadImage("bottle.png");
  bin = loadImage("bin.png");
  video = createDiv('<iframe width="560" height="315" src="https://www.youtube.com/embed/oD0Ds5GtpmQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
  video.hide();
  bg = loadImage("gray.jpeg");
  darken = createDiv();
}


function setup(){
  createCanvas(windowWidth, windowHeight);
  background(255);
  video.size(windowWidth/2.56, windowHeight/1.93);
  video.style("z-index", 3);
  darken.style("background-color", "black");
  darken.size(windowWidth, windowHeight);
  darken.position(0, 0);
  video.style("opacity", videoTransparency);
  video.hide();
  darken.hide();
  textFont("Pangolin");
  bottleX = windowWidth/1.87;
  bottleY = windowHeight/5.0;
}

function draw()
{
  background(bg);
  fill(255);
  textSize(140);
  text("REUNION", windowWidth/3.5, height/2 - 100 + textVelocity);
  fill(0);
  textSize(18);
  darken.style('opacity', transparency);

  if (instructionsRead == false)
  {
    text("kind soul! if it pleases you, carry me to my correct abode.", bottleX - 150, bottleY - 20)
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

    if (transparency <= 0.70)
    {
      transparency += 0.02;
    }

    darken.show();


    if (millis() - currentTime > 1000)
    {
      if (videoTransparency <= 1)
      {
        videoTransparency += 0.02;
      }

      video.position(width/3 - 50, height/12);
      video.style("opacity", videoTransparency);
      video.show();
      console.log('changing bg image');
    }
  }
}
