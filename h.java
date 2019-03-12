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

function allOpaque(el){
	el.classList.add("opaque");
}

function resetAll(){
	a.classList.remove("opaque");
	f.classList.remove("opaque");
	g.classList.remove("opaque");
	i.src = "";
}

 function checkOpaque(elem){
	if (f.classList.contains("opaque") && g.classList.contains("opaque")){
		i.src ="images/clock1.jfif";
		elem.classList.add("opaque");
	} else if (a.classList.contains("opaque") && f.classList.contains("opaque")){
		i.src ="images/clock1.jfif";
		elem.classList.add("opaque");
	} else if (a.classList.contains("opaque") && g.classList.contains("opaque")){
		i.src ="images/clock1.jfif";
		elem.classList.add("opaque");
	} else {
		elem.classList.add("opaque");
	}
 }
// Store the status of the image. Initially it is 'visible'.
var isVisible = "visible";



var hidden = false;

setInterval(function(){
    document.getElementById("time").style.visibility= hidden ? "visible" : "hidden";
    hidden = !hidden;
},1000);

// create two functions - one that adds opaque and one that resets images
// add ids to all eight images (id's should be UNIQUE)
