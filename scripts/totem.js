function formatPrice(price) {
    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice)) return 'R$ 0,00';
    return numericPrice.toFixed(2).replace('.', ',');
}

function calcularTotal(cartItems) {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function showAppAlert(title, message, onAction = null, isConfirmation = false) {
    const modalElement = document.getElementById('appAlertModal');
    if (!modalElement || typeof bootstrap === 'undefined') {
        if (onAction) {
            if (confirm(`${title}\n\n${message}`)) {
                onAction();
            }
        } else {
            alert(`${title}\n\n${message}`);
        }
        return;
    }

    const titleEl = document.getElementById('appAlertModalLabel');
    const messageEl = document.getElementById('appAlertMessage');
    const buttonsContainer = document.getElementById('appAlertButtons');

    titleEl.textContent = title;
    messageEl.textContent = message;

    buttonsContainer.innerHTML = '';

    if (onAction && isConfirmation) {

        const cancelBtn = document.createElement('button');
        cancelBtn.type = 'button';
        cancelBtn.className = 'btn btn-secondary w-45 py-3 me-3';
        cancelBtn.textContent = 'CANCELAR';
        cancelBtn.setAttribute('data-bs-dismiss', 'modal');
        cancelBtn.style.cssText = 'background: #e9f4fd; color: #1a2c42; font-family: "Kameron", serif; font-weight: 700; font-size: 18px; border-radius: 15px; border: 2px solid #9ab5d7;';

        const confirmBtn = document.createElement('button');
        confirmBtn.type = 'button';
        confirmBtn.className = 'btn btn-primary w-45 py-3';
        confirmBtn.textContent = 'SIM';
        confirmBtn.style.cssText = 'width: 30%; background: #9ab5d7; color: #1a2c42; font-family: "Kameron", serif; font-weight: 700; font-size: 18px; border-radius: 15px;';

        confirmBtn.addEventListener('click', () => {
            onAction();
            bootstrap.Modal.getInstance(modalElement).hide();
        });

        buttonsContainer.append(cancelBtn, confirmBtn);

    } else if (onAction) {

        const okBtn = document.createElement('button');
        okBtn.type = 'button';
        okBtn.className = 'btn btn-primary w-50 py-3';
        okBtn.textContent = 'OK';
        okBtn.style.cssText = 'background: #9ab5d7; color: #1a2c42; font-family: "Kameron", serif; font-weight: 700; font-size: 18px; border-radius: 15px;';

        okBtn.addEventListener('click', () => {
            onAction();
            bootstrap.Modal.getInstance(modalElement).hide();
        });

        buttonsContainer.append(okBtn);
    }
    else {

        const okBtn = document.createElement('button');
        okBtn.type = 'button';
        okBtn.className = 'btn btn-primary w-50 py-3';
        okBtn.textContent = 'OK';
        okBtn.setAttribute('data-bs-dismiss', 'modal');
        okBtn.style.cssText = 'background: #9ab5d7; color: #1a2c42; font-family: "Kameron", serif; font-weight: 700; font-size: 18px; border-radius: 15px;';

        buttonsContainer.append(okBtn);
    }

    const modal = new bootstrap.Modal(modalElement);
    modal.show();
}


class CafeTotem {
    constructor() {
        this.selectedCategory = 'hotCoffees';
        this.cartItems = JSON.parse(localStorage.getItem('totemCart')) || [];
        this.selectedProduct = null;
        this.excludedIngredients = [];

        this.init();
    }

    saveCart() {
        localStorage.setItem('totemCart', JSON.stringify(this.cartItems));
    }

    init() {
        this.renderCategories();
        this.renderProducts();
        this.updateCartDisplay();
        this.bindEvents();
        this.selectCategory('hotCoffees');
    }

    bindEvents() {

        document.getElementById('closeBtn').addEventListener('click', () => {
            showAppAlert(
                'Fechando',
                'O aplicativo está sendo fechado e estamos esvaziando o carrinho.',
                () => {
                    this.cartItems = [];
                    this.saveCart();
                    this.updateCartDisplay();

                    setTimeout(() => {
                        window.location.href = 'inicio.html';
                    }, 1000);
                }
            );
        });

        document.getElementById('cartBtn').addEventListener('click', () => {
            this.showCartModal();
        });

        document.getElementById('confirmBtn').addEventListener('click', () => {
            this.confirmOrder();
        });

        document.getElementById('addToCartBtn').addEventListener('click', () => {
            if (this.selectedProduct) {
                this.addToCart(this.selectedProduct);
                this.hideProductModal();
            }
        });
    }

    renderCategories() {
        const buttonsContainer = document.querySelector('#categorySidebar .category-buttons-container');
        buttonsContainer.innerHTML = '';
        CATEGORIES.forEach(category => {
            const button = document.createElement('button');
            button.className = 'category-btn';
            button.setAttribute('data-category', category.id);
            button.innerHTML = `
                <div class="icon">
                    <img src="${category.imagePath}" alt="${category.name}" class="category-icon-img">
                </div>
                <span class="text">${category.name}</span>
                <div class="triangle d-none"></div>
            `;
            button.addEventListener('click', () => {
                this.selectCategory(category.id);
            });
            buttonsContainer.appendChild(button);
        });
    }

    selectCategory(categoryId) {
        this.selectedCategory = categoryId;
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
            btn.querySelector('.triangle').classList.add('d-none');
        });
        const activeBtn = document.querySelector(`[data-category="${categoryId}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
            activeBtn.querySelector('.triangle').classList.remove('d-none');
        }
        document.getElementById('categoryTitle').textContent = CATEGORY_NAMES[categoryId];
        this.renderProducts();
    }


    renderProducts() {

        const grid = document.getElementById('productsGrid');
        const emptyMessage = document.getElementById('emptyMessage');
        const categoryTitleEl = document.getElementById('categoryTitle');

        const products = PRODUCTS[this.selectedCategory] || [];
        grid.innerHTML = '';

        if (products.length === 0) {
            emptyMessage.classList.remove('d-none');
            return;
        }

        emptyMessage.classList.add('d-none');

        products.forEach(product => {

            const productData = product.i18n ? product.i18n[lang] : product;

            const col = document.createElement('div');
            col.className = 'col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3';
            const card = document.createElement('div');
            card.className = 'product-card fade-in';
            card.style.cursor = 'pointer';

            card.innerHTML = `
            <div class="image">
                <img src="${product.image}" alt="${productData.name}" loading="lazy">
            </div>
            <div class="content">
                <h3 class="name">${productData.name}</h3>
                <p class="price">R$ ${formatPrice(product.price)}</p>
            </div>
        `;
            card.addEventListener('click', () => {
                this.showProductModal(product);
            });
            col.appendChild(card);
            grid.appendChild(col);
        });
    }

    showProductModal(product) {

        const lang = localStorage.getItem('appLanguage') || 'pt-BR';

        const productData = product.i18n ? product.i18n[lang] : product;

        this.selectedProduct = product;
        this.excludedIngredients = [];

        document.getElementById('modalProductName').textContent = productData.name;
        document.getElementById('modalProductImage').src = product.image;
        document.getElementById('modalProductImage').alt = productData.name;

        document.getElementById('modalProductPrice').textContent = `R$ ${formatPrice(product.price)}`;
        document.getElementById('modalProductDescription').textContent = productData.description;

        this.renderModalIngredients(product);

        const modal = new bootstrap.Modal(document.getElementById('productModal'));
        modal.show();
    }
    hideProductModal() {
        const modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
        if (modal) {
            modal.hide();
        }
    }

    toggleIngredient(ingredient) {
        const index = this.excludedIngredients.indexOf(ingredient);

        if (index > -1) {
            this.excludedIngredients.splice(index, 1);
        } else {
            this.excludedIngredients.push(ingredient);
        }
        this.renderModalIngredients(this.selectedProduct);
    }

    renderModalIngredients(product) {
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';

        const productData = product.i18n ? product.i18n[lang] : product;
        const ingredients = productData.ingredients || [];

        const ingredientsContainer = document.getElementById('modalProductIngredientsList');
        ingredientsContainer.innerHTML = '';

        if (ingredients.length === 0) {
            ingredientsContainer.innerHTML = '<span class="text-muted" data-i18n-key="modal.no_ingredients">Não aplicável.</span>';
            return;
        }

        ingredients.forEach(ingredient => {

            const isExcluded = this.excludedIngredients.includes(ingredient);

            const button = document.createElement('button');
            button.className = 'ingredient-tag btn border-0';
            button.textContent = ingredient;

            if (isExcluded) {
                button.classList.add('excluded');
            }

            button.addEventListener('click', () => {
                this.toggleIngredient(ingredient);
            });
            ingredientsContainer.appendChild(button);
        });
    }

    addToCart(product) {

        const baseId = product.id;
        const exclusions = this.excludedIngredients.sort().join(',');
        const uniqueId = `${baseId}-${exclusions}`;

        const existingItem = this.cartItems.find(item => item.uniqueId === uniqueId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cartItems.push({
                uniqueId: uniqueId,
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
                image: product.image,
                excludedIngredients: this.excludedIngredients
            });
        }

        this.updateCartDisplay();
        this.saveCart();
    }

    updateCartDisplay() {
        const totalItems = this.cartItems.reduce((total, item) => total + item.quantity, 0);
        const subtotal = calcularTotal(this.cartItems);

        document.getElementById('cartCount').textContent = totalItems;
        document.getElementById('subtotal').textContent = `R$ ${formatPrice(subtotal)}`;
    }

    showCartModal() {
        this.renderCartItems();
        const modal = new bootstrap.Modal(document.getElementById('cartModal'));
        modal.show();
    }

    renderCartItems() {
        const totalItems = this.cartItems.reduce((total, item) => total + item.quantity, 0);
        const total = calcularTotal(this.cartItems);

        document.getElementById('cartModalCount').textContent = totalItems;
        document.getElementById('cartTotal').textContent = `R$ ${formatPrice(total)}`;

        const emptyMessage = document.getElementById('cartEmptyMessage');
        const itemsList = document.getElementById('cartItemsList');
        const footer = document.getElementById('cartFooter');

        if (this.cartItems.length === 0) {
            emptyMessage.classList.remove('d-none');
            itemsList.classList.add('d-none');
            footer.classList.add('d-none');
            return;
        }

        emptyMessage.classList.add('d-none');
        itemsList.classList.remove('d-none');
        footer.classList.remove('d-none');

        itemsList.innerHTML = '';

        this.cartItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item d-flex align-items-center gap-3';

            let exclusionHtml = '';
            if (item.excludedIngredients && item.excludedIngredients.length > 0) {
                const excludedList = item.excludedIngredients.join(', ');
                exclusionHtml = `
                    <p class="mb-0" style="font-family: 'Kameron', serif; font-size: 12px; font-weight: 500; color: #dc2626;">
                        Sem: ${excludedList}
                    </p>
                `;
            }

            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="item-image">
                
                <div class="flex-grow-1" style="width: 2px;">
                    <h5 class="mb-1" style="font-family: 'Kameron', serif; font-weight: 500; color: #1a2c42; font-size: 16px;">
                        ${item.name}
                    </h5>
                    <p class="mb-0" style="font-family: 'Kameron', serif; color: #1a2c42; font-size: 14px;">
                        R$ ${formatPrice(item.price)}
                    </p>
                    ${exclusionHtml}
                </div>

                <div class="d-flex align-items-center gap-2">
                    <button class="quantity-btn" onclick="totem.updateQuantity('${item.uniqueId}', ${item.quantity - 1})">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a2c42" stroke-width="2">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    
                    <span style="font-family: 'Kameron', serif; font-weight: 500; color: #1a2c42; font-size: 16px; min-width: 24px; text-align: center;">
                        ${item.quantity}
                    </span>
                    
                    <button class="quantity-btn" onclick="totem.updateQuantity('${item.uniqueId}', ${item.quantity + 1})">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a2c42" stroke-width="2">
                            <path d="M12 5v14M5 12h14"></path>
                        </svg>
                    </button>
                </div>

                <button class="remove-btn" onclick="totem.removeItem('${item.uniqueId}')">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2">
                        <path d="m3 6 3 0M21 6l-3 0m0 0-1.5 15h-9L6 6m2 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>

                <div class="text-end" style="min-width: 80px;">
                    <p class="mb-0" style="font-family: 'Kameron', serif; font-weight: 600; color: #1a2c42; font-size: 16px;">
                        R$ ${formatPrice(item.price * item.quantity)}
                    </p>
                </div>
            `;

            itemsList.appendChild(itemDiv);
        });
    }

    updateQuantity(uniqueId, newQuantity) {
        if (newQuantity <= 0) {
            this.removeItem(uniqueId);
            return;
        }

        const item = this.cartItems.find(item => item.uniqueId === uniqueId);
        if (item) {
            item.quantity = newQuantity;
            this.updateCartDisplay();
            this.renderCartItems();
        }

        this.saveCart();
    }

    removeItem(uniqueId) {
        this.cartItems = this.cartItems.filter(item => item.uniqueId !== uniqueId);
        this.updateCartDisplay();
        this.renderCartItems();
        this.saveCart();
    }

    confirmOrder() {
        if (this.cartItems.length === 0) {
            showAppAlert(
                'Pedido Cancelado!',
                'Seu carrinho está vazio.'
            );
            return;
        }

        const finalTotal = calcularTotal(this.cartItems);

        localStorage.setItem('finalOrderTotal', finalTotal.toFixed(2));
        localStorage.setItem('finalOrderItems', JSON.stringify(this.cartItems));

        window.location.href = 'confirmacao.html';
    }
}

