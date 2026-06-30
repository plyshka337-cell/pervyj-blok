// ==================== КАТЕГОРИИ ====================
const categories = [
    { id: 'gazobeton', icon: '🧱', title: 'Газобетонные блоки' },
    { id: 'kirpich-ryad', icon: '🧱', title: 'Кирпич рядовой' },
    { id: 'kirpich-lic', icon: '🧱', title: 'Кирпич лицевой' },
    { id: 'peremichki', icon: '🏗️', title: 'Перемычки' },
    { id: 'krovlya', icon: '🏠', title: 'Кровля' },
    { id: 'plitka', icon: '🧱', title: 'Тротуарная плитка' },
    { id: 'cement', icon: '🪨', title: 'Цемент' },
    { id: 'smesi', icon: '🎨', title: 'Смеси для фасадов' },
];

// ==================== ТОВАРЫ ====================
const products = [
    // ГАЗОБЕТОН — Поревит
    { cat: 'gazobeton', factory: 'porevit', name: 'Поревит', location: 'Тюмень', density: 'D500', size: '625×100×250', volume: '0,0156 м³', pallet: '~120 шт', price: '68 ₽', priceM3: '4 300 ₽/м³' },
    { cat: 'gazobeton', factory: 'porevit', name: 'Поревит', location: 'Тюмень', density: 'D500', size: '625×150×250', volume: '0,0234 м³', pallet: '~80 шт', price: '101 ₽', priceM3: '4 300 ₽/м³' },
    { cat: 'gazobeton', factory: 'porevit', name: 'Поревит', location: 'Тюмень', density: 'D500', size: '625×200×250', volume: '0,0313 м³', pallet: '~60 шт', price: '135 ₽', priceM3: '4 300 ₽/м³' },
    { cat: 'gazobeton', factory: 'porevit', name: 'Поревит', location: 'Тюмень', density: 'D500', size: '625×250×250', volume: '0,0391 м³', pallet: '~48 шт', price: '168 ₽', priceM3: '4 300 ₽/м³' },
    { cat: 'gazobeton', factory: 'porevit', name: 'Поревит', location: 'Тюмень', density: 'D500', size: '625×300×250', volume: '0,0469 м³', pallet: '~40 шт', price: '202 ₽', priceM3: '4 300 ₽/м³' },
    { cat: 'gazobeton', factory: 'porevit', name: 'Поревит', location: 'Тюмень', density: 'D500', size: '625×400×250', volume: '0,0625 м³', pallet: '~32 шт', price: '269 ₽', priceM3: '4 300 ₽/м³' },
    // ГАЗОБЕТОН — Пораблок
    { cat: 'gazobeton', factory: 'porablok', name: 'Пораблок', location: 'Курган', density: 'D500', size: '625×100×250', volume: '0,0156 м³', pallet: '~120 шт', price: '60 ₽', priceM3: '3 850 ₽/м³' },
    { cat: 'gazobeton', factory: 'porablok', name: 'Пораблок', location: 'Курган', density: 'D500', size: '625×150×250', volume: '0,0234 м³', pallet: '~80 шт', price: '90 ₽', priceM3: '3 850 ₽/м³' },
    { cat: 'gazobeton', factory: 'porablok', name: 'Пораблок', location: 'Курган', density: 'D500', size: '625×200×250', volume: '0,0313 м³', pallet: '~60 шт', price: '120 ₽', priceM3: '3 850 ₽/м³' },
    { cat: 'gazobeton', factory: 'porablok', name: 'Пораблок', location: 'Курган', density: 'D500', size: '625×250×250', volume: '0,0391 м³', pallet: '~48 шт', price: '151 ₽', priceM3: '3 850 ₽/м³' },
    { cat: 'gazobeton', factory: 'porablok', name: 'Пораблок', location: 'Курган', density: 'D500', size: '625×300×250', volume: '0,0469 м³', pallet: '~40 шт', price: '181 ₽', priceM3: '3 850 ₽/м³' },
    { cat: 'gazobeton', factory: 'porablok', name: 'Пораблок', location: 'Курган', density: 'D500', size: '625×400×250', volume: '0,0625 м³', pallet: '~32 шт', price: '241 ₽', priceM3: '3 850 ₽/м³' },
    // ГАЗОБЕТОН — Инси
    { cat: 'gazobeton', factory: 'insi', name: 'Инси', location: 'Зауральск', density: 'D500', size: '625×100×250', volume: '0,0156 м³', pallet: '~120 шт', price: '71 ₽', priceM3: '4 500 ₽/м³' },
    { cat: 'gazobeton', factory: 'insi', name: 'Инси', location: 'Зауральск', density: 'D500', size: '625×200×250', volume: '0,0313 м³', pallet: '~60 шт', price: '141 ₽', priceM3: '4 500 ₽/м³' },
    { cat: 'gazobeton', factory: 'insi', name: 'Инси', location: 'Зауральск', density: 'D500', size: '625×300×250', volume: '0,0469 м³', pallet: '~40 шт', price: '211 ₽', priceM3: '4 500 ₽/м³' },
    { cat: 'gazobeton', factory: 'insi', name: 'Инси', location: 'Зауральск', density: 'D500', size: '625×400×250', volume: '0,0625 м³', pallet: '~32 шт', price: '281 ₽', priceM3: '4 500 ₽/м³' },
    // КИРПИЧ РЯДОВОЙ (заглушки)
    { cat: 'kirpich-ryad', factory: 'kirpich', name: 'Кирпич рядовой', location: 'М-150', density: '', size: '250×120×65', volume: '', pallet: '~360 шт', price: '18 ₽', priceM3: '' },
    // КИРПИЧ ЛИЦЕВОЙ (заглушки)
    { cat: 'kirpich-lic', factory: 'kirpich', name: 'Кирпич лицевой', location: 'Красный', density: '', size: '250×120×65', volume: '', pallet: '~360 шт', price: '25 ₽', priceM3: '' },
    // ЦЕМЕНТ (заглушки)
    { cat: 'cement', factory: 'cement', name: 'Цемент ПЦ-500', location: 'М-500', density: '', size: '50 кг', volume: '', pallet: '', price: '420 ₽', priceM3: '' },
];

