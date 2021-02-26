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

    if (window.innerWidth >= 1024){
        detailsContainer.style.marginBottom = getBottomHeight + 100 +'px'
    };
};

window.addEventListener("resize", customizeDetails);
window.onload = customizeDetails;

