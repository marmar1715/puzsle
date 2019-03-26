//id's for the clocks 
a = document.getElementById("one");
b = document.getElementById("two");
c = document.getElementById("three");
d = document.getElementById("four");
e = document.getElementById("five");
f = document.getElementById("six");
g = document.getElementById("seven");
h = document.getElementById("eight");
i = document.getElementById("key");
j = document.getElementById("time");
var isVisible = "visible";
k = document.getElementById("next");

function allOpaque(el){
	el.classList.add("opaque");
}
//removes opacity from correct clocks 
function resetAll(){
	a.classList.remove("opaque");
	f.classList.remove("opaque");
	g.classList.remove("opaque");
	i.src = "";
}
//allows the final key to appear after the correct opaque clocks are chosen which are a,f, and g when function is called 
 function checkOpaque(elem){
	if (f.classList.contains("opaque") && g.classList.contains("opaque")){
		i.src ="images/gold_key.gif";
		elem.classList.add("opaque");
	} else if (a.classList.contains("opaque") && f.classList.contains("opaque")){
		i.src ="images/gold_key.gif";
		elem.classList.add("opaque");
	} else if (a.classList.contains("opaque") && g.classList.contains("opaque")){
		i.src ="images/gold_key.gif";
		elem.classList.add("opaque");
	} else {
		elem.classList.add("opaque");
	}
 }
// Store the status of the image. Initially it is 'visible'.
var isVisible = "visible";



var hidden = false;
//allows the the clock to blink every second using the visible and false class
setInterval(function(){
    document.getElementById("time").style.visibility= hidden ? "visible" : "hidden";
    hidden = !hidden;
	},1000);
	


//opens second page when function is called
function nextPage(el) {
	window.open("https://destinyceja.github.io/Escaspe_wonderland/");
}
// create two functions - one that adds opaque and one that resets images
// add ids to all eight images (id's should be UNIQUE)
