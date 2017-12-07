var slideIndex = 1;
var slider_down = document.getElementsByClassName("slider-down");
var mouse = document.getElementById("mouse");
var mouse_middle = document.getElementById("mouse_middle");

var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
var links = document.getElementsByClassName("links");

function checkPage(){
  if (sPage == "index.html" && links[0].style.color !=="#FD5454"){
      links[0].style.color="white";
      links[1].style.color="inherit";
      links[2].style.color="inherit";
      console.log('1')
  }

  if (sPage == "people.html"){
    links[0].style.color="inherit";
    links[1].style.color="white";
    links[2].style.color="inherit";
    console.log('2')
  }

  if(sPage == "contact.html"){
    links[0].style.color="inherit";
    links[1].style.color="inherit";
    links[2].style.color="white";
    console.log('3')
  }
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

slider_down[0].onmouseover = function(){
    mouse.style.borderColor = "#FD5454";
    mouse_middle.style.backgroundColor = "#FD5454";
}

slider_down[0].onmouseout = function(){
  mouse.style.borderColor = "black";
  mouse_middle.style.backgroundColor = "black";
}

checkPage();
showSlides(slideIndex);
