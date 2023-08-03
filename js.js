

// var Mymaincontainer = document.querySelector("#container")
// var myMainElement = document.createElement("div");
// myMainElement.className = "mega-menu";
// var myContainer = document.createElement("div");
// myContainer.className = "container";
// var myImage = document.createElement("img");
// myImage.src = "images/megamenu.png";
// myImage.alt = "mega_menu";
// myContainer.appendChild(myImage);
// myMainElement.appendChild(myContainer)
// Mymaincontainer.appendChild(myMainElement)
var myHeader = document.getElementById("header");
var myLink = document.getElementById("otherlink");
var myMegaMenu = document.getElementById("mega-menu");

myLink.onmouseenter = function() {
  myMegaMenu.style.display = "block";
};

myMegaMenu.onmouseleave = function() {
  myMegaMenu.style.display = "none";
};

myLink.ontouchstart = function(event) {
  event.preventDefault();
  
  toggleMegaMenu();
}



function toggleMegaMenu() {
  if (myMegaMenu.style.display === "block") {
    myMegaMenu.style.display = "none";
  } else {
    myMegaMenu.style.display = "block";

  }
}
// countDown 
let lastEvent = new Date("Augst 1, 2023 23:59:59 ").getTime();
let counter = setInterval(() => {
  let date = new Date().getTime();
  let DiffDate = date - lastEvent ;
  
  let days = Math.floor(DiffDate / 1000 / 60 / 60 / 24);
  let hours =  Math.floor(DiffDate / 1000 / 60 / 60 );
  let minutes =  Math.floor(DiffDate / 1000 / 60 );
  let seconds =  Math.floor(DiffDate / 1000 );
  console.log(days + " " + hours + " " + minutes + " " + seconds);

}, 1000);