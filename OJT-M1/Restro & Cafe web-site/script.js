document.addEventListener('DOMContentLoaded', () => {
    // Dark mode logic
    const darkModeBtn = document.getElementById('darkModeBtn');
    
    // Check local storage for dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            // Save preference
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }

    // Contact form logic
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            let name = document.getElementById('name').value.trim();
            let email = document.getElementById('email').value.trim();
            let phone = document.getElementById('phone').value.trim();
            let message = document.getElementById('message').value.trim();

            let error = document.getElementById('error');
            let success = document.getElementById('success');

            error.innerHTML = '';
            success.innerHTML = '';

            if(name === '' || email === '' || phone === '' || message === '') {
                error.innerHTML = 'Please fill all fields.';
                return;
            }

            let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

            if(!email.match(emailPattern)) {
                error.innerHTML = 'Please enter a valid email address.';
                return;
            }
            
            success.innerHTML = 'Message Sent Successfully!';
            contactForm.reset();
            
            // Remove success message after 3 seconds
            setTimeout(() => {
                success.innerHTML = '';
            }, 3000);
        });
    }

    // --- CART LOGIC ---
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartCount() {
        const cartCountEl = document.getElementById('cartCount');
        if (cartCountEl) {
            cartCountEl.innerText = cart.length;
        }
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }

    // Create Modal HTML dynamically
    function createCartModal() {
        const modalHTML = `
            <div id="cartModal" class="cart-modal">
                <div class="cart-modal-content">
                    <span class="close-cart">&times;</span>
                    <h2>Your Order</h2>
                    <div id="cartItemsList"></div>
                    <div class="cart-total">
                        <h3>Total: ₹<span id="cartTotalAmount">0</span></h3>
                    </div>
                    <button id="checkoutBtn" class="hero-btn primary-btn" style="width: 100%; margin-top: 20px;">Place Order</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        const cartBtn = document.getElementById('cartBtn');
        const cartModal = document.getElementById('cartModal');
        const closeCart = document.querySelector('.close-cart');
        
        if (cartBtn) {
            cartBtn.addEventListener('click', () => {
                renderCartItems();
                cartModal.style.display = 'flex';
            });
        }

        if (closeCart) {
            closeCart.addEventListener('click', () => {
                cartModal.style.display = 'none';
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.style.display = 'none';
            }
        });

        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                if (cart.length === 0) {
                    alert("Your cart is empty!");
                    return;
                }
                alert("Order placed successfully! Total amount: ₹" + cart.reduce((sum, item) => sum + item.price, 0));
                cart = [];
                saveCart();
                cartModal.style.display = 'none';
            });
        }
    }

    function renderCartItems() {
        const list = document.getElementById('cartItemsList');
        const totalEl = document.getElementById('cartTotalAmount');
        list.innerHTML = '';
        
        if (cart.length === 0) {
            list.innerHTML = '<p style="text-align:center; color:var(--text-light); margin-top: 20px;">No items in cart.</p>';
            totalEl.innerText = '0';
            return;
        }

        let total = 0;
        cart.forEach((item, index) => {
            total += item.price;
            list.innerHTML += `
                <div class="cart-item">
                    <span>${item.name}</span>
                    <span>₹${item.price} <button class="remove-item" data-index="${index}"><i class="fa-solid fa-trash"></i></button></span>
                </div>
            `;
        });
        totalEl.innerText = total;

        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = e.target.closest('button').getAttribute('data-index');
                cart.splice(idx, 1);
                saveCart();
                renderCartItems();
            });
        });
    }

    createCartModal();
    updateCartCount();

    // Attach click listeners to all add-to-cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemCard = e.target.closest('.menu-content');
            const name = itemCard.querySelector('h3').innerText;
            const priceText = itemCard.querySelector('.price').innerText;
            const price = parseInt(priceText.replace('₹', ''));
            
            cart.push({ name, price });
            saveCart();
            
            // Temporary feedback
            const originalText = e.currentTarget.innerHTML;
            e.currentTarget.innerHTML = '<i class="fa-solid fa-check"></i> Added';
            e.currentTarget.style.backgroundColor = 'var(--primary-color)';
            e.currentTarget.style.color = 'white';
            
            setTimeout(() => {
                e.currentTarget.innerHTML = originalText;
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--primary-color)';
            }, 1000);
        });
    });
});
