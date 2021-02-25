const images = document.querySelectorAll('.product__img');
let featuredImage = document.getElementById('featured');
const details = document.querySelectorAll(".product__details__detail");
const detailsContainer = document.querySelector('.product__details');

const openCart = document.getElementById('show-cart');
const closeCart = document.getElementById('close-cart');
const addToCartButton = document.querySelector('#product-form');
const cart = document.getElementById('cart-container');
const checkoutButton = document.getElementById('checkout-button');
let productJSON;

//set clicked image as the one in the preview
images.forEach((item, i) => {
    item.addEventListener('click', () => {
        featuredImage.src = item.getAttribute('src')
    });
});

//open the details tab one by one 
details.forEach((openedDetail) => {
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

//create a product object
function Product(name,sku,price,color,qty){
  this.name = name;
  this.sku = sku;
  this.price = price;
  this.color = color;
  this.qty = qty;
}

//populate cart modal
const createCartContent = (productOne) => {
  const values = Object.values(productOne)
  console.log(values)
}

//save selected product information and send it to JSON object 
const handleProductOrder = (event) => {
  event.preventDefault();

  //select values from non-form elements and create a new object instance 
  const productName = document.getElementById('product-name').textContent;
  const productSku = document.getElementById('product-sku').textContent;
  const productPrice = document.getElementById('product-price').textContent;
  const productColor = document.getElementById('product-color').value;
  const productQty = document.getElementById('product-qty').value;

  const productOne = new Product(productName, productSku, productPrice, productColor, productQty);

  productJSON = JSON.stringify(productOne)

  createCartContent(productOne)
};

addToCartButton.addEventListener('submit', handleProductOrder);


//open and close the shopping cart
openCart.addEventListener('click', () => {
  cart.classList.remove('cart__closed');
  cart.classList.add('cart__opened');

  if (productJSON === undefined){
    document.getElementById('if-empty').style.display = 'block';
    document.getElementById('cart-content').style.display = 'none';
  } else {
    document.getElementById('if-empty').style.display = 'none';
    document.getElementById('cart-content').style.display = 'block';
  }
});

closeCart.addEventListener('click', () => {
  cart.classList.remove('cart__opened');
  cart.classList.add('cart__closed');
});

checkoutButton.addEventListener('click', () => {
  cart.classList.remove('cart__opened');
  cart.classList.add('cart__closed');
})