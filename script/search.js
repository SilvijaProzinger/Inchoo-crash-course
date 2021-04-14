const openSearchButton = document.getElementById('search')
const closeSearchForm = document.getElementById('close-search')
const searchFormContainer = document.getElementById('search-container')

openSearchButton.addEventListener('click', () => {
    searchFormContainer.classList.toggle('search__body')
    searchFormContainer.classList.toggle('visualy-hidden')
    searchFormContainer.classList.toggle('search__body-visible')
});

closeSearchForm.addEventListener('click', () => {
    searchFormContainer.classList.toggle('visualy-hidden')
    searchFormContainer.classList.toggle('search__body')
    searchFormContainer.classList.toggle('search__body-closed')
});