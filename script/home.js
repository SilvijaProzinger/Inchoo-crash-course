const homeSlider = (function(){
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

  return {
    showSlides: showSlides
  }
})()

homeSlider.showSlides()



