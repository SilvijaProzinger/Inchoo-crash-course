const toggleCart = (function(){
    const openCart = document.getElementById('show-cart')
        closeCart = document.getElementById('close-cart')
        cart = document.getElementById('cart-container')
        checkoutButton = document.getElementById('checkout-button')

    const toggleCartVisibility = () => {
        if (cart.classList.contains('visualy-hidden')){
            cart.classList.remove('cart__closed')
            cart.classList.remove('visualy-hidden')
            cart.classList.add('cart__opened')
        } else {
            cart.classList.add('cart__closed')
            cart.classList.add('visualy-hidden')
            cart.classList.remove('cart__opened')
        }
    } 

    const showCartContent = () => {
        const productObject = JSON.parse(sessionStorage.getItem('selectedProduct'))
        const values = Object.values(productObject)
        const priceValue = parseInt(values[1].substring(1)) //raw price value without dollar sign

        document.querySelector('.cart-item-name').innerHTML = values[0]
        document.getElementById('color-val').innerHTML = values[2]
        document.getElementById('price-val').innerHTML = values[1]
        document.getElementById('qty-val').innerHTML = values[3]
        document.getElementById('total-val').innerHTML = '$' + priceValue * values[3]
    }

    cart.addEventListener('click', event => {
        if (event.target.className === "icon-x-circle"){
            toggleCartVisibility()
        } 
    })

    openCart.addEventListener('click', () => {
        toggleCartVisibility()    
        if (sessionStorage.getItem('selectedProduct') === null){
            document.getElementById('if-empty').style.display = 'block'
            document.getElementById('cart-content').style.display = 'none'
        } else {
            document.getElementById('if-empty').style.display = 'none'
            document.getElementById('cart-content').style.display = 'block'
            showCartContent()
        }
    })
   
    checkoutButton.addEventListener('click', () => {
        toggleCartVisibility()
        sessionStorage.clear()
    })

})()

