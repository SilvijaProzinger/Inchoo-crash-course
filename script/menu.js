const openMenuButton = document.getElementById('open-menu');
const closeMenuButton = document.getElementById('close-menu');
const menuBody = document.getElementById('menu-container');
const openCategory = document.querySelectorAll('#open-category')
const openSubCategory = document.querySelectorAll('#open-subcategory');

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
        menuBody.classList.remove('menu-mobile');
        menuBody.classList.remove('hidden')
    } else {
        menuBody.classList.remove('menu-desktop');
        menuBody.classList.add('hidden')
    }
};

window.addEventListener("resize", mobileOrDesktopMenu);
window.onload = mobileOrDesktopMenu;

openCategory.forEach(accordion => {
    accordion.addEventListener('click', () => {
        if (window.innerWidth >= 1024){
            document.querySelectorAll('.category-container').classList.toggle('accordion-opened');
            document.querySelectorAll('.sub-container').classList.toggle('accordion-opened');
        } else {
            accordion.nextElementSibling.classList.toggle('accordion-opened')
        }
    });
});

openSubCategory.forEach(subcagetory => {
    console.log('click')
    subcagetory.addEventListener('click', () => {
        subcagetory.nextElementSibling.classList.toggle('accordion-opened');
    });
});


