const toggleCategories = (function(){
    const listButton = document.getElementById('trigger-list')
        gridButton = document.getElementById('trigger-grid')
        categoriesView = document.getElementById('grid-and-list')
        wishlistArray = document.querySelectorAll('#wishlist-compare')
        shopByButton = document.getElementById('shop-by')
        shopByNavigation = document.getElementById('aside')
        closeShopByButton = document.getElementById('close-shop-by')
        filters = document.getElementById('layered-navigation')
        filterOption = filters.querySelectorAll('a, input')
        closeFiltersButton = document.getElementById('clear-button')
        mqlDesktop = window.matchMedia("(min-width: 1024px)")

    //check resolution to see if shopby filter should be opened or hidden for mobile view 
    const showOrHideSidebar = () => {
        if (mqlDesktop.matches){
            shopByNavigation.classList.add('layered-nav');
            shopByNavigation.classList.remove('layered-nav-mobile')
            shopByNavigation.classList.remove('visualy-hidden')
        } else {
            shopByNavigation.classList.add('layered-nav-mobile')
            shopByNavigation.classList.remove('layered-nav')
            shopByNavigation.classList.add('visualy-hidden')
        }
    }

    mqlDesktop.addEventListener("change", showOrHideSidebar)

    //switch between grid and list view
    listButton.addEventListener('click', () => {
        categoriesView.classList.remove('products__grid-view')
        categoriesView.classList.add('products__list-view')

        for (const item of wishlistArray) {
            item.classList.remove('wishlist__and__compare')
            item.classList.add('wishlist__list')
        }
    })

    gridButton.addEventListener('click', () => {
        categoriesView.classList.remove('products__list-view')
        categoriesView.classList.add('products__grid-view')

        for (const item of wishlistArray) {
            item.classList.remove('wishlist__list')
            item.classList.add('wishlist__and__compare')
        }
    })

    //open or close shop by filters
    shopByButton.addEventListener('click', () => {
        shopByNavigation.classList.add('layered-nav-mobile')
        shopByNavigation.classList.remove('visualy-hidden')
    })

    closeShopByButton.addEventListener('click', () => {
        shopByNavigation.classList.remove('layered-nav-mobile')
        shopByNavigation.classList.add('visualy-hidden')
    })

    //apply selected filters to categories
    filterOption.forEach(option => {
        let selectedFilter

        option.addEventListener('click', event => {
            if (event.target.tagName == 'A') {
                event.preventDefault() 
                selectedFilter = event.target.innerText
            } else if (event.target.checked || event.target.name === 'price_range'){
                selectedFilter = event.target.value
                console.log(selectedFilter)
            } else {
                selectedFilter = ''
                document.getElementById('selected').style.display = 'none'
            }
            console.log(selectedFilter)

            document.getElementById('selected').style.display = 'block'
            document.querySelector('.selected__filter').innerHTML = selectedFilter
        })
    })

    closeFiltersButton.addEventListener('click', () => {
        document.getElementById('selected').style.display = 'none'
        document.querySelector('.selected__filter').innerHTML = ''
    })

    return {
        showOrHideSidebar: showOrHideSidebar
    }
})()

toggleCategories.showOrHideSidebar()
