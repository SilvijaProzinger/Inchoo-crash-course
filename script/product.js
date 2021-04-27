const toggleProductDetails = (function(){
  const images = document.querySelectorAll('.product__img')
    details = document.querySelectorAll(".product__details__detail")
    detailsContainer = document.querySelector('.product__details')
  let featuredImage = document.getElementById('featured')

  //set clicked image as the one in the preview
  images.forEach((item, i) => {
      item.addEventListener('click', () => {
          featuredImage.src = item.getAttribute('src')
      })
  })

  //open the details tab one by one 
  details.forEach(openedDetail => {
    openedDetail.addEventListener("click", () => {
      details.forEach((detail) => {
        if (detail !== openedDetail) {
          detail.removeAttribute("open")
        }
      })
    })
  })

  const customizeDetails = () => {
      const getBottomHeight = document.querySelector('.details__content').offsetHeight;
      console.log(getBottomHeight)

      if (window.matchMedia("(min-width: 1024px)").matches){
          detailsContainer.style.marginBottom = getBottomHeight + 100 +'px'
      }
  }

  return {
    customizeDetails: customizeDetails
  }
})()

toggleProductDetails.customizeDetails()