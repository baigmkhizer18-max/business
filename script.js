const DB_API = {
    products: [
        { 
            id: 'df-1', 
            name: 'Organic Almonds', 
            category: 'Dry Fruits', 
            stock: 45, 
            image: 'almond.jpg', 
            desc: 'Premium Kagzi Soft Shell Badam harvested directly from Skardu orchards. Rich in Vit E and healthy fats.',
            nutrition: 'Energy: 579 kcal, Protein: 21g, Healthy Fats: 49g, Fiber: 12g (per 100g)',
            benefits: 'Boosts brain memory, improves cholesterol, and provides long-lasting natural stamina.',
            weights: [
                { label: '50g', price: 450 },
                { label: '100g', price: 850 },
                { label: '200g', price: 1600 }
            ]
        },
        { 
            id: 'df-2', 
            name: 'Sweet Raisins', 
            category: 'Dry Fruits', 
            stock: 60, 
            image: 'raisins.jpg', 
            desc: 'Fresh Green Sundekhani Kishmish naturally sun-dried without added preservatives.',
            nutrition: 'Energy: 299 kcal, Potassium: 749mg, Fiber: 3.7g (per 100g)',
            benefits: 'Aids digestive health, supports iron absorption, and works as an instant energy boost.',
            weights: [
                { label: '50g', price: 250 },
                { label: '100g', price: 480 },
                { label: '200g', price: 900 }
            ]
        },
        { 
            id: 'df-3', 
            name: 'Roasted Pistachios', 
            category: 'Dry Fruits', 
            stock: 25, 
            image: 'pistachio.jpg', 
            desc: 'Lightly salted and roasted Irani Jumbo Pista nuts.',
            nutrition: 'Energy: 562 kcal, Protein: 20g, Fiber: 10g (per 100g)',
            benefits: 'Rich in antioxidants, promotes eye health, and helps control blood sugar levels.',
            weights: [
                { label: '50g', price: 650 },
                { label: '100g', price: 1250 },
                { label: '200g', price: 2400 }
            ]
        },
        { 
            id: 'df-4', 
            name: 'Jumbo Cashews', 
            category: 'Dry Fruits', 
            stock: 30, 
            image: 'cashew.jpg', 
            desc: 'Crispy Roasted Kaju W240 grade cashew kernels.',
            nutrition: 'Energy: 553 kcal, Magnesium: 292mg, Protein: 18g (per 100g)',
            benefits: 'Strengthens bones, promotes heart health, and serves as an excellent mineral provider.',
            weights: [
                { label: '50g', price: 550 },
                { label: '100g', price: 1050 },
                { label: '200g', price: 2000 }
            ]
        },
        { 
            id: 'ol-1', 
            name: 'Mustard Oil', 
            category: 'Oils', 
            stock: 15, 
            image: 'mustard oil (1).png', 
            desc: '100% Organic Cold Pressed Kachi Ghani Sarson Oil for healthy cooking and hair care.',
            nutrition: 'Monounsaturated Fats: 60%, Omega-3 & Omega-6 balance.',
            benefits: 'Stimulates hair growth, improves cardiovascular wellness, and enhances meal flavor.',
            weights: [
                { label: '50ml', price: 250 },
                { label: '100ml', price: 450 },
                { label: '200ml', price: 850 }
            ]
        },
        { 
            id: 'ol-2', 
            name: 'Coconut Oil', 
            category: 'Oils', 
            stock: 20, 
            image: 'cocunut oil (1).png', 
            desc: 'Pure Extra Virgin Cold-Pressed Coconut Oil.',
            nutrition: 'Lauric Acid: 50%, Healthy MCT Fatty Acids.',
            benefits: 'Deeply nourishes skin, boosts metabolic rate, and conditions dry hair naturally.',
            weights: [
                { label: '50ml', price: 600 },
                { label: '100ml', price: 1100 },
                { label: '200ml', price: 2100 }
            ]
        },
        { 
            id: 'ol-3', 
            name: 'Almond Oil', 
            category: 'Oils', 
            stock: 12, 
            image: 'almond oil.png', 
            desc: 'Pure Roghan Badam Shirin sweet almond oil pressed from edible sweet almonds.',
            nutrition: 'High Vitamin E concentration, Omega-9 oleic acid.',
            benefits: 'Enhances facial glow, relieves constipation when consumed, and soothes scalp.',
            weights: [
                { label: '50ml', price: 650 },
                { label: '100ml', price: 1450 },
                { label: '200ml', price: 2700 }
            ]
        },
        { 
            id: 'hn-1', 
            name: 'Pure Sidr Honey', 
            category: 'Honey', 
            stock: 8, 
            image: 'honey.webp2 (1).png', 
            desc: 'Unfiltered raw Sidr berry honey from Karak forests with intense natural healing benefits.',
            nutrition: 'Natural Fructose & Glucose, Enzymes, Antimicrobial Agents.',
            benefits: 'Soothes sore throats, reinforces immune system, and acts as a natural sweetener.',
            weights: [
                { label: '50g', price: 650 },
                { label: '100g', price: 1200 },
                { label: '200g', price: 2200 }
            ]
        },
        { 
            id: 'sd-1', 
            name: 'Chia Seeds', 
            category: 'Seeds', 
            stock: 50, 
            image: 'chia seeds.jpg', 
            desc: 'Nutrient-dense black chia seeds rich in Omega-3 fatty acids and soluble dietary fiber.',
            nutrition: 'Fiber: 34g, Protein: 16.5g, Omega-3: 17.8g (per 100g)',
            benefits: 'Supports weight management, keeps hydration levels high, and regulates digestion.',
            weights: [
                { label: '50g', price: 300 },
                { label: '100g', price: 550 },
                { label: '200g', price: 1000 }
            ]
        },
        { 
            id: 'sd-2', 
            name: 'Sunflower Seeds', 
            category: 'Seeds', 
            stock: 40, 
            image: 'sun flower.jpg', 
            desc: 'Raw Kernel Sunflower Seeds peeled and ready to snack or bake.',
            nutrition: 'Vitamin E: 234% DV, Selenium, Healthy Unsaturated Fats.',
            benefits: 'Reduces inflammation, improves heart health, and promotes skin elasticity.',
            weights: [
                { label: '50g', price: 250 },
                { label: '100g', price: 450 },
                { label: '200g', price: 850 }
            ]
        },
        { 
            id: 'sd-3', 
            name: 'Pumpkin Seeds', 
            category: 'Seeds', 
            stock: 35, 
            image: 'pumkin seeds.jpg', 
            desc: 'AAA Grade Raw Green Pumpkin Seeds (Kaddu Ke Beej).',
            nutrition: 'Zinc, Magnesium: 150mg, Iron, Protein: 30g (per 100g)',
            benefits: 'Improves sleep quality, balances hormones, and boosts immunity.',
            weights: [
                { label: '50g', price: 400 },
                { label: '100g', price: 750 },
                { label: '200g', price: 1400 }
            ]
        },
        { 
            id: 'sd-4', 
            name: 'Melon Seeds', 
            category: 'Seeds', 
            stock: 22, 
            image: 'melon seeds.jpg', 
            desc: 'Pure Char Maghaz Seeds cleaned and sorted.',
            nutrition: 'Rich in B-Complex vitamins, Copper, and Essential Minerals.',
            benefits: 'Nourishes brain tissue, supports kidney health, and enhances dessert dishes.',
            weights: [
                { label: '50g', price: 350 },
                { label: '100g', price: 650 },
                { label: '200g', price: 1200 }
            ]
        }
    ],
    orders: []
};

