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