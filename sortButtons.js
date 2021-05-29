root.innerHTML += `
    <button id="sort-by-price">Sorteaza dupa pret</button>
    <button id="sort-by-release-year">Sorteaza dupa anul aparitiei</button>
    <button id="sort-by-date-when-added">Sorteaza dupa anul adaugarii</button>
    <button id="sort-by-name">Sorteaza dupa nume</button>
    <button id="filter-by-price">Filtreaza dupa pret</button>
    
`;

function sortPhones(sortType) {
    const localStorageProducts = getProducts();
    let sortedArray;
    switch(sortType) {
        case "SORT_BY_PRICE":
            sortedArray = localStorageProducts.sort((elem1, elem2) => {
                if (elem1.price < elem2.price) {
                    return -1;
                } else if (elem1.price > elem2.price) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setProducts(sortedArray);
            renderProductList(sortedArray);
            break;

        case "SORT_BY_RELEASE_YEAR":
            sortedArray = localStorageProducts.sort((elem1, elem2) => {
                if (elem1.releaseYear < elem2.releaseYear) {
                    return -1;
                } else if (elem1.releaseYear > elem2.releaseYear) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setProducts(sortedArray);
            renderProductList(sortedArray);
            break;

        case "SORT_BY_DATE_WHEN_ADDED":
            sortedArray = localStorageProducts.sort((elem1, elem2) => {
                if (elem1.dateWhenAdded < elem2.dateWhenAdded) {
                    return -1;
                } else if (elem1.dateWhenAdded > elem2.dateWhenAdded) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setProducts(sortedArray);
            renderProductList(sortedArray);
            break;
            
        case "SORT_BY_NAME":
            sortedArray = localStorageProducts.sort((elem1, elem2) => {
                if (elem1.name < elem2.name) {
                    return -1;
                } else if (elem1.name> elem2.name) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setProducts(sortedArray);
            renderProductList(sortedArray);
            break;
    }
}
        
function filterPhonesByPrice(price) {
    const localStorageProducts = getProducts();
    const filteredArray = localStorageProducts.filter(function(product){
        return product.price > price;
    });

    setProducts(filteredArray);
    renderProductList(filteredArray);        
}

function addSortingFunctionality() {
    const sortByPrice = document.querySelector('#sort-by-price');
    sortByPrice.addEventListener('click', function() {
        sortPhones('SORT_BY_PRICE');
    });

    const sortByReleaseYear = document.querySelector('#sort-by-release-year');
    sortByReleaseYear.addEventListener('click', function() {
        sortPhones('SORT_BY_RELEASE_YEAR');
    });

    const sortByDateWhenAdded = document.querySelector('#sort-by-date-when-added');
    sortByDateWhenAdded.addEventListener('click', function() {
        sortPhones('SORT_BY_DATE_WHEN_ADDED');
    });

    const sortByName = document.querySelector('#sort-by-name');
    sortByName.addEventListener('click', function() {
        sortPhones('SORT_BY_NAME');
    });

    const filterByPrice = document.querySelector('#filter-by-price');
    filterByPrice.addEventListener('click', function() {
        filterPhonesByPrice(4200);
    });
}

window.addEventListener('load', addSortingFunctionality);



