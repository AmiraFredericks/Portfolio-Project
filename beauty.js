document.getElementById('loadProducts').addEventListener('click', async function() {
    const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
    const products = await response.json();
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image_link}" alt="${product.name}">
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button class="addToCart">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });

    // Add functionality to "Add to Cart" buttons
    document.querySelectorAll('.addToCart').forEach(button => {
        button.addEventListener('click', function() {
            alert('Added to cart!');
        });
    });
});