function renderOrderItems(items) {
    const listContainer = document.getElementById('orderItemsList');

    if (!listContainer) return;

    listContainer.innerHTML = '';

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'd-flex justify-content-between align-items-center mb-3 pb-3';
        itemDiv.style.borderBottom = '1px dashed #e9f4fd';

        let exclusionDetails = '';
        if (item.excludedIngredients && item.excludedIngredients.length > 0) {
            const excludedList = item.excludedIngredients.join(', ');
            exclusionDetails = `
                    <p class="mb-0 mt-1" style="font-size: 0.8rem; color: #dc2626; font-style: italic; width: 11rem;">
                        (Sem: ${excludedList})
                    </p>
                `;
        }

        itemDiv.innerHTML = `
                <div class="d-flex align-items-center">
                    <img src="${item.image}" alt="${item.name}" 
                                style="width: 100px; height: 100px; object-fit: cover; border-radius: 8px; margin-right: 15px;">
                    <div>
                        <p class="mb-0" style="font-family: 'Kameron', serif; font-weight: 600; color: #1a2c42; font-size: 1rem;">
                            ${item.quantity}x ${item.name}
                        </p>
                        ${exclusionDetails}
                    </div>
                </div>
                <div class="text-end">
                    <p class="mb-0" style="font-family: 'Kameron', serif; font-weight: 600; color: #1a2c42; font-size: 1rem;">
                        R$ ${formatPrice(item.price * item.quantity)}
                    </p>
                </div>
            `;

        listContainer.appendChild(itemDiv);
    });

    if (listContainer.lastChild) {
        listContainer.lastChild.style.borderBottom = 'none';
    }
}

