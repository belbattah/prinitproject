const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let slideindex = 0
const dotsContainer = document.querySelector(".dots")

//on créer un frgament, qui pemret de stocket du code html avant de l'envoyer au front
const fragment= document.createDocumentFragment()
//pour faire le boucle forEach
slides.forEach((slide, index) => {
	
	// pour créer l'element (div)
	const dot = document.createElement("div")
	//pour ajuter la class dot a l element div
	dot.classList.add("dot")
	//pour ajouter la class dot_selected dont on est en premier
	if (index == 0) {
		dot.classList.add("dot_selected")
	}
	//pour ajouter la div dans le fragment
	fragment.appendChild(dot)
});
//pour ajouter le fragment dans la div dots
dotsContainer.appendChild(fragment)



let imgarrow_left = document.querySelector(".arrow_left")

imgarrow_left.addEventListener("click", function () {
	changeslide(-1)
	
})


let imgarrow_right = document.querySelector(".arrow_right")
imgarrow_right.addEventListener("click", function () {
	changeslide(1)
	
})

//function changeslide(sens) {
	//slideindex = slideindex + sens
	//document.querySelector(".banner-img").src = "assets/images/slideshow/" + slides[slideindex].image;
	//document.querySelector(".banner-tagline").innerHTML = slides[slideindex].tagLine;
//}



function changeslide(sens) {
	const dots = document.querySelectorAll(".dot");
	dots[slideindex].classList.remove("dot_selected");
	slideindex = slideindex + sens;
	if (slideindex >= slides.length) {
		slideindex = 0;
	} 
	else if (slideindex < 0) {
		slideindex = slides.length - 1;
	}
	document.querySelector(".banner-img").src = "assets/images/slideshow/" + slides[slideindex].image;
	document.querySelector(".banner-tagline").innerHTML = slides[slideindex].tagLine;
	dots[slideindex].classList.add("dot_selected");
}
	//recupéré le dot_selected actuel et retiré sa classe dot_selected
	//récupéré le dot avec le bonne index pour lui donner cette classe
	



	//recupéré le dot_selected actuel et retiré sa classe dot_selected
	//récupéré le dot avec le bonne index pour lui donner cette classe
	


grafikart