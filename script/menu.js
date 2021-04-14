const openMenuButton = document.getElementById('open-menu')
const closeMenuButton = document.getElementById('close-menu')
const menuBody = document.getElementById('menu-container')
const openCategory = document.querySelectorAll('#open-category')
const openSubCategory = document.querySelectorAll('#open-subcategory')
const closeCategory= document.querySelectorAll('#category-item')

openMenuButton.addEventListener('click', () => {
    menuBody.classList.toggle('visualy-hidden')
    menuBody.classList.toggle('menu-mobile')
})

closeMenuButton.addEventListener('click', () => {
    menuBody.classList.toggle('menu-mobile')
    menuBody.classList.toggle('visualy-hidden')
})

//check resolution to see if menu should be for mobile or desktop 
const mobileOrDesktopMenu = () => {
    if (window.matchMedia("(min-width: 1024px)").matches){
        menuBody.classList.add('menu-desktop')       
        menuBody.classList.remove('visualy-hidden')
        menuBody.classList.remove('menu-mobile')
    } else {
        menuBody.classList.remove('menu-desktop')
        menuBody.classList.add('visualy-hidden')
    }
}

window.addEventListener("resize", mobileOrDesktopMenu);
document.addEventListener('DOMContentLoaded', function() {
    mobileOrDesktopMenu()
})

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
    if (window.matchMedia("(min-width: 1024px)").matches) {
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



