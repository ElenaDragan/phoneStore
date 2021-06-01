root.innerHTML += `
     <ul class="product-list" id="product-list"></ul>
`;

function renderProductList(products) {
    const productList = document.querySelector('#product-list');
    productList.innerHTML = '';
    products.forEach(function (product) {
        const phone = new Product(product.name, product.price, product.image, product.releaseYear, product.dateWhenAdded);
        phone.renderProduct();
    });
}

function deleteElement(clickedId) {
    const localStorageProducts = getProducts();
    const filteredStorageProducts = localStorageProducts.filter(function(product){
        return product.name != clickedId;
    });

    setProducts(filteredStorageProducts);
    renderProductList(filteredStorageProducts);
}