// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");
var buffer = document.getElementById("divBetweenNavAndContent");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    buffer.classList.add("stickybuffer");
  } else {
    navbar.classList.remove("sticky");
    buffer.classList.remove("stickybuffer");
  }
}




var onlyDoes = 0;
var onlyDoes = [
  "Advanced Filtration.",
  "Trusted Safety.",
  "HEPA Specialists.",
  "Reliable.",
  "Carbon Filtrationists.",
  "Clean Air."

]
cycleOnlyDoes(0);

function cycleOnlyDoes(j){

  
  var label = document.getElementById("lblOnlyDoes");
  console.log(label.classList);

  label.classList.remove("w3-animate-bottom");
  label.classList.add("fade-out-very-fast");

  setTimeout(function(){
    void label.offsetWidth;
    label.innerHTML = onlyDoes[j];
    label.classList.add("w3-animate-bottom");
    label.classList.remove("fade-out-very-fast");

  }, 1000);
  


  nextOnlyDoes = j+1;
  if(j>onlyDoes.length-2){
      nextOnlyDoes=0;
  }


  setTimeout(function(){ cycleOnlyDoes(nextOnlyDoes); currCycle = nextOnlyDoes;}, 2500);
}


