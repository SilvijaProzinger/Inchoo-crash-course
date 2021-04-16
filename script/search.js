const openSearchButton = document.getElementById('search')
const closeSearchForm = document.getElementById('close-search')
const searchFormContainer = document.getElementById('search-container')

openSearchButton.addEventListener('click', () => {
    searchFormContainer.classList.add('search__body')
    searchFormContainer.classList.add('search__body-visible')
    searchFormContainer.classList.remove('visualy-hidden')
    searchFormContainer.classList.remove('search__body-closed')
});

closeSearchForm.addEventListener('click', () => {
    searchFormContainer.classList.add('search__body-closed')
    searchFormContainer.classList.add('visualy-hidden')
    searchFormContainer.classList.remove('search__body')
    searchFormContainer.classList.remove('search__body-visible')
});