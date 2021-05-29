root.innerHTML += `
    <form id="add-product">
        <label for="name">Nume:</label>
        <input type="text" name="name" id="name"/>
        <label for="price">Pret:</label>
        <input type="number" name="price" id="price"/>
        <label for="image">Imagine:</label>
        <input type="text" name="image" id="image"/>
        <label for="releaseYear">Anul aparitiei:</label>
        <input type="number" name="releaseYear" id="releaseYear"/>
        <label for="dateWhenAdded">Anul adaugarii:</label>
        <input type="number" name="dateWhenAdded" id="dateWhenAdded"/>
        <input type="submit"/>
    </form>
`

function addFormFunctionality() {
    const form = document.querySelector('#add-product');
    form.addEventListener('submit', function(event) {
        console.log(event)
        event.preventDefault();
        const phoneName = event.target.name.value;
        const phonePrice = Number(event.target.price.value);
        const phoneReleaseYear = Number(event.target.releaseYear.value);
        const phoneDateWhenAdded = Number(event.target.dateWhenAdded.value);
        const phoneImage = event.target.image.value;

        const newPhone = {
            name: phoneName,
            price: phonePrice,
            image: phoneImage,
            releaseYear: phoneReleaseYear,
            dateWhenAdded: phoneDateWhenAdded
        };

        const localStorageProducts = getProducts();
        localStorageProducts.push(newPhone);
        setProducts(localStorageProducts);

        renderProductList(localStorageProducts);
    })
}

window.addEventListener('load', addFormFunctionality);