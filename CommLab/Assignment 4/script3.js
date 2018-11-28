let video1;
paused = false;

video1 = document.getElementById("vid1");
console.log(video1);
video1.play();

gif = document.getElementById("lgif");

video1.addEventListener("click", function(event) {
        if (video1.paused == true) {
             video1.play();
        }
        else{
             video1.pause();
        }
  });

go = document.getElementById("go2");

video1.onended = () =>{
  console.log("videodone");
  video1.webkitExitFullscreen();
	video1.style.visibility = "hidden";
  go.style.display = "inline";
  go.style.opacity = 1;
}

go.onclick = function(){
    window.location.href="index.html"

}
