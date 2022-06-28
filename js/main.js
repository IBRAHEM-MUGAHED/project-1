// Style JS Code NavBar
var navElement = document.getElementById("navbar-nav");
var links = navElement.getElementsByClassName("nav-link");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      var activeElement = document.getElementsByClassName("active");
      activeElement[0].className = activeElement[0].className.replace("active","");
      this.className += " active";
    });
  }
  