var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomColor");
var copy = document.getElementById("copy");

color1.value = '#ff0000';
color2.value = '#ffff00';
setGradient();

function setGradient() {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}`;
	css.textContent = `${body.style.background};`; 
}

function setRandomColors(){
	function col() {
		var rgb = Math.floor(Math.random()*256);
		var hex = rgb.toString(16);
		if (hex.length < 2) {
			hex = "0" + hex;
		}
		return hex;
	}
	color1.value = `#${col()}${col()}${col()}`;
	color2.value = `#${col()}${col()}${col()}`;
	setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomColors);
copy.addEventListener("click", function(){
  	var r = document.createRange();
	r.selectNode(css);
	window.getSelection().addRange(r);
	document.execCommand("copy");
	window.alert("text copied to clipboard");
})