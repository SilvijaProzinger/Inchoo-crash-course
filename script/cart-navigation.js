const toggleCart = (function(){
    const openCart = document.getElementById('show-cart')
        closeCart = document.getElementById('close-cart')
        cart = document.getElementById('cart-container')

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

    cart.addEventListener('click', event => {
        if (event.target.className === "icon-x-circle"){
            toggleCartVisibility()
        } 
    })

    openCart.addEventListener('click', () => {
        toggleCartVisibility()    
        if (productJSON === undefined){
            document.getElementById('if-empty').style.display = 'block'
            document.getElementById('cart-content').style.display = 'none'
        } else {
            document.getElementById('if-empty').style.display = 'none'
            document.getElementById('cart-content').style.display = 'block'
        }
    })

    return {
        toggleCartVisibility: toggleCartVisibility
    }
})()