function initResumoPage() {
    const finalTotalString = localStorage.getItem('finalOrderTotal');
    const totalEl = document.getElementById('totalPriceConfirmacao');
    const closeButton = document.getElementById('closeBtn');

    if (closeButton) {
        closeButton.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
    }

    if (totalEl && finalTotalString) {
        totalEl.textContent = `R$ ${formatPrice(finalTotalString)}`;
    } else if (totalEl) {
        totalEl.textContent = 'R$ 0,00';
    }

    const finalItemsString = localStorage.getItem('finalOrderItems');

    if (finalItemsString) {
        try {
            const items = JSON.parse(finalItemsString);
            renderOrderItems(items);
        } catch (e) {
            console.error('Erro ao processar itens finais do pedido:', e);
        }
    }

    window.cancelOrder = function () {
        window.location.href = 'index.html';
    };
}

function startNewOrder() {
    window.location.href = 'pagamento.html';
}

function cancelOrder() {
    window.location.href = 'index.html';
}

let orderNumber = parseInt(localStorage.getItem('finalOrderNumber') || '0', 10);

function initPaymentPage() {
    const confirmBtn = document.getElementById('confirmPaymentBtn');

    if (confirmBtn) {
        confirmBtn.addEventListener('click', (event) => {
            event.preventDefault();

            const password = document.getElementById('formGroupExampleInput').value;

            if (password.length < 4) {
                showAppAlert(
                    'Erro de Pagamento',
                    'A senha deve ter no mínimo 4 dígitos.'
                );
                return;
            }

            showAppAlert(
                'Pagamento Aprovado!',
                'Sua transação foi concluída com sucesso. Por favor, retire o seu pedido na área de balcão. Obrigado!',
                () => {
                    orderNumber += 1;
                    localStorage.setItem('finalOrderNumber', orderNumber);
                    finalizarCompra('Cartão de Crédito');
                }
            );
        });
    }
}

