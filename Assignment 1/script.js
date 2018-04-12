let hand = document.getElementById('swipe');
let page1 = document.getElementById('stepone');
let page2 = document.getElementById('steptwo');
let page3 = document.getElementById('stepthree');

let bio = document.getElementById("biography");
let up = document.getElementById('goup')

//if hand is clicked, hide landing and bring up info page
hand.onclick = () =>
{
  console.log("clicked!"); //print for testing
  page1.style.height = '0px';

  setTimeout( () => {page2.style.display='block';
  }, 200)
}

//if biographies are clicked, display bio page, hide info page
bio.onclick = () =>
{
  console.log("clicked!"); //print for testing
  page2.style.height = '0px';

  page3.style.height = '700px';

  setTimeout( () => {page3.style.display='block';
  }, 200)
}

//if scroll up image is clicked, resize pages to redisplay info page
up.onclick = () =>
{
  console.log("clicked!"); //print for testing
  page3.style.height = '0px';

  page2.style.height = '950px';

  setTimeout( () => {page3.style.display='none';
  }, 200)
}
