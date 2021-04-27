//check if email for newsletter subscription is valid
const subscribeButton = document.getElementById('subscribe-button')

subscribeButton.addEventListener('click', event => {
    event.preventDefault()
    const form = document.getElementById('email-input').value;
    const email = /\S+@\S+\.\S+/;
    if (!form.match(email) || form === ''){
		document.getElementById('email-input').classList.add('footer__email--error')
	} else if (form.match(email)) {
		document.querySelector('form').reset();
		document.getElementById('email-input').classList.remove('footer__email--error')
  	}
})

//slider
let slideIndex = 1;
const previousButton = document.getElementById('prev-button')
  nextButton = document.getElementById('next-button')
  dotButtons = document.querySelectorAll('#dot-control')

const showSlides = n => {
  let i
  const slides = document.getElementsByClassName("hero-slider-list__item")
  const dots = document.getElementsByClassName("dot")

  if (n > slides.length) {
	  slideIndex = 1
  }

  if (n < 1) {
	  slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
	dots[i].className = dots[i].className.replace(" active", "")
  }

  slides[slideIndex-1].style.display = "block"
  dots[slideIndex-1].className += " active"
}

showSlides(slideIndex);

const plusSlides = n => {
  showSlides(slideIndex += n)
}

const currentSlide = n => {
  showSlides(slideIndex = n)
}

previousButton.addEventListener('click', () => {
	plusSlides(-1)
})

nextButton.addEventListener('click', () => {
	plusSlides(1)
})

for (let i = 0; i < dotButtons.length; i++) {
	dotButtons[i].addEventListener('click', () => {
		currentSlide(i+1)
		console.log(i)
	})
}

//keep footer details open on desktop
const openOrCloseDetails = () => {
  const details = document.querySelectorAll("details");

  if (window.matchMedia("(min-width: 765px)").matches){
    details.forEach(detail => {
      detail.setAttribute('open', true)
    })
  } else {
    details.forEach(detail => {
      detail.removeAttribute('open')
    })
  }
}

window.addEventListener("resize", openOrCloseDetails)
document.addEventListener('DOMContentLoaded', function() {
  openOrCloseDetails()
})




