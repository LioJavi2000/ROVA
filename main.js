/* ================================================
   ROVA — Global JavaScript
   ================================================ */

const CATALOG = [
  {
    variantId: '51666422563111',
    name:  'No-Pull Harness',
    price: 52,
    img:   'images/harness/harness-hero.png',
    href:  'harnesses.html',
    option: 'Black / S',
    desc:  'Front D-ring + dual clip, padded mesh, 5-point adjustable. Redirects pulling on day one.',
    colors: [
      { name: 'Black',  dot: '#1C1C1C', img: 'images/harness/harness-black.png',  variants: { s:'51666422563111', m:'51666422595879', l:'51666422628647', xl:'51666422432039' } },
      { name: 'Green',  dot: '#4ED220', img: 'images/harness/harness-green.png',  variants: { s:'51666422464807', m:'51666422497575', l:'51666422530343', xl:'51666422300967' } },
      { name: 'Blue',   dot: '#1952C8', img: 'images/harness/harness-blue.png',   variants: { s:'51666422104359', m:'51666422137127', l:'51666422169895', xl:'51666421940519' } },
      { name: 'Red',    dot: '#D42B2B', img: 'images/harness/harness-red.png',    variants: { s:'51666421973287', m:'51666422006055', l:'51666422038823', xl:'51666421809447' } },
      { name: 'Orange', dot: '#F07820', img: 'images/harness/harness-orange.png', variants: { s:'51666421842215', m:'51666421874983', l:'51666421907751', xl:'51666421678375' } },
      { name: 'Pink',   dot: '#E82898', img: 'images/harness/harness-pink.png',   variants: { s:'51666422333735', m:'51666422366503', l:'51666422399271', xl:'51666422202663' } },
      { name: 'Rosey',  dot: '#BE6A9A', img: 'images/harness/harness-rosey.png',  variants: { s:'51666421711143', m:'51666421743911', l:'51666421776679', xl:'51666421645607' } },
      { name: 'Purple', dot: '#7C30C8', img: 'images/harness/harness-purple.png', variants: { s:'51666421612839', m:'51666422235431', l:'51666422268199', xl:'51666422071591' } },
    ],
    sizes: [
      { label: 'S',  key: 's',  guide: '10–25 lbs' },
      { label: 'M',  key: 'm',  guide: '25–50 lbs' },
      { label: 'L',  key: 'l',  guide: '50–75 lbs' },
      { label: 'XL', key: 'xl', guide: '75+ lbs'   },
    ],
  },
  {
    variantId: '51666394251559',
    name:  'Paw Protection Boots',
    price: 58,
    img:   'images/boots/boots-hero.png',
    href:  'boots.html',
    option: 'Size 2',
    desc:  'Velcro strap that actually stays on. Hot pavement, ice, salt, mud, recovery. Set of 4.',
    colors: [],
    sizes: [
      { label: 'Size 2', key: '51666394251559', guide: '~1.5" paw' },
      { label: 'Size 3', key: '51666394284327', guide: '~1.75" paw' },
      { label: 'Size 4', key: '51666394317095', guide: '~2" paw'   },
      { label: 'Size 5', key: '51666394349863', guide: '~2.25" paw' },
      { label: 'Size 6', key: '51666394382631', guide: '~2.5" paw' },
      { label: 'Size 7', key: '51666394415399', guide: '~2.75" paw' },
      { label: 'Size 8', key: '51666394448167', guide: '~3" paw'   },
    ],
    sizeNote: 'Measure the widest part of paw while bearing weight.',
  },
  {
    variantId: '51666427642151',
    name:  'Slow Feeder Bowl',
    price: 45,
    img:   'images/bowl/bowl-hero.png',
    href:  'slow-feeder.html',
    option: 'Pink',
    desc:  'Silicone maze slows eating 5–10x. BPA-free, dishwasher safe, non-slip base. One size.',
    colors: [
      { name: 'Pink',     dot: '#E879A0', variantId: '51666427642151' },
      { name: 'Green',    dot: '#48C574', variantId: '51666427674919' },
      { name: 'Blue',     dot: '#2D6BC9', variantId: '51666427707687', disabled: true },
      { name: 'Sky Blue', dot: '#5ABCE0', variantId: '51666427740455', disabled: true },
      { name: 'Yellow',   dot: '#F4C84F', variantId: '51666427773223' },
    ],
    sizes: [],
  },
];

/* quick-add state */
let qaState = { idx: -1, colorIdx: 0, sizeKey: null };

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initAccordion();
  initColorSelector();
  initSizeSelector();
  initQuantitySelector();
  setActiveNav();
  initScrollFades();
  initGallery();
  initCart();
});

