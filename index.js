const root = document.querySelector('#root');
const products = [
    {
        name: 'Iphone XS',
        price: 4500,
        image: "https://shop.flip.ro/serve-device-photos?n=apple_iphone-xs_gold_sell.jpg&amp;s=1000&amp;t=device-images",
        releaseYear: 2019,
        dateWhenAdded: 2019
    },
    {
        name: 'Huawei P30',
        price: 4000,
        image: "https://lcdn.altex.ro/resize/media/catalog/product/H/u/2bd48d28d1c32adea0e55139a4e6434a/Huawei_p30lite_Blue_2ce65b94.jpg",
        releaseYear: 2020,
        dateWhenAdded: 2020
    },
    {
        name: 'Samsung S10',
        price: 4250,
        image:"https://s13emagst.akamaized.net/products/36489/36488446/images/res_a74cef29c80effedbfdf96b12b16d292.jpg?width=450&amp;height=450&amp;hash=95132692640A972B99EDEEBF508C9A92",
        releaseYear: 2018,
        dateWhenAdded: 2019
    }
];

function getProducts() {
    const localStorageProducts = localStorage.getItem("products");
    console.log(localStorageProducts);
    const parsedProducts = JSON.parse(localStorageProducts);
    return parsedProducts;
}

function setProducts(products) {
    const stringifiedProducts = JSON.stringify(products);
    localStorage.setItem("products", stringifiedProducts);
}

if (getProducts() === null){
    setProducts(products);
}

function startRendering() {
    const localStorageProducts = getProducts();
    renderProductList(localStorageProducts);
}
window.addEventListener('load', startRendering);