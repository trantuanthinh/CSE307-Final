document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            name: "Guitar",
            image: "guitar.jpg",
            price: 500,
        },
        {
            name: "Piano",
            image: "piano.jpg",
            price: 1000,
        },
        // Add more products as needed
    ];

    const productsSection = document.getElementById("products");
    const cartSection = document.getElementById("cart");
    const cartItemsList = document.getElementById("cart-items");
    const checkoutBtn = document.getElementById("checkout-btn");

    function createProductCard(product) {
        const card = document.createElement("div");
        card.classList.add("product");

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;

        const name = document.createElement("h2");
        name.textContent = product.name;

        const price = document.createElement("p");
        price.textContent = `$${product.price}`;

        const addToCartBtn = document.createElement("button");
        addToCartBtn.textContent = "Add to Cart";
        addToCartBtn.addEventListener("click", function () {
            addToCart(product);
        });

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(addToCartBtn);

        productsSection.appendChild(card);
    }

    function addToCart(product) {
        const cartItem = document.createElement("li");
        cartItem.textContent = `${product.name} - $${product.price}`;
        cartItemsList.appendChild(cartItem);
    }

    function showCart() {
        cartSection.style.display = "block";
    }

    function hideCart() {
        cartSection.style.display = "none";
    }

    checkoutBtn.addEventListener("click", function () {
        alert("Checkout functionality is not implemented in this example.");
        // Add actual checkout functionality here
    });

    // Populate product cards
    products.forEach(createProductCard);
});
