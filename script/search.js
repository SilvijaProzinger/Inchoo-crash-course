const toggleSearch = (function(){
    const openSearchButton = document.getElementById('search')
        closeSearchForm = document.getElementById('close-search')
        searchFormContainer = document.getElementById('search-container')

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
})()




    