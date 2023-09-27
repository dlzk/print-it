const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let arrowLeft = document.querySelector("#banner .arrow_left")
let arrowRight = document.querySelector("#banner .arrow_right")
let bannerImage = document.querySelector("#banner .banner-img")
let bannerLine = document.querySelector("#banner p")
let numberSlide = 0
let bannerDot = document.querySelectorAll("#banner .dot")

arrowLeft.addEventListener("click", () => {
	bannerDot[numberSlide].classList.remove("dot_selected")
	if (numberSlide > 0) {
		numberSlide-=1
	}
	else {
		numberSlide=3
	}
	bannerImage.src = "./assets/images/slideshow/"+slides[numberSlide].image
	bannerLine.innerHTML = slides[numberSlide].tagLine
	console.log(numberSlide)
	bannerDot[numberSlide].classList.add("dot_selected")
})

arrowRight.addEventListener("click", () => {
	bannerDot[numberSlide].classList.remove("dot_selected")
	if (numberSlide < 3) {
		numberSlide+=1
	}
	else {
		numberSlide=0
	}
	bannerImage.src = "./assets/images/slideshow/"+slides[numberSlide].image
	bannerLine.innerHTML = slides[numberSlide].tagLine
	console.log(numberSlide)
	bannerDot[numberSlide].classList.add("dot_selected")
})