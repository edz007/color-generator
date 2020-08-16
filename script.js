var css= document.querySelector("h4");
var color1= document.querySelector(".color1")
var color2= document.querySelector(".color2")
var body= document.querySelector("body");
var h3= document.querySelector("h3");

function colorChange() {
 	console.log(color1.value, color2.value);
 	body.style.background = "linear-gradient(to right, "+ 
 	color1.value + ", " + color2.value +")";
 	h3.textContent= (color1.value + color2.value);
 	css.textContent = body.style.background;
 }

 color1.addEventListener("input", colorChange)
 color2.addEventListener("input", colorChange)



















// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);