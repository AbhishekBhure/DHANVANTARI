const myslide = document.querySelectorAll('.myslide');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 4000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}

function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 4000);
}

function slidefun(n){
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";

}