/* ================================================
   ROVA — Global JavaScript
   ================================================ */

const CATALOG = [
  { variantId: '51666422563111', name: 'No-Pull Harness',     price: 52, img: 'images/harness/harness-hero.png', href: 'harnesses.html',  option: 'Black / S' },
  { variantId: '51666394251559', name: 'Paw Protection Boots', price: 58, img: 'images/boots/boots-hero.png',    href: 'boots.html',       option: 'Size 2'    },
  { variantId: '51666427642151', name: 'Slow Feeder Bowl',    price: 45, img: 'images/bowl/bowl-hero.png',       href: 'slow-feeder.html', option: 'Pink'      }
];

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

  document.addEventListener('keydown', e => { if (e.key === 'Escape') { close(); closeCart(); } });
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

  // Color + size (harness)
  if (selectedColor && selectedSize) {
    try {
      const variants = JSON.parse(selectedColor.dataset.variants || '{}');
      variantId = variants[selectedSize.dataset.size];
    } catch (e) {}
  }

  // Color-only (bowl)
  if (!variantId && selectedColor?.dataset.variantId) {
    variantId = selectedColor.dataset.variantId;
  }

  // Size-only (boots)
  if (!variantId && selectedSize?.dataset.variantId) {
    variantId = selectedSize.dataset.variantId;
  }

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
  return CATALOG.filter((_, i) => i !== exclude);
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
      <button class="btn-quick-add" data-id="${rec.variantId}">Quick Add</button>
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
      const rec = CATALOG.find(c => c.variantId === btn.dataset.id);
      if (!rec) return;
      addToCart({ ...rec, qty: 1 });
      btn.textContent = 'Added!';
      setTimeout(() => renderCartDrawer(), 800);
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

      const name  = document.querySelector('.pdp-name')?.textContent?.trim() || 'Product';
      const price = parseFloat(document.querySelector('.pdp-price')?.textContent?.replace(/[^0-9.]/g, '') || '0');
      const img   = document.getElementById('gallery-main-img')?.src || '';
      const qty   = parseInt(document.querySelector('.qty-display')?.textContent || '1', 10);

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
