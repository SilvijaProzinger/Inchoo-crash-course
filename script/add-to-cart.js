const addToCart = (function(){
    const addToCartButton = document.querySelector('#product-form')
        cart = document.getElementById('cart-container')
        colorSwatches = document.querySelectorAll(".color__swatch")

    let colorValue = 'Black'
    
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

    //save selected product information and send it to JSON object 
    const handleProductOrder = (event) => {
        let productJSON

        event.preventDefault()

        //select values from non-form elements and create a new object instance 
        const productName = document.getElementById('product-name').textContent
        const productPrice = document.getElementById('product-price').textContent
        const productColor = colorValue
        const productQty = document.getElementById('product-qty').value

        const productOne = new Product(productName, productPrice, productColor, productQty)

        productJSON = JSON.stringify(productOne)
        sessionStorage.setItem('selectedProduct', productJSON)
    }

    addToCartButton.addEventListener('submit', handleProductOrder);
})()