// ==================== РЕНДЕР БОКОВОГО МЕНЮ ====================
const sidebar = document.getElementById('catalogSidebar');
const grid = document.getElementById('catalogGrid');

// Кнопка "Все товары"
const allBtn = document.createElement('button');
allBtn.className = 'catalog__cat';
allBtn.textContent = 'Все товары';
allBtn.dataset.cat = 'all';
sidebar.appendChild(allBtn);

categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'catalog__cat';
    btn.textContent = `${cat.icon} ${cat.title}`;
    btn.dataset.cat = cat.id;
    sidebar.appendChild(btn);
});

// ==================== РЕНДЕР ТОВАРОВ ====================
function renderProducts(filter = 'all', factoryFilter = 'all') {
    grid.innerHTML = '';
    let filtered = products;

    if (filter !== 'all') {
        filtered = filtered.filter(p => p.cat === filter);
    }
    if (factoryFilter !== 'all') {
        filtered = filtered.filter(p => p.factory === factoryFilter);
    }

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="text-align:center;color:#9ca3af;grid-column:1/-1;padding:3rem;">Товары скоро появятся</p>';
        return;
    }

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = `product-card product-card--${p.factory}`;
        card.innerHTML = `
            <div class="product-card__img">
                <div class="product-card__img-placeholder">🧱</div>
            </div>
            <div class="product-card__title">${p.name}</div>
            <div class="product-card__location">${p.location} ${p.density ? '• ' + p.density : ''}</div>
            <div class="product-card__specs">
                <div class="product-card__spec"><span class="product-card__spec-label">Размер</span><span class="product-card__spec-value">${p.size}</span></div>
                <div class="product-card__spec"><span class="product-card__spec-label">Объём</span><span class="product-card__spec-value">${p.volume || '—'}</span></div>
            </div>
            <div class="product-card__price-row">
                <div>
                    <div class="product-card__price">${p.price}</div>
                    ${p.priceM3 ? `<div class="product-card__price-m3">${p.priceM3}</div>` : ''}
                </div>
                <button class="btn--sm">В корзину</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ==================== КЛИКИ ПО КАТЕГОРИЯМ ====================
sidebar.addEventListener('click', (e) => {
    if (e.target.classList.contains('catalog__cat')) {
        document.querySelectorAll('.catalog__cat').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderProducts(e.target.dataset.cat);
    }
});

// ==================== ЧИТАЕМ URL ПАРАМЕТРЫ (при переходе с главной) ====================
const params = new URLSearchParams(window.location.search);
const catParam = params.get('cat');
const factoryParam = params.get('factory');

let activeCat = 'all';
if (catParam) {
    activeCat = catParam;
    const btn = document.querySelector(`.catalog__cat[data-cat="${catParam}"]`);
    if (btn) btn.classList.add('active');
} else {
    allBtn.classList.add('active');
}

renderProducts(activeCat, factoryParam || 'all');

// ==================== КНОПКИ "В КОРЗИНУ" ====================
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn--sm') && e.target.textContent === 'В корзину') {
        e.target.textContent = '✓ Добавлено';
        e.target.style.background = '#16a34a';
        setTimeout(() => { e.target.textContent = 'В корзину'; e.target.style.background = ''; }, 800);
    }
});

console.log('✅ Каталог готов');