const openSearchButton = document.getElementById('search');
const closeSearchForm = document.getElementById('close-search');
const searchFormContainer = document.getElementById('search-container');

openSearchButton.addEventListener('click', () => {
    searchFormContainer.classList.add('search__body');
    searchFormContainer.classList.remove('search__hidden');
});

closeSearchForm.addEventListener('click', () => {
    searchFormContainer.classList.add('search__hidden');
    searchFormContainer.classList.remove('search__body');
});