/* --- Mobile Nav -------------------------------- */
function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const closeBtn  = document.querySelector('.mobile-nav-close');

  if (!hamburger || !mobileNav) return;

  const open  = () => { hamburger.classList.add('open'); mobileNav.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const close = () => { hamburger.classList.remove('open'); mobileNav.classList.remove('open'); document.body.style.overflow = ''; };

  hamburger.addEventListener('click', () => mobileNav.classList.contains('open') ? close() : open());
  if (closeBtn) closeBtn.addEventListener('click', close);
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

  document.addEventListener('keydown', e => { if (e.key === 'Escape') { close(); closeCart(); closeQuickAdd(); } });
}

/* --- Accordion --------------------------------- */
function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item   = header.closest('.accordion-item');
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.accordion-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* --- Color Selector ---------------------------- */
function initColorSelector() {
  const swatches   = document.querySelectorAll('.color-swatch');
  const cartLink   = document.querySelector('.add-to-cart-link');
  const buyNowLink = document.querySelector('.buy-now-link');
  const mainImg    = document.getElementById('gallery-main-img');
  const firstThumb = document.querySelector('.pdp-thumb img');
  const colorLabel = document.querySelector('.selected-color-name');

  if (!swatches.length) return;

  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      swatches.forEach(s => s.classList.remove('selected'));
      swatch.classList.add('selected');

      if (colorLabel) colorLabel.textContent = swatch.dataset.colorName;
      const img = swatch.dataset.img;
      if (img && mainImg)    mainImg.src    = img;
      if (img && firstThumb) firstThumb.src = img;

      refreshCartUrl(cartLink, buyNowLink);
    });
  });

  const first = document.querySelector('.color-swatch:not(:disabled)');
  if (first) {
    first.classList.add('selected');
    if (colorLabel) colorLabel.textContent = first.dataset.colorName;
    const img = first.dataset.img;
    if (img && mainImg)    mainImg.src    = img;
    if (img && firstThumb) firstThumb.src = img;
  }
}

/* --- Size Selector ----------------------------- */
function initSizeSelector() {
  const pills      = document.querySelectorAll('.size-pill');
  const cartLink   = document.querySelector('.add-to-cart-link');
  const buyNowLink = document.querySelector('.buy-now-link');

  if (!pills.length) return;

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
      refreshCartUrl(cartLink, buyNowLink);
    });
  });

  const first = document.querySelector('.size-pill:not(:disabled)');
  if (first) first.classList.add('selected');
  refreshCartUrl(cartLink, buyNowLink);
}

function refreshCartUrl(cartLink, buyNowLink) {
  const qty           = parseInt(document.querySelector('.qty-display')?.textContent || '1', 10);
  const selectedColor = document.querySelector('.color-swatch.selected');
  const selectedSize  = document.querySelector('.size-pill.selected');
  let variantId       = null;

  if (selectedColor && selectedSize) {
    try { variantId = JSON.parse(selectedColor.dataset.variants || '{}')[selectedSize.dataset.size]; }
    catch (e) {}
  }
  if (!variantId && selectedColor?.dataset.variantId) variantId = selectedColor.dataset.variantId;
  if (!variantId && selectedSize?.dataset.variantId)  variantId = selectedSize.dataset.variantId;

  if (variantId) {
    const url = `https://rova-9384.myshopify.com/cart/${variantId}:${qty}`;
    if (cartLink)   cartLink.href   = url;
    if (buyNowLink) buyNowLink.href = url;
  }
}

/* --- Quantity Selector ------------------------- */
function initQuantitySelector() {
  const display    = document.querySelector('.qty-display');
  const dec        = document.querySelector('.qty-btn.dec');
  const inc        = document.querySelector('.qty-btn.inc');
  const cartLink   = document.querySelector('.add-to-cart-link');
  const buyNowLink = document.querySelector('.buy-now-link');

  if (!display) return;

  if (dec) {
    dec.addEventListener('click', () => {
      const curr = parseInt(display.textContent, 10);
      if (curr > 1) { display.textContent = curr - 1; refreshCartUrl(cartLink, buyNowLink); }
    });
  }

  if (inc) {
    inc.addEventListener('click', () => {
      display.textContent = parseInt(display.textContent, 10) + 1;
      refreshCartUrl(cartLink, buyNowLink);
    });
  }
}

