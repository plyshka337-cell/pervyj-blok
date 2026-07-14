
// ==================== КАЛЬКУЛЯТОР ====================
const calcBtn = document.getElementById('calcBtn');
if (calcBtn) {
    calcBtn.addEventListener('click', () => {
        const length = parseFloat(document.getElementById('calcLength').value);
        const height = parseFloat(document.getElementById('calcHeight').value);
        const width = parseInt(document.getElementById('calcWidth').value);
        const factorySelect = document.getElementById('calcFactory');
        const pricePerM3 = parseFloat(factorySelect.value);
        const resultDiv = document.getElementById('calcResult');
        if (!length || !height || !pricePerM3) {
            resultDiv.className = 'calculator__result show';
            resultDiv.style.background = '#fef2f2';
            resultDiv.textContent = 'Заполните все поля';
            return;
        }
        const blockVolume = 0.625 * 0.25 * (width / 1000);
        const wallArea = length * height;
        const blocksCount = Math.ceil(wallArea / (0.625 * 0.25));
        const totalVolume = blocksCount * blockVolume;
        const totalPrice = totalVolume * pricePerM3;
        resultDiv.className = 'calculator__result show';
        resultDiv.style.background = '#f0fdf4';
        resultDiv.innerHTML = `📦 Блоков: <strong>${blocksCount} шт</strong><br>📐 Объём: <strong>${totalVolume.toFixed(2)} м³</strong><br>💰 Цена: <strong>${totalPrice.toFixed(0)} ₽</strong>`;
    });
}

// ==================== ФОРМА ====================
const orderForm = document.getElementById('orderForm');
if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        btn.textContent = '✓ Отправлено!';
        btn.style.background = '#16a34a';
        e.target.reset();
        setTimeout(() => { btn.textContent = 'Отправить заявку'; btn.style.background = ''; }, 2000);
    });
}


// ==================== ТЁМНАЯ ТЕМА ====================
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
    }
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// ==================== БУРГЕР (все страницы) ====================
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

// ==================== ОПРЕДЕЛЕНИЕ ГОРОДА ====================
(function() {
    const cityName = document.getElementById('cityName');
    const btnYes = document.getElementById('cityYes');
    const btnChange = document.getElementById('cityChange');
    if (!cityName) return;

    // Восстановление сохранённого города
    const savedCity = localStorage.getItem('userCity');
    if (savedCity) {
        cityName.textContent = savedCity;
        if (btnYes) btnYes.style.display = 'none';
        if (btnChange) {
            btnChange.style.display = 'inline-block';
            btnChange.textContent = 'Сменить';
        }
    } else {
        // Определение города через ipapi (работает только на сервере)
        fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {
                const city = data.city || 'Челябинск';
                showCity(city);
            })
            .catch(() => {
                showCity('Челябинск');
            });
    }

    function showCity(city) {
        cityName.textContent = city;
        if (btnYes) btnYes.style.display = 'inline-block';
        if (btnChange) btnChange.style.display = 'inline-block';
    }

    // Обработчики навешиваются один раз
    if (btnYes) {
        btnYes.addEventListener('click', function() {
            const city = cityName.textContent;
            localStorage.setItem('userCity', city);
            btnYes.style.display = 'none';
            btnChange.textContent = 'Сменить';
        });
    }
    if (btnChange) {
        btnChange.addEventListener('click', function() {
            const newCity = prompt('Введите ваш город:');
            if (newCity && newCity.trim()) {
                localStorage.setItem('userCity', newCity.trim());
                cityName.textContent = newCity.trim();
                btnYes.style.display = 'none';
                btnChange.textContent = 'Сменить';
            }
        });
    }
})();

