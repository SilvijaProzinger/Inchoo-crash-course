const toggleMenu = (function(){
    const openMenuButton = document.getElementById('open-menu')
        closeMenuButton = document.getElementById('close-menu')
        menuBody = document.getElementById('menu-container')
        openCategory = document.querySelectorAll('#open-category')
        openSubCategory = document.querySelectorAll('#open-subcategory')
        closeCategory= document.querySelectorAll('#category-item')
        mqlDesktop = window.matchMedia("(min-width: 1024px)")

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

    return {
        mobileOrDesktopMenu: mobileOrDesktopMenu
    }
})()

toggleMenu.mobileOrDesktopMenu()