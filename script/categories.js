const listButton = document.getElementById('trigger-list');
const gridButton = document.getElementById('trigger-grid');
const categoriesView = document.getElementById('grid-and-list');

const wishlistArray = document.querySelectorAll('#wishlist-compare');
const shopByButton = document.getElementById('shop-by');
const shopByNavigation = document.querySelector('.layered-nav');
const closeShopByButton = document.getElementById('close-shop-by');

const filters = document.getElementById('layered-navigation');
const filterOption = filters.querySelectorAll('a, input');
const closeFiltersButton = document.getElementById('clear-button');

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
    shopByNavigation.style.display = 'block';
    shopByNavigation.classList.add('layered-nav-mobile');
    shopByNavigation.classList.remove('layered-nav');
})

closeShopByButton.addEventListener('click', () => {
    shopByNavigation.style.display = 'none';
    shopByNavigation.classList.add('layered-nav');
    shopByNavigation.classList.remove('layered-nav-mobile');
})

//apply selected filters to categories
filterOption.forEach(option => {
    let selectedFilter;

    option.addEventListener('click', event => {
        if (event.target.tagName == 'a') {
            event.preventDefault()
            console.log(event.target.innerText)
            selectedFilter = event.target.innerText
        } else {
            console.log(event.target.id)
            selectedFilter = event.target.id
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