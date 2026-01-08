// Products are loaded globally from products.js

// State management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Constants
const CURRENCY_FORMATTER = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
});

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    
    // Check which page we are on
    const productGrid = document.querySelector('.product-grid');
    if (productGrid) {
        // Renting either index or products page
        const isFeatured = productGrid.dataset.featured === 'true';
        renderProducts(isFeatured ? products.slice(0, 4) : products);
    }

    const cartTable = document.querySelector('.cart-items-body');
    if (cartTable) {
        renderCart();
    }

    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        setupCheckout();
    }
});

// Functions
function updateCartBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    badges.forEach(badge => {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'block' : 'none';
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartBadge();
    showToast(`${product.name} added to cart!`);
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function renderProducts(items) {
    const container = document.querySelector('.product-grid');
    if (!container) return;

    container.innerHTML = items.map(product => `
        <div class="product-card" style="animation: fadeInUp ${0.5 + product.id * 0.1}s ease forwards">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-cat">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${CURRENCY_FORMATTER.format(product.price)}</span>
                    <button class="btn btn-primary add-to-cart" data-id="${product.id}">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Add event listeners
    container.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            addToCart(id);
        });
    });
}

function renderCart() {
    const container = document.querySelector('.cart-items-body');
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalEl = document.getElementById('cart-total');
    
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = '<tr><td colspan="4" style="text-align:center; padding: 4rem 0;">Your cart is empty. <a href="products.html" style="color: var(--primary)">Start shopping</a></td></tr>';
        if (subtotalEl) subtotalEl.textContent = CURRENCY_FORMATTER.format(0);
        if (totalEl) totalEl.textContent = CURRENCY_FORMATTER.format(0);
        return;
    }

    container.innerHTML = cart.map((item, index) => `
        <tr>
            <td>
                <div class="cart-item-info">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div>
                        <h4 style="margin-bottom: 0.25rem">${item.name}</h4>
                        <span class="remove-btn" data-index="${index}">Remove</span>
                    </div>
                </div>
            </td>
            <td>${CURRENCY_FORMATTER.format(item.price)}</td>
            <td>
                <div class="quantity-controls">
                    <button class="qty-btn minus" data-index="${index}">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn plus" data-index="${index}">+</button>
                </div>
            </td>
            <td>${CURRENCY_FORMATTER.format(item.price * item.quantity)}</td>
        </tr>
    `).join('');

    // Totals
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    if (subtotalEl) subtotalEl.textContent = CURRENCY_FORMATTER.format(subtotal);
    if (totalEl) totalEl.textContent = CURRENCY_FORMATTER.format(subtotal);

    // Event listeners
    container.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            if (e.target.classList.contains('plus')) {
                cart[index].quantity += 1;
            } else if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            }
            saveCart();
            renderCart();
            updateCartBadge();
        });
    });

    container.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            cart.splice(index, 1);
            saveCart();
            renderCart();
            updateCartBadge();
        });
    });
}

function setupCheckout() {
    const form = document.getElementById('checkout-form');
    const summaryList = document.querySelector('.checkout-summary-items');
    const totalEl = document.getElementById('checkout-total');

    if (summaryList) {
        summaryList.innerHTML = cart.map(item => `
            <div style="display: flex; justify-content: space-between; margin-bottom: 1rem; font-size: 0.9rem">
                <span>${item.name} (x${item.quantity})</span>
                <span>${CURRENCY_FORMATTER.format(item.price * item.quantity)}</span>
            </div>
        `).join('');
    }

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    if (totalEl) totalEl.textContent = CURRENCY_FORMATTER.format(total);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your purchase! Your order has been placed successfully.');
        cart = [];
        saveCart();
        window.location.href = 'index.html';
    });
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    // Dynamic style for toast if not in CSS
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        background: 'var(--success)',
        color: 'white',
        padding: '1rem 2rem',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        zIndex: '2000',
        animation: 'fadeInUp 0.3s ease'
    });

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        toast.style.transition = 'var(--transition)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
