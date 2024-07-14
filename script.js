
const products = [
    { id: 1, name: 'Product 1', description: 'Childrens clothing, the price: 49 NIS', imageUrl:'images/image1.jpg' },
    { id: 2, name: 'Product 2', description: 'Simple dress, the price: 39 NIS', imageUrl: 'images/image2.jpg' },
    { id: 3, name: 'Product 3', description: 'Party dress, the price: 89 NIS', imageUrl: 'images/image3.jpg' },
    { id: 4, name: 'Product 4', description: 'Practical kit, the price: 29 NIS', imageUrl: 'images/image4.jpg' }
];


document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.querySelector('.products-container');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <button id="details-${product.id}">Details</button>
        `;
        productsContainer.appendChild(productCard);

       
        document.getElementById(`details-${product.id}`).addEventListener('click', function() {
            showDetails(product.id);
        });
    });
});

function showDetails(productId) {
    const product = products.find(p => p.id === productId);
    document.getElementById('productDetails').innerText = `Name: ${product.name}\nDescription: ${product.description}`;
    document.getElementById('productModal').style.display = 'block';
}

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('productModal').style.display = 'none';
});
