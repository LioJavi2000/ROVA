/* ================================================
   ROVA — Global JavaScript
   ================================================ */

const CATALOG = [
  {
    variantId: '51666422563111',
    name:  'No-Pull Harness',
    price: 34.98,
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
    price: 48.99,
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
    price: 26.99,
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
  {
    variantId: '',
    name:  'Rova Rove Sunglasses',
    price: 32.99,
    img:   'assets/images/rova-rove/rove-bluegrey-main.jpg',
    href:  'rove.html',
    option: 'Blue Grey',
    desc:  'TR-90 sport-square frame. TAC polarized UV400. All-day outdoor comfort.',
    colors: [
      { name: 'Blue Grey',    dot: '#0F2D6B', img: 'assets/images/rova-rove/rove-bluegrey-main.jpg', variantId: '51743459705127' },
      { name: 'Black Grey',   dot: '#1C1C1C', img: 'assets/images/rova-rove/rove-blackgrey.jpg',     variantId: '51743459639591' },
      { name: 'Red Grey',     dot: 'linear-gradient(90deg,#3A3A3A 50%,#C0210F 50%)', img: 'assets/images/rova-rove/rove-redgrey.jpg', variantId: '51743459606823' },
      { name: 'Gradient Tea', dot: '#A0612A', img: 'assets/images/rova-rove/rove-gradienttea.jpg',   variantId: '51743459672359' },
    ],
    sizes: [],
  },
  {
    variantId: '',
    name:  'Rova Ray Sunglasses',
    price: 32.99,
    img:   'assets/images/rova-ray/ray-front.jpg',
    href:  'ray.html',
    option: 'Black / Gray',
    desc:  'Vintage retro square. Polarized UV400. 60mm coverage. Sits well on all face shapes.',
    colors: [
      { name: 'Black / Gray',           dot: '#1C1C1C', img: 'assets/images/rova-ray/ray-front.jpg',          variantId: '' },
      { name: 'Leopard / Tea',          dot: '#7B4F2E', img: 'assets/images/rova-ray/ray-leopard-tea.jpg',    variantId: '51743439225127' },
      { name: 'Pink',                   dot: '#E879A0', img: 'assets/images/rova-ray/ray-pink.jpg',           variantId: '51743439290663' },
      { name: 'Black / Purple Gradient',dot: '#7C30C8', img: 'assets/images/rova-ray/ray-purple-gradient.jpg', variantId: '51743439192359' },
    ],
    sizes: [],
  },
];

/* quick-add state */
let qaState = { idx: -1, colorIdx: 0, sizeKey: null };

document.addEventListener('DOMContentLoaded', () => {
  [initMobileNav, initAccordion, initColorSelector, initSizeSelector,
   initQuantitySelector, setActiveNav, initScrollFades, initGallery,
   initCart, initPrivacyModal, initReviewLikes, initReviewReadMore,
   initWriteReview, updateReviewCount, initYmalCarousel]
  .forEach(fn => { try { fn(); } catch(e) { console.error(fn.name + ':', e); } });
});

/* ── Review Likes ──────────────────────────────── */
/* ── Review Read More ──────────────────────────── */
function initReviewReadMore() {
  const LIMIT = 90; // ~3 lines of text
  document.querySelectorAll('.review-card-body:not([data-rm-init])').forEach(body => {
    body.dataset.rmInit = '1';
    const full = body.scrollHeight;
    if (full <= LIMIT + 20) return;

    body.style.maxHeight = LIMIT + 'px';
    body.style.overflow = 'hidden';
    body.style.transition = 'max-height 0.4s ease';

    const grad = document.createElement('div');
    grad.className = 'review-body-gradient';
    body.parentNode.insertBefore(grad, body.nextSibling);

    const btn = document.createElement('button');
    btn.className = 'review-read-more';
    btn.textContent = 'Read more';
    grad.after(btn);

    btn.addEventListener('click', () => {
      const expanded = body.classList.toggle('expanded');
      body.style.maxHeight = expanded ? full + 'px' : LIMIT + 'px';
      grad.style.display = expanded ? 'none' : '';
      btn.textContent = expanded ? 'Read less' : 'Read more';
    });
  });
}

function initReviewLikes() {
  const btns = document.querySelectorAll('.review-like-btn');
  if (!btns.length) return;
  const liked = JSON.parse(localStorage.getItem('rova_review_likes') || '{}');
  btns.forEach(btn => {
    const id = btn.dataset.reviewId;
    const base = parseInt(btn.dataset.baseLikes || '0', 10);
    const countEl = btn.querySelector('.review-like-count');
    const heartEl = btn.querySelector('.review-heart');
    if (liked[id]) { btn.classList.add('liked'); if (heartEl) heartEl.textContent = '♥'; }
    if (countEl) countEl.textContent = base + (liked[id] ? 1 : 0);
    btn.addEventListener('click', () => {
      const h = btn.querySelector('.review-heart');
      const c = btn.querySelector('.review-like-count');
      if (liked[id]) {
        delete liked[id];
        btn.classList.remove('liked');
        if (h) h.textContent = '♡';
        if (c) c.textContent = base;
      } else {
        liked[id] = true;
        btn.classList.remove('liked');
        if (h) void h.offsetWidth;
        btn.classList.add('liked');
        if (h) h.textContent = '♥';
        if (c) c.textContent = base + 1;
      }
      localStorage.setItem('rova_review_likes', JSON.stringify(liked));
    });
  });
}

/* ── Review Count ──────────────────────────────── */
function updateReviewCount() {
  const countEl = document.querySelector('.star-count');
  if (!countEl) return;
  const base = parseInt(countEl.dataset.base || '0', 10);
  const total = base + document.querySelectorAll('.review-card').length;
  countEl.textContent = '(' + total + ' reviews)';
}

/* ── Write a Review ────────────────────────────── */
function initWriteReview() {
  const btn = document.getElementById('writeReviewBtn');
  const form = document.getElementById('writeReviewForm');
  if (!btn || !form) return;

  // Attach toggle first — nothing can break this
  btn.addEventListener('click', () => {
    const open = form.classList.contains('open');
    form.classList.toggle('open');
    btn.textContent = open ? 'Write a Review' : 'Cancel';
  });

  const starsEl    = document.getElementById('writeReviewStars');
  const nameInput  = document.getElementById('writeReviewName');
  const sizeInput  = document.getElementById('writeReviewSize');
  const bodyInput  = document.getElementById('writeReviewBody');
  const submitBtn  = document.getElementById('writeReviewSubmit');
  const container  = document.getElementById('userReviews');

  if (!starsEl || !nameInput || !bodyInput || !submitBtn || !container) return;

  const page = location.pathname.split('/').pop().replace('.html','') || 'index';
  const STORAGE_KEY = 'rova_user_reviews_' + page;

  let selectedRating = 0;

  // Render previously saved reviews
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  saved.forEach(r => container.appendChild(buildReviewCard(r)));
  if (saved.length) initReviewReadMore();

  // Star hover + selection
  const starSpans = starsEl.querySelectorAll('span');
  starSpans.forEach(star => {
    star.addEventListener('mouseenter', () => {
      const v = +star.dataset.val;
      starSpans.forEach(s => s.classList.toggle('active', +s.dataset.val <= v));
    });
    star.addEventListener('click', () => {
      selectedRating = +star.dataset.val;
      starSpans.forEach(s => s.classList.toggle('selected', +s.dataset.val <= selectedRating));
      starsEl.classList.remove('write-review-error');
    });
  });
  starsEl.addEventListener('mouseleave', () => {
    starSpans.forEach(s => s.classList.toggle('active', +s.dataset.val <= selectedRating));
  });

  // Submit
  submitBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const size = sizeInput ? sizeInput.value : '';
    const body = bodyInput.value.trim();
    let valid = true;
    if (!selectedRating) { starsEl.classList.add('write-review-error'); valid = false; }
    if (!name)  { nameInput.classList.add('write-review-error');  valid = false; }
    else          nameInput.classList.remove('write-review-error');
    if (!body)  { bodyInput.classList.add('write-review-error');  valid = false; }
    else          bodyInput.classList.remove('write-review-error');
    if (!valid) return;

    const review = {
      id: 'user_' + Date.now(),
      name,
      size,
      body,
      rating: selectedRating,
      date: new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' })
    };

    const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    all.unshift(review);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));

    container.insertBefore(buildReviewCard(review), container.firstChild);
    initReviewReadMore();
    updateReviewCount();

    // Reset
    nameInput.value = '';
    if (sizeInput) sizeInput.value = '';
    bodyInput.value = '';
    selectedRating = 0;
    starSpans.forEach(s => s.classList.remove('selected', 'active'));
    form.classList.remove('open');
    btn.textContent = 'Write a Review';
  });

  function buildReviewCard(r) {
    const filled = '★'.repeat(r.rating);
    const empty  = r.rating < 5 ? '<span style=”color:#ddd”>' + '★'.repeat(5 - r.rating) + '</span>' : '';
    const div = document.createElement('div');
    div.className = 'review-card';
    div.style.marginTop = '20px';
    div.innerHTML =
      '<div class=”review-card-top”>' +
        '<span class=”review-card-stars”>' + filled + empty + '</span>' +
        '<span class=”review-card-date”>' + r.date + '</span>' +
        '<button class=”review-delete-btn” title=”Delete review”>&times;</button>' +
      '</div>' +
      '<p class=”review-card-name”>' + escHtml(r.name) + '</p>' +
      '<p class=”review-card-variant”>Color: Black (4pcs)' + (r.size ? ' &nbsp;&middot;&nbsp; Size: ' + escHtml(r.size) : '') + '</p>' +
      '<p class=”review-card-body”>”' + escHtml(r.body) + '”</p>' +
      '<div class=”review-footer”>' +
        '<span class=”review-verified”>&#10004; Verified Purchase</span>' +
      '</div>';
    div.querySelector('.review-delete-btn').addEventListener('click', () => {
      const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      localStorage.setItem(STORAGE_KEY, JSON.stringify(all.filter(x => x.id !== r.id)));
      div.remove();
      updateReviewCount();
    });
    return div;
  }

  function escHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
}

