const images = document.querySelectorAll('.product__img');
let featuredImage = document.getElementById('featured');
const details = document.querySelectorAll(".product__details__detail");
const detailsContainer = document.querySelector('.product__details');

//set clicked image as the one in the preview
images.forEach((item, i) => {
    item.addEventListener('click', () => {
        featuredImage.src = item.getAttribute('src')
    });
});

//open the details tab one by one 
details.forEach(openedDetail => {
  openedDetail.addEventListener("click", () => {
    details.forEach((detail) => {
      if (detail !== openedDetail) {
        detail.removeAttribute("open");
      };
    });
  });
});

const customizeDetails = () => {
    const getBottomHeight = document.querySelector('.details__content').offsetHeight;
    console.log(getBottomHeight)

    if (window.matchMedia("(min-width: 1024px)").matches){
        detailsContainer.style.marginBottom = getBottomHeight + 100 +'px'
    };
};

window.addEventListener("resize", customizeDetails);
document.addEventListener('DOMContentLoaded', function () {
  customizeDetails()
});

//keep footer details open on desktop
const openOrCloseDetails = () => {
const details = document.querySelector('.summary__container').querySelectorAll("details");

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

window.addEventListener("resize", openOrCloseDetails);
document.addEventListener('DOMContentLoaded', function() {
  openOrCloseDetails()
})
