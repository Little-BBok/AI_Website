// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    // Add more products as needed
];

// Function to display products on the webpage
function displayProducts() {
    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productCard);
    });
}

// Function to add a product to the cart (you can implement cart functionality as needed)
function addToCart(productId) {
    // Add your cart logic here
    console.log(`Product ${productId} added to cart`);
}

// Display products when the page loads
window.onload = displayProducts;