/* ── Privacy & Terms Modal ─────────────────────── */
function initPrivacyModal() {
  const html = `
    <div class="privacy-overlay" id="privacy-overlay" role="dialog" aria-modal="true" aria-label="Privacy & Terms">
      <div class="privacy-modal">
        <div class="privacy-modal-header">
          <h3>Privacy &amp; Terms</h3>
          <button class="privacy-modal-close" id="privacy-close" aria-label="Close">&#x2715;</button>
        </div>
        <div class="privacy-modal-body">
          <h4>Privacy Policy</h4>
          <p>Rova collects personal information — including your name, email address, shipping address, and payment details — solely to process and fulfill your order. We do not sell or rent your personal data to third parties.</p>
          <p>We use cookies and tracking tools (including Meta Pixel) for site analytics and to deliver relevant advertising. You can disable cookies in your browser settings at any time.</p>
          <p>Your payment information is processed securely through Shopify. We never store full credit card numbers on our servers.</p>
          <p>If you'd like to request access to, correction of, or deletion of your personal data, contact us at support@rovagear.com and we'll respond within 30 days.</p>

          <h4>Terms of Service</h4>
          <p>By placing an order with Rova you confirm that you are at least 18 years of age and that the information you provide is accurate and complete.</p>
          <p>All prices are listed in USD. We reserve the right to update pricing at any time without prior notice. Orders are subject to product availability.</p>
          <p>We offer free exchanges on your first order if the product doesn't fit or arrives damaged. Contact us within 30 days of delivery. Items must be unused and in original condition.</p>
          <p>Rova is not liable for delays caused by carriers, customs, or events outside our control. Estimated shipping times are provided as a guide only.</p>
          <p>All product descriptions, images, and specifications are provided in good faith. Colors may vary slightly due to screen calibration.</p>
          <p>These terms are governed by the laws of the State of Florida. Any disputes will be resolved in the courts of Miami-Dade County, FL.</p>
          <p style="color:var(--stone); font-size:12px; margin-top:20px;">Last updated: August 2026</p>
        </div>
      </div>
    </div>`;
  document.body.insertAdjacentHTML('beforeend', html);

  const overlay = document.getElementById('privacy-overlay');
  document.getElementById('privacy-close').addEventListener('click', closePrivacyModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closePrivacyModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePrivacyModal(); });
}

