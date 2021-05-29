class Product {
    constructor(name, price, image, releaseYear, dateWhenAdded) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.releaseYear = releaseYear;
        this.dateWhenAdded = dateWhenAdded;
    }

    renderProduct() {
        const productList = document.querySelector('#product-list');
        productList.innerHTML += `
            <li class="product">
                <p>Nume: ${this.name}</p>
                <p>Pret: ${this.price}</p>
                <img src=${this.image} width="70" height="100"></img>
                <p>Anul aparitiei: ${this.releaseYear}</p>
                <p>Anul adaugarii: ${this.dateWhenAdded}</p>
            </li>
        `;
    }
}