function initPixPage() {
    const confirmBtn = document.getElementById('confirmPaymentBtn');

    if (confirmBtn) {
        confirmBtn.addEventListener('click', (event) => {
            event.preventDefault();

            showAppAlert(
                'Pagamento Aprovado!',
                'Sua transação PIX foi concluída com sucesso. Por favor, retire o seu pedido na área de balcão. Obrigado!',
                () => {
                    orderNumber += 1;
                    localStorage.setItem('finalOrderNumber', orderNumber);
                    finalizarCompra('PIX');
                },
                false
            );
        });
    }
}

function initMoneyPage() {
    const confirmBtn = document.getElementById('confirmPaymentBtn');

    if (confirmBtn) {
        confirmBtn.addEventListener('click', (event) => {
            event.preventDefault();

            showAppAlert(
                'Pagamento Aprovado!',
                'Obrigado! Seu pagamento em dinheiro foi confirmado. Seu pedido já está sendo preparado. Por favor, retire-o na área de balcão.',
                () => {
                    orderNumber += 1;
                    localStorage.setItem('finalOrderNumber', orderNumber);
                    finalizarCompra('Dinheiro');
                },
                false
            );
        });
    }
}

function finalizarCompra(metodoPagamento) {

    const itensDoCarrinho = JSON.parse(localStorage.getItem('totemCart') || '[]');
    const total = calcularTotal(itensDoCarrinho);

    if (itensDoCarrinho.length === 0) {

        window.location.href = 'inicio.html';
        return;
    }
    const numeroPedido = parseInt(localStorage.getItem('finalOrderNumber'), 10) || 0;

    const pedidoFinal = {

        numeroPedido: numeroPedido,
        dataHora: new Date().toLocaleString('pt-BR'),
        metodoPagamento: metodoPagamento,
        total: total,
        itens: itensDoCarrinho
    };

    localStorage.setItem('lastOrder', JSON.stringify(pedidoFinal));

    localStorage.removeItem('totemCart');

    window.location.href = 'notaFiscal.html';
}