function toggleContactDropdown(e) {
  e.preventDefault();
  const item = e.currentTarget.closest('.contact-item');
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.contact-item.open').forEach(el => el.classList.remove('open'));
  if (!wasOpen) {
    item.classList.add('open');
    setTimeout(() => {
      document.addEventListener('click', function handler(ev) {
        if (!item.contains(ev.target)) {
          item.classList.remove('open');
          document.removeEventListener('click', handler);
        }
      });
    }, 0);
  }
}

function openPrivacyModal() {
  document.getElementById('privacy-overlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePrivacyModal() {
  document.getElementById('privacy-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

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

  let colorFadeTimer = null;

  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      if (swatch.disabled) return;
      swatches.forEach(s => s.classList.remove('selected'));
      swatch.classList.add('selected');

      if (colorLabel) {
        colorLabel.style.opacity = '0';
        setTimeout(() => {
          colorLabel.textContent = swatch.dataset.colorName;
          colorLabel.style.opacity = '1';
        }, 110);
      }

      const img = swatch.dataset.img;
      if (img && mainImg) {
        mainImg.style.opacity = '0';
        clearTimeout(colorFadeTimer);
        colorFadeTimer = setTimeout(() => {
          mainImg.src = img;
          if (firstThumb) firstThumb.src = img;
          requestAnimationFrame(() => { mainImg.style.opacity = '1'; });
        }, 160);
      } else if (img && firstThumb) {
        firstThumb.src = img;
      }

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
  const mainImg     = document.getElementById('gallery-main-img');
  const mainVideo   = document.getElementById('gallery-main-video');
  const videoSrc    = document.getElementById('gallery-video-src');
  const galleryMain = document.querySelector('.pdp-gallery-main');
  const thumbs      = document.querySelectorAll('.pdp-thumb');
  const prevBtn     = document.querySelector('.gallery-arrow.prev');
  const nextBtn     = document.querySelector('.gallery-arrow.next');

  if (!mainImg || !thumbs.length) return;

  let current = 0;
  let imgFadeTimer = null;

  function showImage(src) {
    if (mainVideo) { mainVideo.pause(); mainVideo.classList.remove('active'); }
    if (galleryMain) galleryMain.classList.remove('video-active');
    mainImg.style.display = '';
    mainImg.style.opacity = '0';
    clearTimeout(imgFadeTimer);
    imgFadeTimer = setTimeout(() => {
      mainImg.src = src;
      requestAnimationFrame(() => { mainImg.style.opacity = '1'; });
    }, 160);
  }

  function showVideo(src) {
    mainImg.style.display = 'none';
    if (galleryMain) galleryMain.classList.add('video-active');
    if (videoSrc) videoSrc.src = src;
    if (mainVideo) { mainVideo.load(); mainVideo.classList.add('active'); mainVideo.play().catch(() => {}); }
  }

  function setActive(idx) {
    current = (idx + thumbs.length) % thumbs.length;
    thumbs.forEach((t, i) => t.classList.toggle('active', i === current));
    const thumb = thumbs[current];
    const videoUrl = thumb.dataset.video;
    if (videoUrl) {
      showVideo(videoUrl);
    } else {
      const img = thumb.querySelector('img');
      if (img) showImage(img.src);
    }
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
    const prev = badge.textContent;
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
    if (total > 0 && String(total) !== String(prev)) {
      badge.classList.remove('popping');
      requestAnimationFrame(() => badge.classList.add('popping'));
      badge.addEventListener('animationend', () => badge.classList.remove('popping'), { once: true });
    }
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
  const pageMap = { 'harnesses.html': 0, 'boots.html': 1, 'slow-feeder.html': 2, 'rove.html': 3, 'ray.html': 4 };
  const exclude = pageMap[page];
  return CATALOG
    .map((p, i) => ({ ...p, catalogIdx: i }))
    .filter((p, i) => i !== exclude && p.variantId); // only show products with confirmed Shopify variant IDs
}

function renderRecsHTML() {
  const recs = getRecommendedProducts();
  if (!recs.length) return '';
  const items = recs.map(rec => `
    <div class="cart-rec-item">
      <img class="cart-rec-img" src="${rec.img}" alt="${rec.name}">
      <div class="cart-rec-info">
        <p class="cart-rec-name">${rec.name}</p>
        <p class="cart-rec-price">$${Number(rec.price).toFixed(2)}</p>
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
  const color   = prod.colors[qaState.colorIdx];
  const sizeKey = qaState.sizeKey;

  let id = null;
  // harness: color has variants map, look up by size key
  if (color?.variants && sizeKey) id = color.variants[sizeKey] || null;
  // bowl: color has variantId directly
  else if (color?.variantId) id = color.variantId;
  // boots: sizeKey IS the variantId
  else if (sizeKey) id = sizeKey;

  // only return numeric Shopify IDs — rejects empty strings and TODO placeholders
  return (id && /^\d+$/.test(String(id))) ? id : null;
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
        <p class="qa-price">$${Number(prod.price).toFixed(2)}</p>
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

/* ── YMAL Horizontal Carousel (mobile) ─────────── */
function initYmalCarousel() {
  if (window.innerWidth > 767) return;
  const grid = document.querySelector('.ymal-grid');
  if (!grid) return;

  const controls = document.createElement('div');
  controls.className = 'ymal-controls';

  const prev = document.createElement('button');
  prev.className = 'ymal-arrow-btn';
  prev.setAttribute('aria-label', 'Previous');
  prev.innerHTML = '&#8592;';

  const next = document.createElement('button');
  next.className = 'ymal-arrow-btn';
  next.setAttribute('aria-label', 'Next');
  next.innerHTML = '&#8594;';

  controls.appendChild(prev);
  controls.appendChild(next);
  grid.parentNode.insertBefore(controls, grid);

  prev.addEventListener('click', () => grid.scrollBy({ left: -236, behavior: 'smooth' }));
  next.addEventListener('click', () => grid.scrollBy({ left: 236, behavior: 'smooth' }));
}