/* --- Active Nav State -------------------------- */
function setActiveNav() {
  const filename = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.header-nav a, .mobile-nav a').forEach(link => {
    if (link.getAttribute('href') === filename) link.classList.add('active');
  });
}

/* --- PDP Gallery ------------------------------- */
function initGallery() {
  const mainImg = document.getElementById('gallery-main-img');
  const thumbs  = document.querySelectorAll('.pdp-thumb');
  const prevBtn = document.querySelector('.gallery-arrow.prev');
  const nextBtn = document.querySelector('.gallery-arrow.next');

  if (!mainImg || !thumbs.length) return;

  const srcs = Array.from(thumbs).map(t => t.querySelector('img')?.src).filter(Boolean);
  let current = 0;

  function setActive(idx) {
    current = (idx + srcs.length) % srcs.length;
    mainImg.src = srcs[current];
    thumbs.forEach((t, i) => t.classList.toggle('active', i === current));
  }

  thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => setActive(i)));
  if (prevBtn) prevBtn.addEventListener('click', () => setActive(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => setActive(current + 1));
}

/* --- Scroll Fade-Up Animations ----------------- */
function initScrollFades() {
  const elements = document.querySelectorAll('.fade-up');
  if (!elements.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  elements.forEach(el => observer.observe(el));
}

/* =================================================
   CART SYSTEM
   ================================================= */

function getCart() {
  try { return JSON.parse(localStorage.getItem('rova_cart') || '[]'); }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem('rova_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const total = getCart().reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count-badge').forEach(badge => {
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
  });
}

function addToCart(item) {
  const cart = getCart();
  const idx  = cart.findIndex(c => c.variantId === item.variantId);
  if (idx >= 0) cart[idx].qty += item.qty;
  else cart.push(item);
  saveCart(cart);
}

function removeFromCart(variantId) {
  saveCart(getCart().filter(c => c.variantId !== variantId));
}

function updateCartQty(variantId, delta) {
  const cart = getCart();
  const idx  = cart.findIndex(c => c.variantId === variantId);
  if (idx < 0) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  saveCart(cart);
}

function openCart() {
  document.getElementById('cart-overlay')?.classList.add('open');
  document.getElementById('cart-drawer')?.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartDrawer();
}

function closeCart() {
  closeQuickAdd();
  document.getElementById('cart-overlay')?.classList.remove('open');
  document.getElementById('cart-drawer')?.classList.remove('open');
  document.body.style.overflow = '';
}

function buildCheckoutUrl() {
  const cart = getCart();
  if (!cart.length) return 'https://rova-9384.myshopify.com/';
  return `https://rova-9384.myshopify.com/cart/${cart.map(c => `${c.variantId}:${c.qty}`).join(',')}`;
}

function getRecommendedProducts() {
  const page    = window.location.pathname.split('/').pop() || 'index.html';
  const pageMap = { 'harnesses.html': 0, 'boots.html': 1, 'slow-feeder.html': 2 };
  const exclude = pageMap[page];
  return CATALOG.map((p, i) => ({ ...p, catalogIdx: i })).filter((_, i) => i !== exclude);
}

function renderRecsHTML() {
  const recs = getRecommendedProducts();
  if (!recs.length) return '';
  const items = recs.map(rec => `
    <div class="cart-rec-item">
      <img class="cart-rec-img" src="${rec.img}" alt="${rec.name}">
      <div class="cart-rec-info">
        <p class="cart-rec-name">${rec.name}</p>
        <p class="cart-rec-price">$${rec.price}.00</p>
      </div>
      <button class="btn-quick-add" data-catalog-idx="${rec.catalogIdx}">Quick Add</button>
    </div>
  `).join('');
  return `<p class="cart-recs-title">You Might Also Like</p>${items}`;
}

function renderCartDrawer() {
  const body   = document.getElementById('cart-body');
  const footer = document.getElementById('cart-footer');
  if (!body || !footer) return;

  const cart = getCart();

  if (!cart.length) {
    body.innerHTML = `
      <div class="cart-empty">
        <p class="cart-empty-title">Your cart is empty</p>
        <p>Add something for your pup.</p>
      </div>
      ${renderRecsHTML()}
    `;
    footer.innerHTML = `<a href="${buildCheckoutUrl()}" class="btn-checkout">Checkout</a>`;
  } else {
    const itemsHTML = cart.map(item => `
      <div class="cart-item">
        <img class="cart-item-img" src="${item.img}" alt="${item.name}">
        <div class="cart-item-info">
          <p class="cart-item-name">${item.name}</p>
          <p class="cart-item-option">${item.option}</p>
          <div class="cart-item-qty">
            <button class="cart-qty-btn" data-id="${item.variantId}" data-delta="-1">&#x2212;</button>
            <span class="cart-qty-num">${item.qty}</span>
            <button class="cart-qty-btn" data-id="${item.variantId}" data-delta="1">+</button>
          </div>
          <button class="cart-item-remove" data-id="${item.variantId}">Remove</button>
        </div>
        <span class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</span>
      </div>
    `).join('');

    body.innerHTML = itemsHTML + renderRecsHTML();

    const subtotal = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
    footer.innerHTML = `
      <div class="cart-subtotal">
        <span class="cart-subtotal-label">Subtotal</span>
        <span>$${subtotal.toFixed(2)}</span>
      </div>
      <a href="${buildCheckoutUrl()}" class="btn-checkout">Checkout</a>
    `;
  }

  body.querySelectorAll('.cart-qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      updateCartQty(btn.dataset.id, parseInt(btn.dataset.delta, 10));
      renderCartDrawer();
    });
  });

  body.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      removeFromCart(btn.dataset.id);
      renderCartDrawer();
    });
  });

  body.querySelectorAll('.btn-quick-add').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.catalogIdx, 10);
      openQuickAdd(idx);
    });
  });
}