function initNotaFiscalPage() {
    const pedidoString = localStorage.getItem('lastOrder');
    const pedido = JSON.parse(pedidoString);

    if (!pedido || pedido.itens.length === 0) {
        window.location.href = 'inicio.html';
        return;
    }

    const orderInfoEl = document.getElementById('orderInfo');
    const itemsListEl = document.getElementById('itemsList');
    const totalAreaEl = document.getElementById('totalArea');

    orderInfoEl.innerHTML = `
        <p><strong>Nº Pedido:</strong> ${pedido.numeroPedido}</p>
        <p><strong>Data/Hora:</strong> ${pedido.dataHora}</p>
        <p><strong>Pagamento:</strong> ${pedido.metodoPagamento}</p>
    `;

    let itemsHTML = '';
    pedido.itens.forEach(item => {
        const subtotal = item.price * item.quantity;
        let exclusionDetail = '';
        if (item.excludedIngredients && item.excludedIngredients.length > 0) {
            exclusionDetail = `<small class="text-danger" style="font-size: 0.8rem;"> (Sem: ${item.excludedIngredients.join(', ')})</small>`;
        }

        itemsHTML += `
            <div class="receipt-item d-flex justify-content-between align-items-start py-1">
                <span class="item-name">${item.quantity}x ${item.name} ${exclusionDetail}</span>
                <span class="item-price text-end">R$ ${formatPrice(subtotal)}</span>
            </div>
        `;
    });
    itemsListEl.innerHTML = itemsHTML;

    totalAreaEl.innerHTML = `
        <div class="total-line d-flex justify-content-between mt-3">
            <span class="fs-4">TOTAL:</span>
            <span class="fs-4 fw-bold">R$ ${formatPrice(pedido.total)}</span>
        </div>
        <p class="text-center mt-4 fst-italic">Obrigado por sua preferência!</p>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    const path = window.location.pathname;

    if (path.includes('index.html') || path.endsWith('/')) {
        window.totem = new CafeTotem();
    }

    if (path.includes('confirmacao.html')) {
        initResumoPage();
    }

    if (path.includes('notaFiscal.html')) {
        initNotaFiscalPage();
    }

    if (path.includes('cartao.html')) {
        initPaymentPage();
    }

    if (path.includes('pix.html')) {
        initPixPage();
    }

    if (path.includes('dinheiro.html')) {
        initMoneyPage();
    }

    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    document.addEventListener('touchstart', function (e) {
        if (e.target.closest('.btn, .product-card, .category-btn')) {
            e.target.style.transform = 'scale(0.98)';
        }
    });

    document.addEventListener('touchend', function (e) {
        if (e.target.closest('.btn, .product-card, .category-btn')) {
            setTimeout(() => {
                e.target.style.transform = '';
            }, 100);
        }
    });
});