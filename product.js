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
                <p class="nume">Nume: ${this.name}</p>
                <img src=${this.image} width="70" height="100"></img>
                <p class="pret">Pret: ${this.price}</p>
                <p>Anul aparitiei: ${this.releaseYear}</p>
                <p>Anul adaugarii: ${this.dateWhenAdded}</p>
                <button id="${this.name}" onClick="deleteElement(this.id)">Delete</button>
            </li>
        `;
    }
}


