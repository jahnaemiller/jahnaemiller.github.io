
var slide = 1;
showSlide(slide);

function changeSlide(x)
{
  showSlide(slide += x);
}

function showSlide(n)
{
  var i;
  var x = document.getElementsByClassName("slides");

  console.log(x);

  if (n > x.length)
  {
    slide = 1;
  }

  if (n < 1)
  {
    slide = x.length
  }

  for (i = 0; i < x.length; i++)
  {
    x[i].style.display = "none";
  }

  x[slide - 1].style.display = "block";
}
