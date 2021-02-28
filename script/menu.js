const openMenuButton = document.getElementById('open-menu');
const closeMenuButton = document.getElementById('close-menu');
const menuBody = document.getElementById('menu-container');
const openCategory = document.querySelectorAll('#open-category')
const openSubCategory = document.querySelectorAll('#open-subcategory');
const closeCategory= document.querySelectorAll('#category-item');
const subCategory = document.querySelectorAll('.sub-container');

openMenuButton.addEventListener('click', () => {
    menuBody.classList.remove('hidden');
    menuBody.classList.add('menu-mobile');
});

closeMenuButton.addEventListener('click', () => {
    menuBody.classList.remove('menu-mobile');
    menuBody.classList.add('hidden');
});

//check resolution to see if menu should be for mobile or desktop 
const mobileOrDesktopMenu = () => {
    if (window.innerWidth >= 1024){
        menuBody.classList.add('menu-desktop');        
        menuBody.classList.remove('hidden');
        menuBody.classList.remove('menu-mobile');
    } else {
        menuBody.classList.remove('menu-desktop');
        menuBody.classList.add('hidden');
    };
};

window.addEventListener("resize", mobileOrDesktopMenu);
window.onload = mobileOrDesktopMenu;

openCategory.forEach(accordion => {
    if (window.innerWidth >= 1024) {
        accordion.addEventListener('mouseenter', () => {
            accordion.nextElementSibling.classList.add('accordion-opened');
            accordion.querySelector('span').classList.remove('icon-chevron-down');
            accordion.querySelector('span').classList.add('icon-chevron-up');
        });
    } else {
        accordion.addEventListener('click', () => {
            let parentElement = accordion.nextElementSibling;
            parentElement.classList.toggle('accordion-opened')
            parentElement.querySelectorAll('.category-container').forEach(element => {
                element.classList.toggle('accordion-opened');
            });
        });
    };
});

closeCategory.forEach(category => {
    if (window.innerWidth >= 1024) {
        category.addEventListener('mouseleave', () => {
            category.querySelectorAll('.desktop-containers').forEach(categoryChild => {
                categoryChild.classList.remove('accordion-opened');
            });
            category.querySelector('span').classList.remove('icon-chevron-up');
            category.querySelector('span').classList.add('icon-chevron-down');
        });
    };
});

openSubCategory.forEach(subcagetory => {
    console.log('click')
    if (window.innerWidth <= 1023){
        subcagetory.addEventListener('click', () => {
            subcagetory.nextElementSibling.classList.toggle('accordion-opened');
        });
    };
});


