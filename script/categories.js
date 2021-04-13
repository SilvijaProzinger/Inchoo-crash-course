const listButton = document.getElementById('trigger-list');
const gridButton = document.getElementById('trigger-grid');
const categoriesView = document.getElementById('grid-and-list');

const wishlistArray = document.querySelectorAll('#wishlist-compare');
const shopByButton = document.getElementById('shop-by');
const shopByNavigation = document.getElementById('aside');
const closeShopByButton = document.getElementById('close-shop-by');

const filters = document.getElementById('layered-navigation');
const filterOption = filters.querySelectorAll('a, input');
const closeFiltersButton = document.getElementById('clear-button');

//check resolution to see if shopby filter should be opened or hidden for mobile view 
const showOrHideSidebar = () => {
    if (window.innerWidth >= 1024){
        shopByNavigation.classList.add('layered-nav');
        shopByNavigation.classList.remove('layered-nav-mobile');
    } else {
        shopByNavigation.classList.add('layered-nav-mobile');
        shopByNavigation.classList.remove('layered-nav');
    }
};

window.addEventListener("resize", showOrHideSidebar);
document.addEventListener('DOMContentLoaded', function() {
    showOrHideSidebar()
});

//switch between grid and list view
listButton.addEventListener('click', () => {
    categoriesView.classList.remove('products__grid-view');
    categoriesView.classList.add('products__list-view');

    for (const item of wishlistArray) {
        item.classList.remove('wishlist__and__compare');
        item.classList.add('wishlist__list');
    }
});

gridButton.addEventListener('click', () => {
    categoriesView.classList.remove('products__list-view');
    categoriesView.classList.add('products__grid-view');

    for (const item of wishlistArray) {
        item.classList.remove('wishlist__list');
        item.classList.add('wishlist__and__compare');
    }
});

//open or close shop by filters
shopByButton.addEventListener('click', () => {
    shopByNavigation.classList.add('layered-nav-mobile');
    shopByNavigation.style.display = 'block';
})

closeShopByButton.addEventListener('click', () => {
    shopByNavigation.classList.remove('layered-nav-mobile');
    shopByNavigation.style.display = 'none';
})

//apply selected filters to categories
filterOption.forEach(option => {
    let selectedFilter;

    option.addEventListener('click', event => {
        if (event.target.tagName == 'A') {
            event.preventDefault() 
            selectedFilter = event.target.innerText
        } else if (event.target.checked || event.target.name === 'price_range'){
            selectedFilter = event.target.value
            console.log(selectedFilter)
        } else {
            selectedFilter = ''
            document.getElementById('selected').style.display = 'none';
        }
        console.log(selectedFilter)

        document.getElementById('selected').style.display = 'block';
        document.querySelector('.selected__filter').innerHTML = selectedFilter;
    })

})

closeFiltersButton.addEventListener('click', () => {
    document.getElementById('selected').style.display = 'none';
    document.querySelector('.selected__filter').innerHTML = '';
})

//hide the keyboard focus for when the user is not using keyboard 
const handleTab = (e) => {
    if (e.keyCode === 9) {
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleTab);
    }
}

window.addEventListener('keydown', handleTab);