let cart = [];

// Function to add a product to the cart
function addToCart(productId, productName, productPrice) {
    const product = {
        id: productId,
        name: productName,
        price: productPrice
    };

    cart.push(product);
    updateCartCount();
    displayCart();
}

// Function to remove an item from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    displayCart();
}

// Function to display the cart
function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalDiv = document.getElementById('cart-total');

    cartItemsDiv.innerHTML = ''; // Clear current items in the cart

    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <p>${item.name} - $${item.price}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsDiv.appendChild(itemDiv);

        total += item.price;
    });

    cartTotalDiv.textContent = total.toFixed(2);
}

// Function to clear the cart
function clearCart() {
    cart = [];
    updateCartCount();
    displayCart();
}

// Function to update the cart item count in the header
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}
// Function to change the image when mouse is over
function changeImage(element, newSrc) {
    element.src = newSrc; // Change the source of the image
}

// Function to reset the image when mouse is out
function resetImage(element, originalSrc) {
    element.src = originalSrc; // Reset to the original image
}

  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active")
    })
});


  document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    const displayElement = document.getElementById('username-display');

    if (username && displayElement) {
      displayElement.textContent = username;
    }
  });

