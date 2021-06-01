root.innerHTML += `

<form id = "add-product">
  <ul class="wrapper">
    <li class="form-row">
    <label for="name">Nume:</label>
    <input type="text" name="name" id="name"/>
    </li>
    <li class="form-row">
     <label for="price">Pret:</label>
     <input type="number" name="price" id="price"/>
    </li>
    <li class="form-row">
       <label for="releaseYear">Anul aparitiei:</label>
        <input type="number" name="releaseYear" id="releaseYear"/>
    </li>
     <li class="form-row">
        <label for="dateWhenAdded">Anul adaugarii:</label>
        <input type="number" name="dateWhenAdded" id="dateWhenAdded"/>
    </li>
     <li class="form-row">
         <label for="image">Imagine:</label>
        <input type="text" name="image" id="image"/>
    </li>
        <li class="form-row">
        <input type="submit"/>
    </li>
  </ul>
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