/* =====================================================================
   SHOP SETTINGS - edit these values when you are ready
   ===================================================================== */
const SHOP_CONFIG = {
    // Delivery fee charged when the order is BELOW FREE_SHIPPING_MIN.
    // 0 = delivery is free for every order (shipping rate not decided yet).
    SHIPPING_FEE: 0,
    FREE_SHIPPING_MIN: 2000,

    WHATSAPP_NUMBER: '923282288801',

    // Optional: URL of your backend that receives new orders (POST, JSON).
    // Leave empty until your seller dashboard / backend is ready.
    ORDER_API_URL: '',

    // Coupon code -> discount percent
    COUPONS: { ORGANIC10: 10 }
};

const PLACEHOLDER_IMG = "data:image/svg+xml;utf8," + encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><rect width='400' height='400' fill='#FAF6F0'/>" +
    "<text x='200' y='215' font-size='64' text-anchor='middle'>🌿</text></svg>");

const PAYMENT_LABELS = { COD: 'Cash on Delivery', WALLET: 'JazzCash / Easypaisa' };
const FILTER_ACTIVE = ['bg-olive', 'text-white', 'hover:bg-oliveHover'];
const FILTER_INACTIVE = ['text-darkText', 'dark:text-cream', 'hover:bg-goldenLight/40', 'dark:hover:bg-slate-700'];

/* ===================== helpers ===================== */
function loadStored(key) {
    try {
        const v = JSON.parse(localStorage.getItem(key));
        return Array.isArray(v) ? v : [];
    } catch (e) { return []; }
}
function saveStored(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage unavailable */ }
}
function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function formatPrice(n) { return 'Rs. ' + Number(n).toLocaleString(); }
function getProduct(id) { return DB_API.products.find(p => p.id === id); }
function imgSrc(p) { return encodeURI(p.image); }

/* ===================== state ===================== */
let cart = loadStored('drypops-cart');
let wishlist = loadStored('drypops-wishlist');
let customBox = [];
let appliedDiscountPercent = 0;
let currentCategory = 'all';
let toastTimer = null;

function sanitizeStoredState() {
    // Re-price saved cart lines from the current catalogue and drop anything invalid
    cart = cart.filter(item => item && typeof item.title === 'string' && item.quantity > 0).map(item => {
        if (item.components) return item.components.every(getProduct) ? item : null;
        const p = getProduct(item.id);
        const w = p && p.weights.find(x => x.label === item.weightLabel);
        if (!w) return null;
        item.price = w.price;
        item.key = `${item.id}|${item.weightLabel}`;
        item.quantity = Math.min(item.quantity, Math.max(p.stock, 0));
        return item.quantity > 0 ? item : null;
    }).filter(Boolean);
    wishlist = wishlist.filter(id => typeof id === 'string' && getProduct(id));
}

