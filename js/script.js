// ==================== ТОВАРЫ ====================
const products = [
    { factory: 'porevit', name: 'Поревит', location: 'Тюмень', density: 'D500', size: '625×200×250', volume: '1,875 м³', pallet: '~60 шт', price: '135 ₽', priceM3: '4 300 ₽/м³' },
    { factory: 'porablok', name: 'Пораблок', location: 'Курган', density: 'D500', size: '625×200×250', volume: '1,875 м³', pallet: '~60 шт', price: '120 ₽', priceM3: '3 900 ₽/м³' },
    { factory: 'insi', name: 'Инси', location: 'Зауральск', density: 'D500', size: '625×200×250', volume: '1,5 м³', pallet: '~60 шт', price: '141 ₽', priceM3: '4 500 ₽/м³' },
    { factory: 'twinblok', name: 'Твинблок', location: 'ТвинБлок', density: 'D500', size: '625×300×250', volume: '1,5 м³', pallet: '~40 шт', price: '180 ₽', priceM3: '3 850 ₽/м³' },
];

// ==================== КАТЕГОРИИ ====================
const categories = [
    { icon: '🧱', title: 'Газобетонные блоки', link: '#catalog' },
    { icon: '🧱', title: 'Кирпич рядовой', link: '#' },
    { icon: '🧱', title: 'Кирпич лицевой', link: '#' },
    { icon: '🏗️', title: 'Перемычки', link: '#' },
    { icon: '🏠', title: 'Кровля', link: '#' },
    { icon: '🧱', title: 'Тротуарная плитка', link: '#' },
    { icon: '🪨', title: 'Цемент', link: '#' },
    { icon: '🎨', title: 'Смеси для фасадов', link: '#' },
];

// ==================== РЕНДЕР КАТЕГОРИЙ ====================
const categoriesGrid = document.getElementById('categoriesGrid');
categories.forEach(cat => {
    const card = document.createElement('a');
    card.href = cat.link;
    card.className = 'category-card';
    card.innerHTML = `<div class="category-card__icon">${cat.icon}</div><div class="category-card__title">${cat.title}</div>`;
    categoriesGrid.appendChild(card);
});

// ==================== РЕНДЕР ТОВАРОВ ====================
const catalogGrid = document.getElementById('catalogGrid');

function renderProducts(filter = 'all') {
    catalogGrid.innerHTML = '';
    products.forEach(p => {
        if (filter !== 'all' && p.factory !== filter) return;
        const card = document.createElement('div');
        card.className = `product-card product-card--${p.factory}`;
        card.innerHTML = `
            <span class="product-card__badge">${p.density}</span>
            <div class="product-card__title">${p.name}</div>
            <div class="product-card__location">${p.location}</div>
            <div class="product-card__specs">
                <div class="product-card__spec">
                    <span class="product-card__spec-label">Размер</span>
                    <span class="product-card__spec-value">${p.size}</span>
                </div>
                <div class="product-card__spec">
                    <span class="product-card__spec-label">Объём</span>
                    <span class="product-card__spec-value">${p.volume}</span>
                </div>
            </div>
            <div class="product-card__price-row">
                <div>
                    <div class="product-card__price">${p.price}</div>
                    <div class="product-card__price-m3">${p.priceM3}</div>
                </div>
                <button class="btn btn--primary btn--sm">В корзину</button>
            </div>
        `;
        catalogGrid.appendChild(card);
    });
}
renderProducts();

// ==================== ФИЛЬТРЫ ====================
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts(btn.dataset.filter);
    });
});

// ==================== КАЛЬКУЛЯТОР ====================
document.getElementById('calcBtn').addEventListener('click', () => {
    const length = parseFloat(document.getElementById('calcLength').value);
    const height = parseFloat(document.getElementById('calcHeight').value);
    const width = parseInt(document.getElementById('calcWidth').value);
    const pricePerM3 = parseFloat(document.getElementById('calcPrice').value);
    const resultDiv = document.getElementById('calcResult');

    if (!length || !height || !pricePerM3) {
        resultDiv.className = 'calculator__result show';
        resultDiv.style.background = '#fef2f2';
        resultDiv.textContent = 'Заполните все поля';
        return;
    }

    const blockVolume = 0.625 * 0.25 * (width / 1000); // объём одного блока в м³
    const wallArea = length * height;
    const blocksCount = Math.ceil(wallArea / (0.625 * 0.25)); // кол-во блоков
    const totalVolume = blocksCount * blockVolume;
    const totalPrice = totalVolume * pricePerM3;

    resultDiv.className = 'calculator__result show';
    resultDiv.style.background = '#f0fdf4';
    resultDiv.innerHTML = `
        📦 Блоков: <strong>${blocksCount} шт</strong><br>
        📐 Объём: <strong>${totalVolume.toFixed(2)} м³</strong><br>
        💰 Цена: <strong>${totalPrice.toFixed(0)} ₽</strong>
    `;
});

// ==================== ФОРМА ЗАЯВКИ ====================
document.getElementById('orderForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.textContent = '✓ Отправлено!';
    btn.style.background = '#16a34a';
    e.target.reset();
    setTimeout(() => {
        btn.textContent = 'Отправить заявку';
        btn.style.background = '';
    }, 2000);
});

// ==================== КНОПКИ "В КОРЗИНУ" ====================
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn--sm') && e.target.textContent === 'В корзину') {
        e.target.textContent = '✓ Добавлено';
        e.target.style.background = '#16a34a';
        setTimeout(() => {
            e.target.textContent = 'В корзину';
            e.target.style.background = '';
        }, 800);
    }
});

console.log('✅ Первый Блок — сайт готов. Фильтры, калькулятор, заявка работают.');