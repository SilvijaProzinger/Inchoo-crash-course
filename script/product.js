const images = document.querySelectorAll('.product__img');
let featuredImage = document.getElementById('featured');

//set clicked image as the one in the preview
images.forEach((item, i) => {
    item.addEventListener('click', () => {
        console.log(item.getAttribute('src'))
        featuredImage.src = item.getAttribute('src')
    })
})