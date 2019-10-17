var orange = document.getElementById('orange-kid');
var blue = document.getElementById('blue-man');
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var x = window.matchMedia("(max-width: 375px)")
// call this function when "orange-kid" is clicked!
function moveGif(){
	var intViewportWidth = window.innerWidth
	b1.style.opacity = ".5"
	orange.style.transition = "transform 2s ease"
	orange.style.transform = "translate(30vw, 0)"
	if(x.matches){
		orange.style.transform = "translate(0, -165px)"
	}

}

// call this function when "blue-man" is clicked!
function changePicture(){
	b1.style.opacity = '1'
	orange.style.transform = "translate(0, 0)"
	blue.src = "images/vegeta2.png";
}
