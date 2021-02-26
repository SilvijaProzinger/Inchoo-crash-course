const openCart = document.getElementById('show-cart');
const closeCart = document.getElementById('close-cart');
const cart = document.getElementById('cart-container');

//open and close the shopping cart for pages other than product page
openCart.addEventListener('click', () => {
    cart.classList.remove('cart__closed');
    cart.classList.add('cart__opened');
    document.getElementById('if-empty').style.display = 'block';
    document.getElementById('cart-content').style.display = 'none';
    
});

cart.addEventListener('click', (event) => {
    if (event.target.className === "icon-x-circle"){
        cart.classList.remove('cart__opened');
        cart.classList.add('cart__closed');
    } 
})