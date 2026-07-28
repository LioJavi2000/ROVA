/* ================================================
   ROVA — Global JavaScript
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initAccordion();
  initColorSelector();
  initSizeSelector();
  initQuantitySelector();
  setActiveNav();
  initScrollFades();
  initGallery();
  initPixelEvents();
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

  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
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
  const swatches    = document.querySelectorAll('.color-swatch');
  const cartLink    = document.querySelector('.add-to-cart-link');
  const mainImg     = document.getElementById('gallery-main-img');
  const firstThumb  = document.querySelector('.pdp-thumb img');
  const colorLabel  = document.querySelector('.selected-color-name');

  if (!swatches.length) return;

  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      swatches.forEach(s => s.classList.remove('selected'));
      swatch.classList.add('selected');

      if (colorLabel) colorLabel.textContent = swatch.dataset.colorName;
      const img = swatch.dataset.img;
      if (img && mainImg)    mainImg.src    = img;
      if (img && firstThumb) firstThumb.src = img;

      refreshCartUrl(cartLink);
    });
  });

  // Auto-select first swatch and sync label
  const first = swatches[0];
  if (first) {
    first.classList.add('selected');
    if (colorLabel) colorLabel.textContent = first.dataset.colorName;
  }
}

/* --- Size Selector ----------------------------- */
function initSizeSelector() {
  const pills     = document.querySelectorAll('.size-pill');
  const cartLink  = document.querySelector('.add-to-cart-link');

  if (!pills.length) return;

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
      refreshCartUrl(cartLink);
    });
  });

  // Auto-select first available pill
  const first = document.querySelector('.size-pill:not(:disabled)');
  if (first) first.classList.add('selected');
  refreshCartUrl(cartLink);
}

function refreshCartUrl(cartLink) {
  if (!cartLink) return;
  const qty = parseInt(document.querySelector('.qty-display')?.textContent || '1', 10);

  const selectedColor = document.querySelector('.color-swatch.selected');
  const selectedSize  = document.querySelector('.size-pill.selected');

  // Color + size product (harness)
  if (selectedColor && selectedSize) {
    try {
      const variants  = JSON.parse(selectedColor.dataset.variants || '{}');
      const variantId = variants[selectedSize.dataset.size];
      if (variantId) {
        cartLink.href = `https://rova-9384.myshopify.com/cart/${variantId}:${qty}`;
        return;
      }
    } catch (e) {}
  }

  // Size-only product (boots)
  if (selectedSize?.dataset.variantId) {
    cartLink.href = `https://rova-9384.myshopify.com/cart/${selectedSize.dataset.variantId}:${qty}`;
  }
}

/* --- Quantity Selector ------------------------- */
function initQuantitySelector() {
  const display = document.querySelector('.qty-display');
  const dec     = document.querySelector('.qty-btn.dec');
  const inc     = document.querySelector('.qty-btn.inc');
  const cartLink = document.querySelector('.add-to-cart-link');

  if (!display) return;

  if (dec) {
    dec.addEventListener('click', () => {
      const curr = parseInt(display.textContent, 10);
      if (curr > 1) { display.textContent = curr - 1; refreshCartUrl(cartLink); }
    });
  }

  if (inc) {
    inc.addEventListener('click', () => {
      const curr = parseInt(display.textContent, 10);
      display.textContent = curr + 1;
      refreshCartUrl(cartLink);
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
  const mainImg   = document.getElementById('gallery-main-img');
  const thumbs    = document.querySelectorAll('.pdp-thumb');
  const prevBtn   = document.querySelector('.gallery-arrow.prev');
  const nextBtn   = document.querySelector('.gallery-arrow.next');

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

/* --- Meta Pixel — Checkout Intent -------------- */
function initPixelEvents() {
  document.querySelectorAll('.add-to-cart-link').forEach(link => {
    link.addEventListener('click', () => {
      if (typeof fbq === 'function') fbq('track', 'InitiateCheckout');
    });
  });
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
