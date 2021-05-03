const addToCart = (function(){
    const openCart = document.getElementById('show-cart')
    closeCart = document.getElementById('close-cart')
    addToCartButton = document.querySelector('#product-form')
    cart = document.getElementById('cart-container')
    checkoutButton = document.getElementById('checkout-button')
    colorSwatches = document.querySelectorAll(".color__swatch")

    let productJSON
    let colorValue
    
    //save color name on user click
    colorSwatches.forEach(color => {
        color.addEventListener('click', event => {
            colorValue = event.target.getAttribute('data')
        })
    })

    //create a product object
    function Product(name,price,color,qty){
        this.name = name
        this.price = price
        this.color = color
        this.qty = qty
    }

    //populate cart modal
    const createCartContent = (productOne) => {
        const values = Object.values(productOne)

        document.getElementById('cart-item-img').src = document.getElementById('featured').src
        document.querySelector('.cart-item-name').innerHTML = values[0]
        document.getElementById('color-val').innerHTML = colorValue
        document.getElementById('price-val').innerHTML = values[1]
        document.getElementById('qty-val').value = values[3]
        document.getElementById('total-val').innerHTML = values[1]
    }

    //save selected product information and send it to JSON object 
    const handleProductOrder = (event) => {
        event.preventDefault()

        //select values from non-form elements and create a new object instance 
        const productName = document.getElementById('product-name').textContent
        const productPrice = document.getElementById('product-price').textContent
        const productColor = colorValue
        const productQty = document.getElementById('product-qty').value

        const productOne = new Product(productName, productPrice, productColor, productQty)

        productJSON = JSON.stringify(productOne)
        localStorage.setItem('selectedProduct', productJSON)

        createCartContent(productOne)
    }

    addToCartButton.addEventListener('submit', handleProductOrder);

    checkoutButton.addEventListener('click', () => {
        cart.classList.remove('cart__opened')
        cart.classList.add('visualy-hidden')
        cart.classList.add('cart__closed')

        localStorage.clear()
    })
})()