// ==================== HERO СЛАЙДЕР ====================
;(function() {
    const heroSlider = document.getElementById('heroSlider');
    const heroProgress = document.getElementById('heroProgress');
    const heroPrevBtn = document.getElementById('heroPrev');
    const heroNextBtn = document.getElementById('heroNext');

    if (!heroSlider) return;

    const slides = [
        { type: 'image', src: 'images/hero-1.jpg', duration: 5000 },
        { type: 'video', src: 'images/hero-video.mp4', },
        { type: 'image', src: 'images/hero-2.jpg', duration: 5000 },
        { type: 'image', src: 'images/hero-3.jpg', duration: 5000 },
        { type: 'video', src: 'images/hero-video1.mp4',  },
        { type: 'image', src: 'images/hero-5.jpg', duration: 5000 },
    ];

    let heroCurrent = 0;
    let heroTimer = null;
    let heroProgressBars = [];

    // Создаём слайды и прогресс-бары
    slides.forEach((slide, index) => {
        const el = document.createElement('div');
        el.className = 'hero__slide';
        if (slide.type === 'image') {
            const img = document.createElement('img');
            img.src = slide.src;
            img.alt = '';
            el.appendChild(img);
        } else {
            const video = document.createElement('video');
            video.src = slide.src;
            video.muted = true;
            video.playsInline = true;
            video.loop = false;
            video.preload = 'auto';
            el.appendChild(video);
        }
        heroSlider.appendChild(el);

        const bar = document.createElement('div');
        bar.className = 'hero__progress-bar';
        const fill = document.createElement('div');
        fill.className = 'hero__progress-fill';
        bar.appendChild(fill);
        heroProgress.appendChild(bar);
        heroProgressBars.push({ fill, duration: slide.duration || null });
    });

    // Получаем все слайды и все видео внутри них
    const allSlides = heroSlider.querySelectorAll('.hero__slide');

    function stopHeroTimer() {
        if (heroTimer) {
            clearTimeout(heroTimer);
            heroTimer = null;
        }
        heroProgressBars.forEach(p => {
            p.fill.style.transition = 'none';
            p.fill.style.width = '0%';
        });
    }

    function animateHeroProgress(duration) {
        const fill = heroProgressBars[heroCurrent].fill;
        fill.style.transition = `width ${duration}ms linear`;
        fill.style.width = '100%';
    }

    function goToHeroSlide(index) {
        stopHeroTimer();
        allSlides.forEach(el => el.classList.remove('active'));
        allSlides[index].classList.add('active');
        heroProgressBars.forEach(p => {
            p.fill.style.transition = 'none';
            p.fill.style.width = '0%';
        });
        heroCurrent = index;
        const slide = slides[index];

        if (slide.type === 'image') {
            animateHeroProgress(slide.duration);
            heroTimer = setTimeout(() => {
                goToHeroSlide((index + 1) % slides.length);
            }, slide.duration);
        } else {
            // Видео
            const currentSlideElement = allSlides[index];
            const video = currentSlideElement.querySelector('video');
            if (video) {
                video.currentTime = 0;
                video.muted = true;
                video.playsInline = true;
                video.play().then(() => {
                    const dur = video.duration * 1000;
                    animateHeroProgress(dur);
                    heroTimer = setTimeout(() => {
                        video.pause();
                        goToHeroSlide((index + 1) % slides.length);
                    }, dur);
                }).catch(() => {
                    // fallback, если видео не пошло
                    animateHeroProgress(5000);
                    heroTimer = setTimeout(() => {
                        goToHeroSlide((index + 1) % slides.length);
                    }, 5000);
                });
            } else {
                // на всякий случай, если видео нет
                animateHeroProgress(5000);
                heroTimer = setTimeout(() => {
                    goToHeroSlide((index + 1) % slides.length);
                }, 5000);
            }
        }
    }

    // Старт
    goToHeroSlide(0);

    // Кнопки
    heroPrevBtn.addEventListener('click', () => {
        stopHeroTimer();
        const newIndex = (heroCurrent - 1 + slides.length) % slides.length;
        goToHeroSlide(newIndex);
    });
    heroNextBtn.addEventListener('click', () => {
        stopHeroTimer();
        const newIndex = (heroCurrent + 1) % slides.length;
        goToHeroSlide(newIndex);
    });

    // Свайп
    let heroTouchStartX = 0;
    heroSlider.addEventListener('touchstart', (e) => {
        heroTouchStartX = e.changedTouches[0].screenX;
    });
    heroSlider.addEventListener('touchend', (e) => {
        const diff = e.changedTouches[0].screenX - heroTouchStartX;
        if (Math.abs(diff) > 50) {
            stopHeroTimer();
            if (diff < 0) {
                goToHeroSlide((heroCurrent + 1) % slides.length);
            } else {
                goToHeroSlide((heroCurrent - 1 + slides.length) % slides.length);
            }
        }
    });
})();




// Лайтбокс для сертификатов с перелистыванием
const certCards = document.querySelectorAll('.cert-card img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const prevBtn = document.getElementById('lightboxPrev');
const nextBtn = document.getElementById('lightboxNext');

let currentIndex = 0;
const images = Array.from(certCards).map(img => img.src);

// Открытие по клику на любую картинку сертификата
certCards.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
    });
});

// Закрытие
lightboxClose.addEventListener('click', () => lightbox.classList.remove('active'));
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('active');
});

// Переключение вперёд/назад
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightboxImage();
});
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightboxImage();
});

function updateLightboxImage() {
    lightboxImg.src = images[currentIndex];
}

// Поддержка свайпов на мобильных
let touchStartX = 0;
lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});
lightbox.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(diff) > 50) {
        if (diff < 0) {
            currentIndex = (currentIndex + 1) % images.length;
        } else {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
        }
        updateLightboxImage();
    }
});

// Мобильный слайдер сертификатов
const certPrev = document.getElementById('certPrev');
const certNext = document.getElementById('certNext');
const certSlideImg = document.getElementById('certSlideImg');
const certSlideText = document.getElementById('certSlideText');

// Данные для слайдов (можно подгружать из data-атрибутов, но пока пропишем здесь)
const certsData = [
    { img: 'images/cert-1.jpg', text: 'Дилер Пораблок' },
    { img: 'images/cert-2.jpg', text: 'Дилер Поревит' },
    { img: 'images/cert-3.jpg', text: 'Дилер Инси' }
];
let certCurrent = 0;

function updateCertSlide(index) {
    certSlideImg.src = certsData[index].img;
    certSlideText.textContent = certsData[index].text;
}

if (certPrev && certNext) {
    certPrev.addEventListener('click', () => {
        certCurrent = (certCurrent - 1 + certsData.length) % certsData.length;
        updateCertSlide(certCurrent);
    });
    certNext.addEventListener('click', () => {
        certCurrent = (certCurrent + 1) % certsData.length;
        updateCertSlide(certCurrent);
    });

    // При клике на картинку в слайдере – открываем лайтбокс с этим же слайдом
    certSlideImg.addEventListener('click', () => {
        currentIndex = certCurrent;   // currentIndex из лайтбокса должен быть виден (он глобальный)
        updateLightboxImage();
        lightbox.classList.add('active');
    });
}



console.log('✅ Первый Блок — сайт готов. Фильтры, калькулятор, заявка работают.');