window.addEventListener('DOMContentLoaded', () => {
    if (window.AOS) {
        AOS.init({ duration: 800, once: true, offset: 100, easing: 'ease-out-cubic' });
    }
    sanitizeStoredState();
    renderHomePageProducts();
    renderBoxBuilderOptions();
    updateCartUI();
    refreshWishlistUI();

    // Close modals with Escape or by clicking the dark backdrop
    document.addEventListener('keydown', e => {
        if (e.key !== 'Escape') return;
        if (!document.getElementById('searchModal').classList.contains('hidden')) toggleSearchModal();
        if (!document.getElementById('cartSidebar').classList.contains('hidden')) toggleCart();
        closeMobileMenu();
    });
    document.getElementById('searchModal').addEventListener('click', e => {
        if (e.target.id === 'searchModal') toggleSearchModal();
    });
});

function refreshAOS() {
    if (window.AOS) setTimeout(() => AOS.refreshHard ? AOS.refreshHard() : AOS.refresh(), 100);
}

/* ===================== navigation ===================== */
function showView(viewId, noScroll) {
    document.querySelectorAll('.page-view').forEach(el => el.classList.add('hidden'));
    const target = document.getElementById(`view-${viewId}`);
    if (target) {
        target.classList.remove('hidden');
        if (!noScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
        refreshAOS();
    }
    closeMobileMenu();
}

function goToSection(id) {
    closeMobileMenu();
    const el = document.getElementById(id);
    const inHome = el && el.closest('#view-home');
    if (inHome && document.getElementById('view-home').classList.contains('hidden')) showView('home', true);
    setTimeout(() => {
        const t = document.getElementById(id);
        if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const open = menu.classList.toggle('hidden') === false;
    document.getElementById('mobileMenuBtn').setAttribute('aria-expanded', String(open));
    document.getElementById('mobileMenuIcon').className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}
function closeMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (!menu || menu.classList.contains('hidden')) return;
    menu.classList.add('hidden');
    document.getElementById('mobileMenuBtn').setAttribute('aria-expanded', 'false');
    document.getElementById('mobileMenuIcon').className = 'fa-solid fa-bars';
}

function filterCategory(cat) {
    currentCategory = cat;
    const homeHidden = document.getElementById('view-home').classList.contains('hidden');
    if (homeHidden) showView('home', true);
    applyCategoryFilter();
    closeMobileMenu();
    setTimeout(() => {
        document.getElementById('categoryFilterBar').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, homeHidden ? 120 : 0);
}

function applyCategoryFilter() {
    document.querySelectorAll('.category-section').forEach(s => {
        s.classList.toggle('hidden', currentCategory !== 'all' && s.dataset.category !== currentCategory);
    });
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const active = btn.dataset.category === currentCategory;
        FILTER_ACTIVE.forEach(c => btn.classList.toggle(c, active));
        FILTER_INACTIVE.forEach(c => btn.classList.toggle(c, !active));
    });
    refreshAOS();
}

/* ===================== stock helpers ===================== */
function itemProducts(item) { return item.components ? item.components : [item.id]; }

function unitsInCart(productId) {
    return cart.reduce((sum, item) => sum + item.quantity * itemProducts(item).filter(id => id === productId).length, 0);
}
function availableStock(productId) {
    const p = getProduct(productId);
    return p ? p.stock - unitsInCart(productId) : 0;
}
// Returns the name of the first product that cannot cover `ids` on top of the cart, or null
function stockProblem(ids) {
    const need = {};
    ids.forEach(id => { need[id] = (need[id] || 0) + 1; });
    for (const id in need) {
        if (availableStock(id) < need[id]) {
            const p = getProduct(id);
            return p ? p.name : id;
        }
    }
    return null;
}

/* ===================== product cards ===================== */
function wishButton(productId, extra) {
    return `<button type="button" data-id="${productId}" onclick="toggleWishlist('${productId}')" aria-label="Add to wishlist" class="wish-btn ${extra}"><i class="fa-solid fa-heart"></i></button>`;
}

function updateCardWeightPrice(productId, selectEl) {
    const product = getProduct(productId);
    if (!product) return;
    const weightObj = product.weights.find(w => w.label === selectEl.value);
    if (!weightObj) return;
    const priceDisplay = document.getElementById(`price-display-${productId}`);
    if (priceDisplay) {
        priceDisplay.innerText = formatPrice(weightObj.price);
        priceDisplay.classList.add('scale-110');
        setTimeout(() => priceDisplay.classList.remove('scale-110'), 200);
    }
}

function renderHomePageProducts() {
    const container = document.getElementById('dynamicProductsContainer');
    const categories = ['Dry Fruits', 'Oils', 'Honey', 'Seeds'];

    container.innerHTML = categories.map((cat, idx) => {
        const catProducts = DB_API.products.filter(p => p.category === cat);
        const sectionId = cat.toLowerCase().replace(' ', '-');

        return `
            <section id="${sectionId}" data-category="${cat}" class="category-section py-14 ${idx % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-cream dark:bg-slate-950'} border-t border-goldenHoney/20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="mb-8" data-aos="fade-right">
                        <span class="text-xs font-bold uppercase tracking-widest text-olive bg-olive/10 px-3 py-1 rounded-full">Category 0${idx + 1}</span>
                        <h2 class="text-3xl font-extrabold text-deepBrown dark:text-cream mt-2">${cat}</h2>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        ${catProducts.map((p, pIdx) => {
                            const defaultWeight = p.weights[0];
                            const soldOut = p.stock <= 0;
                            return `
                            <div class="interactive-card bg-cream/60 dark:bg-slate-800 rounded-2xl border border-goldenHoney/30 p-4 flex flex-col justify-between group" data-aos="fade-up" data-aos-delay="${(pIdx + 1) * 100}">
                                <div>
                                    <div class="relative overflow-hidden rounded-xl bg-white dark:bg-slate-700 aspect-square mb-3">
                                        <img src="${imgSrc(p)}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.onerror=null;this.src=PLACEHOLDER_IMG" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                                        ${wishButton(p.id, 'absolute top-2.5 right-2.5 bg-white/90 dark:bg-slate-900/80 w-9 h-9 flex items-center justify-center rounded-full text-deepBrown shadow-md transition-all hover:scale-110 active:scale-95')}
                                        <button type="button" onclick="openProductDetail('${p.id}')" class="absolute inset-x-3 bottom-3 bg-deepBrown/90 text-goldenLight text-xs py-2.5 rounded-xl font-bold opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                                            <i class="fa-solid fa-eye mr-1"></i> Quick View Details
                                        </button>
                                    </div>
                                    <h3 class="font-bold text-deepBrown dark:text-cream text-base group-hover:text-olive transition-colors cursor-pointer" onclick="openProductDetail('${p.id}')">${escapeHtml(p.name)}</h3>
                                    <p class="text-xs text-darkText/70 dark:text-slate-400 line-clamp-1 mt-0.5">${escapeHtml(p.desc)}</p>

                                    <div class="mt-3">
                                        <label for="weight-select-${p.id}" class="block text-[11px] font-bold text-darkText/60 dark:text-slate-400 mb-1">Select Weight / Size:</label>
                                        <select id="weight-select-${p.id}" onchange="updateCardWeightPrice('${p.id}', this)" class="w-full bg-white dark:bg-slate-700 text-xs font-semibold p-2 rounded-xl border border-goldenHoney/30 focus:outline-none focus:border-goldenHoney">
                                            ${p.weights.map(w => `<option value="${w.label}">${w.label} - ${formatPrice(w.price)}</option>`).join('')}
                                        </select>
                                    </div>

                                    <div class="mt-2 text-[11px] font-semibold ${p.stock < 10 ? 'text-red-500' : 'text-darkText/50 dark:text-slate-400'} flex items-center gap-1">
                                        <span class="w-2 h-2 rounded-full ${soldOut ? 'bg-red-500' : p.stock < 10 ? 'bg-red-500 animate-ping' : 'bg-emerald-500'}"></span>
                                        ${soldOut ? 'Out of stock' : p.stock < 10 ? `Only ${p.stock} left` : `Stock: ${p.stock} units`}
                                    </div>
                                </div>

                                <div class="mt-4 flex items-center justify-between pt-3 border-t border-goldenHoney/20">
                                    <span id="price-display-${p.id}" class="font-extrabold text-goldenHoney text-base transition-transform duration-200">${formatPrice(defaultWeight.price)}</span>
                                    <button type="button" onclick="addSelectedWeightToCart('${p.id}')" ${soldOut ? 'disabled' : ''} class="bg-olive hover:bg-oliveHover text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 shadow-md btn-shine disabled:opacity-50 disabled:cursor-not-allowed">
                                        ${soldOut ? 'Sold Out' : '+ Add To Cart'}
                                    </button>
                                </div>
                            </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </section>
        `;
    }).join('');

    applyCategoryFilter();
    refreshWishlistUI();
}

function addSelectedWeightToCart(productId) {
    const product = getProduct(productId);
    if (!product) return;
    const selectEl = document.getElementById(`weight-select-${productId}`);
    const label = selectEl ? selectEl.value : product.weights[0].label;
    const weightObj = product.weights.find(w => w.label === label);
    if (!weightObj) return;
    addToCart({ id: product.id, title: `${product.name} (${label})`, price: weightObj.price, weightLabel: label });
}

function openProductDetail(productId) {
    const product = getProduct(productId);
    if (!product) return;

    const defaultWeight = product.weights[0];
    const soldOut = product.stock <= 0;
    const container = document.getElementById('productDetailContainer');

    container.innerHTML = `
        <div class="rounded-3xl overflow-hidden border border-goldenHoney/30 shadow-2xl bg-white dark:bg-slate-800">
            <img src="${imgSrc(product)}" alt="${escapeHtml(product.name)}" onerror="this.onerror=null;this.src=PLACEHOLDER_IMG" class="w-full h-72 sm:h-[420px] object-cover hover:scale-105 transition-transform duration-700">
        </div>
        <div class="space-y-6">
            <div>
                <span class="text-xs font-bold uppercase tracking-widest text-olive bg-olive/10 px-3 py-1 rounded-full">${product.category}</span>
                <h1 class="text-3xl sm:text-4xl font-extrabold text-deepBrown dark:text-cream mt-2">${escapeHtml(product.name)}</h1>
                <p id="detailPriceDisplay" class="text-3xl font-extrabold text-goldenHoney mt-2">${formatPrice(defaultWeight.price)}</p>
            </div>

            <p class="text-sm text-darkText/80 dark:text-slate-300 leading-relaxed">${escapeHtml(product.desc)}</p>

            <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-goldenHoney/30 shadow-sm">
                <label for="detailWeightSelect" class="block text-xs font-bold text-deepBrown dark:text-goldenLight mb-2">Choose Weight / Pack Size:</label>
                <select id="detailWeightSelect" onchange="updateDetailPrice('${product.id}', this.value)" class="w-full bg-cream dark:bg-slate-700 text-xs font-bold p-3 rounded-xl border border-goldenHoney/40 focus:outline-none focus:border-goldenHoney">
                    ${product.weights.map(w => `<option value="${w.label}">${w.label} - ${formatPrice(w.price)}</option>`).join('')}
                </select>
            </div>

            <div class="space-y-3 text-xs">
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-goldenHoney/20 shadow-sm">
                    <h4 class="font-bold text-deepBrown dark:text-goldenLight mb-1 flex items-center"><i class="fa-solid fa-heart-pulse mr-2 text-goldenHoney"></i> Health Benefits</h4>
                    <p class="text-darkText/80 dark:text-slate-300">${escapeHtml(product.benefits)}</p>
                </div>
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-goldenHoney/20 shadow-sm">
                    <h4 class="font-bold text-deepBrown dark:text-goldenLight mb-1 flex items-center"><i class="fa-solid fa-leaf mr-2 text-olive"></i> Nutritional Breakdown</h4>
                    <p class="text-darkText/80 dark:text-slate-300">${escapeHtml(product.nutrition)}</p>
                </div>
            </div>

            <div class="flex items-center gap-4">
                <button type="button" onclick="addDetailViewToCart('${product.id}')" ${soldOut ? 'disabled' : ''} class="flex-1 bg-olive hover:bg-oliveHover text-white font-bold py-3.5 rounded-xl text-xs shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95 btn-shine disabled:opacity-50 disabled:cursor-not-allowed">
                    <i class="fa-solid fa-basket-shopping"></i> ${soldOut ? 'Out of Stock' : 'Add Selected Weight To Cart'}
                </button>
                ${wishButton(product.id, 'p-3.5 rounded-xl border border-goldenHoney/30 text-deepBrown dark:text-cream hover:scale-110 active:scale-95 transition-all')}
            </div>
        </div>
    `;
    refreshWishlistUI();
    showView('product-detail');
}

function updateDetailPrice(productId, label) {
    const product = getProduct(productId);
    if (!product) return;
    const weightObj = product.weights.find(w => w.label === label);
    if (weightObj) document.getElementById('detailPriceDisplay').innerText = formatPrice(weightObj.price);
}

function addDetailViewToCart(productId) {
    const product = getProduct(productId);
    if (!product) return;
    const selectEl = document.getElementById('detailWeightSelect');
    const label = selectEl ? selectEl.value : product.weights[0].label;
    const weightObj = product.weights.find(w => w.label === label);
    if (!weightObj) return;
    addToCart({ id: product.id, title: `${product.name} (${label})`, price: weightObj.price, weightLabel: label });
}

/* ===================== custom gift box ===================== */
function renderBoxBuilderOptions() {
    const container = document.getElementById('boxBuilderOptions');
    const selectable = DB_API.products.slice(0, 6);

    container.innerHTML = selectable.map(p => `
        <div class="interactive-card bg-white dark:bg-slate-800 p-4 rounded-2xl border border-goldenHoney/30 flex flex-col justify-between">
            <div>
                <h4 class="font-bold text-sm text-deepBrown dark:text-cream">${escapeHtml(p.name)}</h4>
                <select id="box-weight-${p.id}" aria-label="Weight for ${escapeHtml(p.name)}" class="mt-2 w-full bg-cream dark:bg-slate-700 text-xs p-2 rounded-xl border border-goldenHoney/30 focus:outline-none focus:border-goldenHoney">
                    ${p.weights.map(w => `<option value="${w.label}">${w.label} - ${formatPrice(w.price)}</option>`).join('')}
                </select>
            </div>
            <button type="button" onclick="addBoxItemWithWeight('${p.id}')" class="mt-3 text-xs bg-goldenLight/40 dark:bg-slate-700 text-deepBrown dark:text-cream hover:bg-olive hover:text-white font-bold py-2 px-3 rounded-xl transition-all active:scale-95">
                + Add To Custom Box
            </button>
        </div>
    `).join('');
}

function addBoxItemWithWeight(productId) {
    const product = getProduct(productId);
    if (!product) return;

    if (customBox.length >= 4) {
        showToast('Maximum 4 items allowed in custom box!');
        return;
    }
    const label = document.getElementById(`box-weight-${productId}`).value;
    const weightObj = product.weights.find(w => w.label === label);
    if (!weightObj) return;

    const problem = stockProblem([...customBox.map(i => i.id), productId]);
    if (problem) {
        showToast(`Sorry, not enough ${problem} in stock`);
        return;
    }

    customBox.push({ id: product.id, name: `${product.name} (${label})`, price: weightObj.price });
    updateBoxUI();
    showToast(`Added ${product.name} (${label}) to custom box`);
}

function updateBoxUI() {
    const list = document.getElementById('customBoxList');
    const total = document.getElementById('customBoxTotal');
    if (customBox.length === 0) {
        list.innerHTML = `<p class="text-slate-400 italic text-center py-6">No items added to box yet...</p>`;
        total.innerText = 'Rs. 0';
        return;
    }
    const sum = customBox.reduce((a, b) => a + b.price, 0);
    list.innerHTML = customBox.map((item, idx) => `
        <div class="flex justify-between items-center bg-cream dark:bg-slate-700 p-2.5 rounded-xl border border-goldenHoney/20 animate-fadeInUp">
            <span>${escapeHtml(item.name)}</span>
            <button type="button" onclick="removeBoxItem(${idx})" aria-label="Remove ${escapeHtml(item.name)}" class="text-red-500 font-bold ml-2 hover:scale-125 transition-transform">x</button>
        </div>
    `).join('');
    total.innerText = formatPrice(sum);
}

function removeBoxItem(index) {
    customBox.splice(index, 1);
    updateBoxUI();
}

function addCustomBoxToCart() {
    if (customBox.length === 0) {
        showToast('Add items to your custom box first!');
        return;
    }
    const sum = customBox.reduce((a, b) => a + b.price, 0);
    const added = addToCart({
        // unique key so two different boxes never merge into one line
        key: `box-${Date.now()}-${Math.floor(Math.random() * 1e6)}`,
        id: 'cb-custom',
        title: `Custom Gift Box (${customBox.length} items)`,
        price: sum,
        weightLabel: 'Custom Pack',
        components: customBox.map(i => i.id),
        details: customBox.map(i => i.name)
    });
    if (added) {
        customBox = [];
        updateBoxUI();
    }
}

/* ===================== cart ===================== */
// Returns true when the item was added
function addToCart(item) {
    const key = item.key || `${item.id}|${item.weightLabel}`;
    const problem = stockProblem(itemProducts(item));
    if (problem) {
        showToast(`Sorry, no more ${problem} available in stock`);
        return false;
    }
    const existing = cart.find(i => i.key === key);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...item, key, quantity: 1 });
    }
    updateCartUI();
    showToast(`Added "${item.title}" to cart!`);
    return true;
}

function updateCartUI() {
    const cartCountEl = document.getElementById('cartCount');
    const cartItemsList = document.getElementById('cartItemsList');
    const cartTotalEl = document.getElementById('cartTotal');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    saveStored('drypops-cart', cart);

    cartCountEl.innerText = totalItems;
    cartCountEl.classList.add('scale-125');
    setTimeout(() => cartCountEl.classList.remove('scale-125'), 200);
    cartTotalEl.innerText = formatPrice(totalPrice);

    if (cart.length === 0) {
        cartItemsList.innerHTML = `<p class="text-center text-slate-400 text-xs py-8">Your cart is empty.</p>`;
        return;
    }

    cartItemsList.innerHTML = cart.map((item, index) => `
        <div class="flex items-center justify-between gap-3 bg-cream/60 dark:bg-slate-800 p-3 rounded-xl border border-goldenHoney/20 animate-fadeInUp">
            <div class="min-w-0">
                <h4 class="font-bold text-xs text-deepBrown dark:text-cream">${escapeHtml(item.title)}</h4>
                ${item.details ? `<p class="text-[11px] text-darkText/60 dark:text-slate-400 mt-0.5">${item.details.map(escapeHtml).join(', ')}</p>` : ''}
                <p class="text-xs text-darkText/60 dark:text-slate-400">${formatPrice(item.price)} x ${item.quantity}</p>
            </div>
            <div class="flex items-center gap-2 shrink-0">
                <button type="button" onclick="changeQty(${index}, -1)" aria-label="Decrease quantity" class="w-6 h-6 rounded bg-goldenLight text-deepBrown font-bold text-xs flex items-center justify-center hover:scale-110 active:scale-95 transition-transform">-</button>
                <span class="text-xs font-bold dark:text-slate-200">${item.quantity}</span>
                <button type="button" onclick="changeQty(${index}, 1)" aria-label="Increase quantity" class="w-6 h-6 rounded bg-goldenLight text-deepBrown font-bold text-xs flex items-center justify-center hover:scale-110 active:scale-95 transition-transform">+</button>
            </div>
        </div>
    `).join('');
}

function changeQty(index, delta) {
    const item = cart[index];
    if (!item) return;
    if (delta > 0) {
        const problem = stockProblem(itemProducts(item));
        if (problem) {
            showToast(`Sorry, no more ${problem} available in stock`);
            return;
        }
    }
    item.quantity += delta;
    if (item.quantity <= 0) cart.splice(index, 1);
    updateCartUI();
    if (!document.getElementById('view-checkout').classList.contains('hidden')) renderCheckoutSummary();
}

/* ===================== pricing ===================== */
function calcShipping(subtotal) {
    return subtotal >= SHOP_CONFIG.FREE_SHIPPING_MIN ? 0 : SHOP_CONFIG.SHIPPING_FEE;
}
function calcTotals() {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = Math.round((subtotal * appliedDiscountPercent) / 100);
    const shipping = cart.length ? calcShipping(subtotal) : 0;
    return { subtotal, discount, shipping, total: subtotal - discount + shipping };
}

/* ===================== checkout ===================== */
function proceedToCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    toggleCart();
    renderCheckoutSummary();
    showView('checkout');
}

function applyCouponCode() {
    const code = document.getElementById('couponCodeInput').value.trim().toUpperCase();
    const msgEl = document.getElementById('couponMsg');
    const percent = SHOP_CONFIG.COUPONS[code];

    if (percent) {
        appliedDiscountPercent = percent;
        msgEl.innerText = `Coupon applied! ${percent}% discount subtracted.`;
        msgEl.className = 'text-xs mt-2 text-olive font-bold animate-fadeInUp';
    } else {
        appliedDiscountPercent = 0;
        msgEl.innerText = 'Invalid coupon code. Try ORGANIC10.';
        msgEl.className = 'text-xs mt-2 text-red-500 font-bold animate-fadeInUp';
    }
    renderCheckoutSummary();
}

function renderCheckoutSummary() {
    const container = document.getElementById('checkoutItemsList');
    const t = calcTotals();

    container.innerHTML = cart.map(item => `
        <div class="flex justify-between items-center pt-2 gap-3">
            <div>
                <p class="font-bold text-darkText dark:text-slate-200">${escapeHtml(item.title)}</p>
                ${item.details ? `<p class="text-[11px] text-slate-400">${item.details.map(escapeHtml).join(', ')}</p>` : ''}
                <span class="text-slate-400">Qty: ${item.quantity}</span>
            </div>
            <span class="font-bold text-goldenHoney whitespace-nowrap">${formatPrice(item.price * item.quantity)}</span>
        </div>
    `).join('');

    document.getElementById('coSubtotal').innerText = formatPrice(t.subtotal);
    document.getElementById('coDiscount').innerText = `- ${formatPrice(t.discount)}`;
    document.getElementById('coShipping').innerText = t.shipping === 0 ? 'FREE' : formatPrice(t.shipping);
    document.getElementById('coTotal').innerText = formatPrice(t.total);
}

function togglePaymentFields(method) {
    document.getElementById('walletNote').classList.toggle('hidden', method !== 'WALLET');
}

function buildOrderMessage(order) {
    const lines = [
        'Hi DryPops! I would like to confirm this order:',
        `Order ID: ${order.ref}`,
        '',
        `Name: ${order.name}`,
        `Phone: ${order.phone}`,
        `Address: ${order.address}, ${order.city}`
    ];
    if (order.email) lines.push(`Email: ${order.email}`);
    lines.push(`Payment: ${PAYMENT_LABELS[order.paymentMethod] || order.paymentMethod}`, '', 'Items:');
    order.items.forEach((i, idx) => {
        lines.push(`${idx + 1}. ${i.title} x ${i.quantity} = ${formatPrice(i.price * i.quantity)}`);
        if (i.details) lines.push(`   (${i.details.join(', ')})`);
    });
    lines.push('', `Subtotal: ${formatPrice(order.subtotal)}`);
    if (order.discount) lines.push(`Discount: - ${formatPrice(order.discount)}`);
    lines.push(`Delivery: ${order.shipping === 0 ? 'FREE' : formatPrice(order.shipping)}`);
    lines.push(`Total to pay: ${formatPrice(order.amount)}`);
    return `https://wa.me/${SHOP_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
}

function handleCheckoutSubmit(e) {
    e.preventDefault();

    if (cart.length === 0) {
        showToast('Your cart is empty!');
        showView('home');
        return;
    }

    const phoneEl = document.getElementById('coPhone');
    const phone = phoneEl.value.replace(/[\s-]/g, '');
    if (!/^(\+92|92|0)3\d{9}$/.test(phone)) {
        showToast('Please enter a valid mobile number, e.g. 03XX-XXXXXXX');
        phoneEl.focus();
        return;
    }

    // Re-check stock for the whole cart before placing the order
    const ids = [...new Set(cart.flatMap(itemProducts))];
    for (const id of ids) {
        const p = getProduct(id);
        if (!p || unitsInCart(id) > p.stock) {
            showToast(`Sorry, not enough ${p ? p.name : 'stock'} available. Please reduce the quantity.`);
            return;
        }
    }

    const t = calcTotals();
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    const order = {
        ref: 'DP-' + Math.floor(100000 + Math.random() * 900000),
        name: document.getElementById('coName').value.trim(),
        phone: phoneEl.value.trim(),
        address: document.getElementById('coAddress').value.trim(),
        city: document.getElementById('coCity').value.trim(),
        email: document.getElementById('coEmail').value.trim(),
        paymentMethod,
        subtotal: t.subtotal,
        discount: t.discount,
        shipping: t.shipping,
        amount: t.total,
        items: cart.map(i => ({ ...i })),
        date: new Date().toISOString()
    };

    // Reduce stock (per product, including gift-box components)
    cart.forEach(item => {
        itemProducts(item).forEach(id => {
            const p = getProduct(id);
            if (p) p.stock -= item.quantity;
        });
    });

    DB_API.orders.push(order);

    // Send the order to the Seller Center backend (see orders-sync.js)
    if (typeof sendOrderToBackend === 'function') sendOrderToBackend(order);

    const note = paymentMethod === 'WALLET'
        ? 'We will message you on WhatsApp with our JazzCash / Easypaisa details. Your order is confirmed once payment is received.'
        : 'Please keep the amount ready. You pay when your order is delivered.';

    document.getElementById('orderSuccessSummary').innerHTML = `
        <p><strong>Order ID:</strong> <span class="text-goldenHoney font-extrabold">${order.ref}</span></p>
        <p><strong>Customer:</strong> ${escapeHtml(order.name)} (${escapeHtml(order.phone)})</p>
        <p><strong>Delivery Address:</strong> ${escapeHtml(order.address)}, ${escapeHtml(order.city)}</p>
        <p><strong>Payment Method:</strong> ${PAYMENT_LABELS[paymentMethod]}</p>
        <p class="mt-2 pt-2 border-t font-extrabold text-sm text-deepBrown dark:text-goldenLight">Items:</p>
        <ul class="list-disc pl-4 space-y-1 my-1">
            ${order.items.map(i => `<li>${escapeHtml(i.title)} x ${i.quantity} - ${formatPrice(i.price * i.quantity)}</li>`).join('')}
        </ul>
        <p class="pt-2 border-t font-extrabold text-sm text-deepBrown dark:text-goldenLight">Total to Pay: ${formatPrice(order.amount)}</p>
        <p class="text-slate-500 dark:text-slate-400">${note}</p>
    `;
    document.getElementById('orderWhatsAppBtn').href = buildOrderMessage(order);

    // Reset checkout state
    cart = [];
    appliedDiscountPercent = 0;
    document.getElementById('couponCodeInput').value = '';
    document.getElementById('couponMsg').className = 'hidden';
    e.target.reset();
    togglePaymentFields('COD');
    updateCartUI();
    renderHomePageProducts();
    showView('order-success');
}

function checkoutViaWhatsApp() {
    if (cart.length === 0) {
        showToast('Cart is empty!');
        return;
    }
    const t = calcTotals();
    const lines = ['Hi DryPops! Order details:'];
    cart.forEach((i, idx) => {
        lines.push(`${idx + 1}. ${i.title} x ${i.quantity} = ${formatPrice(i.price * i.quantity)}`);
        if (i.details) lines.push(`   (${i.details.join(', ')})`);
    });
    lines.push('', `Total: ${formatPrice(t.total)}`);
    window.open(`https://wa.me/${SHOP_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
}

/* ===================== search ===================== */
function handleSearch(query) {
    const results = document.getElementById('searchResults');
    const q = query.trim().toLowerCase();
    if (!q) { results.innerHTML = ''; return; }

    const filtered = DB_API.products.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    results.innerHTML = filtered.length === 0
        ? `<p class="p-3 text-slate-400">No products found</p>`
        : filtered.map(p => `
            <div onclick="toggleSearchModal(); openProductDetail('${p.id}')" class="p-3 hover:bg-cream dark:hover:bg-slate-700 cursor-pointer flex justify-between items-center rounded-xl transition-colors">
                <span class="font-bold">${escapeHtml(p.name)}</span>
                <span class="text-goldenHoney font-bold">From ${formatPrice(p.weights[0].price)}</span>
            </div>
        `).join('');
}

function toggleSearchModal() {
    const modal = document.getElementById('searchModal');
    const box = document.getElementById('searchModalBox');
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        setTimeout(() => {
            box.classList.remove('modal-hidden');
            box.classList.add('modal-visible');
            document.getElementById('searchInput').focus();
        }, 10);
    } else {
        box.classList.remove('modal-visible');
        box.classList.add('modal-hidden');
        setTimeout(() => modal.classList.add('hidden'), 300);
    }
}

/* ===================== wishlist ===================== */
function toggleWishlist(productId) {
    const p = getProduct(productId);
    if (!p) return;
    const idx = wishlist.indexOf(productId);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast(`Removed "${p.name}" from Wishlist`);
    } else {
        wishlist.push(productId);
        showToast(`Added "${p.name}" to Wishlist!`);
    }
    saveStored('drypops-wishlist', wishlist);
    refreshWishlistUI();
}

function refreshWishlistUI() {
    document.getElementById('wishlistCount').innerText = wishlist.length;
    document.querySelectorAll('.wish-btn').forEach(btn => {
        const on = wishlist.includes(btn.dataset.id);
        btn.classList.toggle('wish-active', on);
        btn.setAttribute('aria-label', on ? 'Remove from wishlist' : 'Add to wishlist');
    });
}

function showWishlistToast() {
    if (wishlist.length === 0) {
        showToast('Wishlist is empty!');
        return;
    }
    showToast(`Wishlist: ${wishlist.map(id => getProduct(id).name).join(', ')}`);
}

/* ===================== misc UI ===================== */
function showQuizResult(goal, suggestion) {
    const res = document.getElementById('quizResult');
    res.classList.remove('hidden');
    res.innerHTML = `<i class="fa-solid fa-circle-check text-olive mr-1"></i> For <strong>${escapeHtml(goal)}</strong>, we recommend: <u>${escapeHtml(suggestion)}</u>`;
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const drawer = document.getElementById('cartDrawer');
    if (sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden');
        setTimeout(() => {
            drawer.classList.remove('drawer-closed');
            drawer.classList.add('drawer-open');
        }, 10);
    } else {
        drawer.classList.remove('drawer-open');
        drawer.classList.add('drawer-closed');
        setTimeout(() => sidebar.classList.add('hidden'), 400);
    }
}

function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    try { localStorage.setItem('drypops-theme', isDark ? 'dark' : 'light'); } catch (e) { /* ignore */ }
}

// There is no mailing-list backend yet, so the subscription is confirmed over WhatsApp
function subscribeEmail(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value.trim();
    const text = `Hi DryPops! Please add me to your offers list. My email: ${email}`;
    window.open(`https://wa.me/${SHOP_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    showToast('Send the WhatsApp message to finish subscribing');
    e.target.reset();
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMsg').innerText = msg;
    toast.classList.remove('hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.add('hidden'), 3000);
}
