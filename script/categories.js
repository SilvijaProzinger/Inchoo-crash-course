const categoriesView = document.getElementById('grid-and-list');

document.getElementById('trigger-list').addEventListener('click', () => {
    categoriesView.classList.remove('products__grid-view');
    categoriesView.classList.add('products__list-view');
})

document.getElementById('trigger-grid').addEventListener('click', () => {
    categoriesView.classList.remove('products__list-view');
    categoriesView.classList.add('products__grid-view');
})