const baseScript = (function(){

    //resolutions
    mqlTablet = window.matchMedia("(min-width: 765px)")
    mqlDesktop = window.matchMedia("(min-width: 1024px)")

    //search navigation
    openSearchButton = document.getElementById('search')
    closeSearchForm = document.getElementById('close-search')
    searchFormContainer = document.getElementById('search-container')

    //menu navigation
    openMenuButton = document.getElementById('open-menu')
    closeMenuButton = document.getElementById('close-menu')
    menuBody = document.getElementById('menu-container')
    openCategory = document.querySelectorAll('#open-category')
    openSubCategory = document.querySelectorAll('#open-subcategory')
    closeCategory= document.querySelectorAll('#category-item')

    //cart navigation
    openCart = document.getElementById('show-cart')
    closeCart = document.getElementById('close-cart')
    cart = document.getElementById('cart-container')
  
    //Footer
    const openOrCloseDetails = () => {
        const details = document.querySelector('.summary__container').querySelectorAll("details")
        
        if (mqlTablet.matches){
          details.forEach(detail => {
            detail.setAttribute('open', true)
          })
        } else {
          details.forEach(detail => {
            detail.removeAttribute('open')
          })
        }
    }

    mqlTablet.addEventListener("change", openOrCloseDetails)

    //Search
    const toggleSearchVisibility = () => {
        if (searchFormContainer.classList.contains('visualy-hidden')){
            searchFormContainer.classList.add('search__body')
            searchFormContainer.classList.add('search__body-visible')
            searchFormContainer.classList.remove('visualy-hidden')
            searchFormContainer.classList.remove('search__body-closed')
        } else {
            searchFormContainer.classList.add('search__body-closed')
            searchFormContainer.classList.add('visualy-hidden')
            searchFormContainer.classList.remove('search__body')
            searchFormContainer.classList.remove('search__body-visible')
        }
    }
    
    openSearchButton.addEventListener('click', toggleSearchVisibility)
    closeSearchForm.addEventListener('click', toggleSearchVisibility)
  
    //Menu
    const toggleVisibility = () => {
        if (menuBody.classList.contains('visualy-hidden')){
            menuBody.classList.remove('visualy-hidden')
            menuBody.classList.add('menu-mobile')
        } else {
            menuBody.classList.add('visualy-hidden')
            menuBody.classList.remove('menu-mobile')
        }
    }    

    openMenuButton.addEventListener('click', toggleVisibility)
    closeMenuButton.addEventListener('click', toggleVisibility)

    //check resolution to see if menu should be for mobile or desktop 
    const mobileOrDesktopMenu = () => {
        if (mqlDesktop.matches){
            menuBody.classList.add('menu-desktop')       
            menuBody.classList.remove('visualy-hidden')
            menuBody.classList.remove('menu-mobile')
        } else {
            menuBody.classList.remove('menu-desktop')
            menuBody.classList.add('visualy-hidden')
        }
    }

    mqlDesktop.addEventListener("change", mobileOrDesktopMenu)

    //open or close menu categories on desktop
    openCategory.forEach(accordion => {
        if (window.matchMedia("(min-width: 1024px)").matches) {
            accordion.addEventListener('mouseenter', () => {
                accordion.nextElementSibling.classList.add('accordion-opened')
                accordion.querySelector('span').classList.toggle('icon-chevron-down')
                accordion.querySelector('span').classList.toggle('icon-chevron-up')
            })
        } else {
            accordion.addEventListener('click', () => {
                let parentElement = accordion.nextElementSibling
                parentElement.classList.toggle('accordion-opened')
                parentElement.querySelectorAll('.category-container').forEach(element => {
                    element.classList.toggle('accordion-opened')
                })
                accordion.querySelector('span').classList.toggle('icon-chevron-down')
                accordion.querySelector('span').classList.toggle('icon-chevron-up')
            })
        }
    })

    closeCategory.forEach(category => {
        if (mqlDesktop.matches) {
            category.addEventListener('mouseleave', () => {
                category.querySelectorAll('.desktop-containers').forEach(categoryChild => {
                    categoryChild.classList.remove('accordion-opened')
                })
                category.querySelector('span').classList.toggle('icon-chevron-up')
                category.querySelector('span').classList.toggle('icon-chevron-down')
            })
        }
    })

    //open or close menu categories and subcategories on mobile
    openSubCategory.forEach(subcagetory => {
        const subCategory = document.querySelectorAll('.sub-container')
        if (window.matchMedia("(max-width: 1023px)").matches){
            subcagetory.addEventListener('click', () => {
                subcagetory.nextElementSibling.classList.toggle('accordion-opened')
            })
        }
    })

    //Shopping cart
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
        if (localStorage.getItem('selectedProduct') === null){
            document.getElementById('if-empty').style.display = 'block'
            document.getElementById('cart-content').style.display = 'none'
        } else {
            document.getElementById('if-empty').style.display = 'none'
            document.getElementById('cart-content').style.display = 'block'
        }
    })

    return {
      openOrCloseDetails: openOrCloseDetails,
      mobileOrDesktopMenu: mobileOrDesktopMenu
    }
})()
  
baseScript.openOrCloseDetails()
baseScript.mobileOrDesktopMenu()

  
  
  
  