/* --- Cart Init --------------------------------- */
function initCart() {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="cart-overlay" id="cart-overlay"></div>
    <div class="cart-drawer" id="cart-drawer" role="dialog" aria-label="Shopping cart">
      <div class="cart-drawer-header">
        <span>Your Cart</span>
        <button class="cart-drawer-close" id="cart-close" aria-label="Close cart">&#x2715;</button>
      </div>
      <div class="cart-drawer-body" id="cart-body"></div>
      <div class="cart-drawer-footer" id="cart-footer"></div>
      <div class="quick-add-panel" id="quick-add-panel" role="dialog" aria-label="Quick Add"></div>
    </div>
  `);

  updateCartBadge();

  document.getElementById('cart-open')?.addEventListener('click', openCart);
  document.getElementById('cart-close')?.addEventListener('click', closeCart);
  document.getElementById('cart-overlay')?.addEventListener('click', closeCart);

  const addBtn = document.querySelector('.add-to-cart-link');
  if (addBtn) {
    addBtn.addEventListener('click', e => {
      e.preventDefault();

      const name      = document.querySelector('.pdp-name')?.textContent?.trim() || 'Product';
      const price     = parseFloat(document.querySelector('.pdp-price')?.textContent?.replace(/[^0-9.]/g, '') || '0');
      const img       = document.getElementById('gallery-main-img')?.src || '';
      const qty       = parseInt(document.querySelector('.qty-display')?.textContent || '1', 10);
      const hrefMatch = addBtn.href.match(/\/cart\/(\d+):/);
      const variantId = hrefMatch ? hrefMatch[1] : '';

      const colorName = document.querySelector('.color-swatch.selected')?.dataset.colorName;
      const sizeName  = document.querySelector('.size-pill.selected')?.textContent?.trim();
      let option = '';
      if (colorName && sizeName) option = `${colorName} / ${sizeName}`;
      else if (colorName) option = colorName;
      else if (sizeName)  option = sizeName;

      if (variantId) addToCart({ variantId, name, price, img, qty, option });
      if (typeof fbq === 'function') fbq('track', 'AddToCart');
      openCart();
    });
  }
}

/* =================================================
   QUICK ADD PANEL
   ================================================= */

function openQuickAdd(catalogIdx) {
  const prod = CATALOG[catalogIdx];
  if (!prod) return;

  const firstAvailableColor = prod.colors.findIndex(c => !c.disabled);
  qaState = {
    idx:      catalogIdx,
    colorIdx: firstAvailableColor >= 0 ? firstAvailableColor : 0,
    sizeKey:  prod.sizes.length ? prod.sizes[0].key : null,
  };

  renderQuickAddPanel();
  document.getElementById('quick-add-panel')?.classList.add('open');
}

function closeQuickAdd() {
  document.getElementById('quick-add-panel')?.classList.remove('open');
}

function getQuickAddVariantId() {
  const prod  = CATALOG[qaState.idx];
  if (!prod) return null;
  const color = prod.colors[qaState.colorIdx];
  const sizeKey = qaState.sizeKey;

  // harness: color has variants map, look up by size key
  if (color?.variants && sizeKey) return color.variants[sizeKey] || null;
  // bowl: color has variantId directly
  if (color?.variantId) return color.variantId;
  // boots: sizeKey IS the variantId
  if (sizeKey) return sizeKey;

  return null;
}

function renderQuickAddPanel() {
  const panel = document.getElementById('quick-add-panel');
  if (!panel) return;

  const prod  = CATALOG[qaState.idx];
  if (!prod) return;

  const color   = prod.colors[qaState.colorIdx];
  const sizeObj = prod.sizes.find(s => s.key === qaState.sizeKey);
  const imgSrc  = color?.img || prod.img;

  /* Color swatches */
  let colorsHTML = '';
  if (prod.colors.length) {
    const swatchItems = prod.colors.map((c, i) => `
      <button class="qa-swatch ${i === qaState.colorIdx ? 'selected' : ''} ${c.disabled ? 'oos' : ''}"
        ${c.disabled ? 'disabled' : ''}
        data-ci="${i}"
        aria-label="${c.name}${c.disabled ? ' — Out of Stock' : ''}">
        <span class="qa-swatch-dot" style="background:${c.dot};"></span>
      </button>
    `).join('');
    colorsHTML = `
      <p class="qa-label">Color: <span id="qa-color-label">${color?.name || ''}</span></p>
      <div class="qa-swatches">${swatchItems}</div>
    `;
  }

  /* Size pills */
  let sizesHTML = '';
  let sizeGuideHTML = '';
  if (prod.sizes.length) {
    const pillItems = prod.sizes.map(s => `
      <button class="qa-size-pill ${s.key === qaState.sizeKey ? 'selected' : ''}" data-sk="${s.key}">
        ${s.label}
      </button>
    `).join('');
    sizesHTML = `
      <p class="qa-label" style="margin-top:14px;">Size</p>
      <div class="qa-sizes">${pillItems}</div>
    `;
    sizeGuideHTML = `
      <div class="qa-size-guide">
        ${prod.sizes.map(s => `<span><strong>${s.label}</strong> ${s.guide}</span>`).join('')}
        ${prod.sizeNote ? `<p class="qa-size-note">${prod.sizeNote}</p>` : ''}
      </div>
    `;
  }

  panel.innerHTML = `
    <div class="qa-header">
      <img class="qa-img" id="qa-img" src="${imgSrc}" alt="${prod.name}">
      <div class="qa-header-info">
        <p class="qa-name">${prod.name}</p>
        <p class="qa-price">$${prod.price}.00</p>
        <p class="qa-desc">${prod.desc}</p>
      </div>
      <button class="qa-close" id="qa-close" aria-label="Close">&#x2715;</button>
    </div>
    <div class="qa-divider"></div>
    ${colorsHTML}
    ${sizesHTML}
    ${sizeGuideHTML}
    <button class="qa-submit" id="qa-submit">Add to Cart</button>
  `;

  document.getElementById('qa-close')?.addEventListener('click', closeQuickAdd);

  panel.querySelectorAll('.qa-swatch').forEach(btn => {
    btn.addEventListener('click', () => {
      qaState.colorIdx = parseInt(btn.dataset.ci, 10);
      const c = CATALOG[qaState.idx].colors[qaState.colorIdx];
      /* update image + label without full re-render */
      const qImg = document.getElementById('qa-img');
      if (qImg && c.img) qImg.src = c.img;
      const lbl = document.getElementById('qa-color-label');
      if (lbl) lbl.textContent = c.name;
      panel.querySelectorAll('.qa-swatch').forEach((s, i) =>
        s.classList.toggle('selected', i === qaState.colorIdx));
    });
  });

  panel.querySelectorAll('.qa-size-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      qaState.sizeKey = btn.dataset.sk;
      panel.querySelectorAll('.qa-size-pill').forEach(p =>
        p.classList.toggle('selected', p.dataset.sk === qaState.sizeKey));
    });
  });

  document.getElementById('qa-submit')?.addEventListener('click', () => {
    const variantId = getQuickAddVariantId();
    if (!variantId) return;

    const prod    = CATALOG[qaState.idx];
    const color   = prod.colors[qaState.colorIdx];
    const sizeObj = prod.sizes.find(s => s.key === qaState.sizeKey);
    const img     = color?.img || prod.img;

    let option = '';
    if (color && sizeObj)    option = `${color.name} / ${sizeObj.label}`;
    else if (color)          option = color.name;
    else if (sizeObj)        option = sizeObj.label;

    addToCart({ variantId, name: prod.name, price: prod.price, img, qty: 1, option });
    if (typeof fbq === 'function') fbq('track', 'AddToCart');
    closeQuickAdd();
    renderCartDrawer();
  });
}
