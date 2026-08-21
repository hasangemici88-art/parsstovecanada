"use client";

import { useEffect, useState } from "react";

const heroSlides = [
  {
    image: "/parsstove-hero.png",
    alt: "Pars pellet stove warming a mountain home in winter",
    eyebrow: "MADE FOR CANADIAN WINTERS",
    title: "Pre-order now.",
    accent: "Be ready for winter.",
    copy: "Heat your home effortlessly with a high-efficiency pellet stove. Choose online, get it delivered, and have it installed by a qualified local professional.",
    primary: "Products",
    secondary: "Contact Us",
  },
  {
    image: "/parsstove-hero.png",
    alt: "Warm Canadian mountain home with an efficient Pars stove",
    eyebrow: "EFFICIENCY MEETS COMFORT",
    title: "Pre-order now.",
    accent: "Warmth is on its way.",
    copy: "Steady, efficient heat without the work of a traditional wood fire. Discover a cleaner way to keep every winter evening beautifully comfortable.",
    primary: "Products",
    secondary: "Contact Us",
  },
] as const;

// Real product — the only model with verified specs from the manufacturer
// (parsstove.com / Erzurum, Turkey) as of 2026-08-15. Price is withheld
// pending a Canada-specific decision; do not fabricate a CAD figure.
// All 11 real product photos (photo-01 excluded — it's a Turkish marketing
// slide with parsstove.com branding baked in, not a clean product shot).
const parsStove1Gallery = [
  "/products/pars-stove-1/photo-02.png",
  "/products/pars-stove-1/photo-03.png",
  "/products/pars-stove-1/photo-04.png",
  "/products/pars-stove-1/photo-05.png",
  "/products/pars-stove-1/photo-06.png",
  "/products/pars-stove-1/photo-07.png",
  "/products/pars-stove-1/photo-08.png",
  "/products/pars-stove-1/photo-09.png",
  "/products/pars-stove-1/photo-10.png",
  "/products/pars-stove-1/photo-11.png",
  "/products/pars-stove-1/photo-12.png",
];

// Petek / Akrep / Balkon — real photos + specs pulled from esrefsekerli.com
// (a Turkish retailer of the same "Pars Pelet" stove line) on 2026-08-21.
// The three models share one manufacturer FAQ describing family-wide
// performance (heating area, burn rate, ash, venting) — that shared spec
// is applied to all three since esrefsekerli's own copy describes it as
// applying across "Pelet sobalarımız" (our stoves), not one specific SKU.
// Do not invent a CAD price or a Canadian safety certification — neither
// is confirmed, see the compliance note in the Canada-specific FAQ below.
const parsPetekGallery = [
  "/products/pars-petek/photo-01.png",
  "/products/pars-petek/photo-02.png",
  "/products/pars-petek/photo-03.png",
];
const parsAkrepGallery = [
  "/products/pars-akrep/photo-01.jpg",
  "/products/pars-akrep/photo-02.png",
  "/products/pars-akrep/photo-03.jpg",
];
const parsBalkonGallery = [
  "/products/pars-balkon/photo-01.jpeg",
  "/products/pars-balkon/photo-02.jpeg",
];

const products = [
  {
    name: "Pars Classic Pellet Stove",
    heat: "1–1.5 kg pellets/hr",
    area: "320–750 sq. ft. (30–70 m²)",
    price: "Contact us for pricing",
    badge: "Flagship Model",
    tone: "graphite",
    gallery: parsStove1Gallery,
  },
  {
    name: "Pars Petek Pellet Stove",
    heat: "1–1.5 kg pellets/hr (16–24 kg over a 16-hr full burn)",
    area: "320–750 sq. ft. (30–70 m²) at 8 ft. (2.5 m) ceiling height",
    price: "Contact us for pricing",
    badge: "Indoor Pedestal Model",
    tone: "sand",
    gallery: parsPetekGallery,
  },
  {
    name: "Pars Akrep Pellet Stove",
    heat: "1–1.5 kg pellets/hr (16–24 kg over a 16-hr full burn)",
    area: "320–750 sq. ft. (30–70 m²) at 8 ft. (2.5 m) ceiling height",
    price: "Contact us for pricing",
    badge: "Portable / Flat-Leg Stand",
    tone: "forest",
    gallery: parsAkrepGallery,
  },
  {
    name: "Pars Balkon Fire Torch",
    heat: "Compact outdoor unit — burn rate not published separately",
    area: "Patio / balcony accent heat, not a whole-room heater",
    price: "Contact us for pricing",
    badge: "Outdoor Only",
    tone: "graphite",
    gallery: parsBalkonGallery,
  },
  {
    name: "Pars Fuel Test Unit",
    heat: "Specs coming soon",
    area: "Details coming soon",
    price: "Contact us for pricing",
    badge: "Coming Soon",
    tone: "sand",
    gallery: ["/products/yakit-test/photo-01.jpg"],
  },
];

const faqs = [
  ["How do I choose the right stove for my home?", "We recommend a model based on your square footage, insulation, climate zone, and local code requirements. Start with our free consultation."],
  ["Is installation included?", "Standard installation options are shown on each product page. Any venting or electrical work is quoted clearly before your appointment."],
  ["How much fuel does a pellet stove use?", "Depending on the heat setting and insulation, typical consumption is approximately 0.6–2.2 kg of pellets per hour."],
  ["How long does delivery take?", "In-stock models typically ship within 3–7 business days in our Canadian service areas. Remote-area timing may vary."],
  ["Are these stoves certified for indoor use in Canada?", "Certification status (CSA/ULC) for indoor installation has not been confirmed for these models. Contact us before planning an indoor install — a local inspector or installer can confirm what's required in your province."],
  ["Do the stoves need a chimney or flue?", "Yes, for indoor use all models require an external vent pipe to carry combustion exhaust outside. The Balkon Fire Torch is an outdoor-only accent unit and does not require venting."],
];

function Flame() {
  return <span className="flame" aria-hidden="true"><i /></span>;
}

function Stove({ tone = "graphite", src }: { tone?: string; src?: string }) {
  if (src) {
    return <div className={`stove ${tone}`}><img src={src} alt="" className="stove-photo" /></div>;
  }
  return <div className={`stove ${tone}`} aria-hidden="true"><div className="pipe"/><div className="stove-top"/><div className="stove-body"><div className="window"><Flame/><span className="ember e1"/><span className="ember e2"/></div><div className="control"/></div><div className="feet"><i/><i/></div></div>;
}

function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 7000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const goTo = (index: number) => setActiveSlide((index + heroSlides.length) % heroSlides.length);

  return (
    <section
      className="hero-carousel"
      aria-roledescription="carousel"
      aria-label="Featured Pars Stove highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") goTo(activeSlide - 1);
        if (event.key === "ArrowRight") goTo(activeSlide + 1);
      }}
    >
      <div className="hero-slides" aria-live="polite">
        {heroSlides.map((slide, index) => (
          <article
            className={`hero-slide ${index === activeSlide ? "is-active" : ""}`}
            aria-hidden={index !== activeSlide}
            key={`${slide.title}-${slide.accent}`}
          >
            <img src={slide.image} alt={index === activeSlide ? slide.alt : ""} />
            <div className="hero-shade" />
            <div className="hero-copy">
              <div className="eyebrow"><span />{slide.eyebrow}</div>
              <h1>{slide.title}<br/><em>{slide.accent}</em></h1>
              <p>{slide.copy}</p>
              <div className="hero-buttons">
                <a className="btn primary" href="#urunler">{slide.primary}<span>→</span></a>
                <a className="btn secondary" href="#final-contact">{slide.secondary}<span>→</span></a>
              </div>
              <div className="hero-proof" aria-label="Customer trust highlights">
                <div><b>4.9</b><span className="stars">★★★★★</span><small>1,200+ happy homeowners</small></div>
                <i />
                <div><b>2 years</b><small>Manufacturer warranty</small></div>
                <i />
                <div><b>92%+</b><small>High efficiency</small></div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <button className="hero-arrow prev" onClick={() => goTo(activeSlide - 1)} aria-label="Previous slide">←</button>
      <button className="hero-arrow next" onClick={() => goTo(activeSlide + 1)} aria-label="Next slide">→</button>
      <div className="hero-dots" role="tablist" aria-label="Choose hero slide">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.title}
            className={index === activeSlide ? "active" : ""}
            onClick={() => goTo(index)}
            role="tab"
            aria-selected={index === activeSlide}
            aria-label={`Show slide ${index + 1}: ${slide.title} ${slide.accent}`}
          ><span /></button>
        ))}
      </div>
      <button className="hero-pause" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Resume automatic slides" : "Pause automatic slides"}>{paused ? "▶" : "Ⅱ"}</button>
    </section>
  );
}

type Product = (typeof products)[number];

function ProductCard({ p, cart, setCart }: { p: Product; cart: number; setCart: (n: number) => void }) {
  const [activeImg, setActiveImg] = useState(p.gallery[0]);
  return (
    <article className="product">
      <div className="product-image">
        <span className="badge">{p.badge}</span>
        <button aria-label={`Add ${p.name} to favourites`}>♡</button>
        <img src={activeImg} alt={p.name} className="main-photo" />
      </div>
      {p.gallery.length > 1 && (
        <div className="product-thumbs">
          {p.gallery.map((src, i) => (
            <img key={src} src={src} alt={`${p.name} view ${i + 1}`} className={src === activeImg ? "active" : ""} onClick={() => setActiveImg(src)} />
          ))}
        </div>
      )}
      <div className="product-info">
        <div className="spec"><span>{p.heat}</span><i/> <span>{p.area}</span></div>
        <h3>{p.name}</h3>
        <div className="price-row">
          <div><small>Starting at</small><b>{p.price}</b></div>
          <button onClick={() => setCart(cart + 1)} aria-label={`Add ${p.name} to cart`}>Add to Cart</button>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [cart, setCart] = useState(0);

  return (
    <main>
      <div className="topbar"><span>Free shipping in select Canadian regions</span><span>•</span><span>Flexible financing available</span><span>•</span><span>Canadian customer support</span></div>
      <header>
        <a className="brand brand-logo" href="#" aria-label="Pars Stove home"><img src="/pars-stove-logo.png" alt="Pars Stove" /></a>
        <nav className={menu ? "open" : ""} aria-label="Main navigation">
          <a href="#urunler" onClick={() => setMenu(false)}>Stoves</a><a href="#neden" onClick={() => setMenu(false)}>Why Pars?</a><a href="#siparis" onClick={() => setMenu(false)}>How It Works</a><a href="#sss" onClick={() => setMenu(false)}>Support</a>
        </nav>
        <div className="header-actions"><button className="cart" aria-label={`Cart, ${cart} items`}>Cart <span>{cart}</span></button><a className="header-cta" href="#urunler">Shop Stoves</a><button className="menu" onClick={() => setMenu(!menu)} aria-label="Open menu" aria-expanded={menu}>☰</button></div>
      </header>

      <HeroCarousel />

      <section className="categories">
        <div className="section-intro"><div><span className="kicker">BUILT AROUND YOUR HOME</span><h2>There’s a <em>Pars</em> for every space.</h2></div><p>High-efficiency models for everything from compact cabins and condos to large Canadian homes.</p></div>
        <div className="category-grid"><article><span className="cat-icon">⌂</span><div><h3>Air Pellet Stoves</h3><p>Fast, even heat for open spaces</p></div><a href="#urunler">→</a></article><article><span className="cat-icon">≋</span><div><h3>Hydronic Stoves</h3><p>Whole-home radiator comfort</p></div><a href="#urunler">→</a></article><article><span className="cat-icon">↯</span><div><h3>Ducted Systems</h3><p>Warm multiple rooms at once</p></div><a href="#urunler">→</a></article></div>
      </section>

      <section className="products" id="urunler">
        <div className="section-head"><div><span className="kicker">FEATURED MODELS</span><h2>Canadian favourites</h2></div><a href="#urunler">View all <span>→</span></a></div>
        <div className="product-grid">{products.map((p) => <ProductCard key={p.name} p={p} cart={cart} setCart={setCart} />)}</div>
      </section>

      <section className="benefits" id="neden"><div className="benefit-visual"><div className="lounge"><span className="plant">♧</span><div className="side-table"/><Stove tone="sand"/></div><div className="saving"><b>Up to 35%</b><span>fuel savings</span></div></div><div className="benefit-copy"><span className="kicker">WHY PELLET?</span><h2>A smarter way<br/><em>to stay warm.</em></h2><p>We bring together the warmth of a wood stove and the ease of modern technology. Simply set your preferred temperature.</p><ul><li><b>Automatic operation</b><span>Schedule it so your home is warm before you arrive.</span></li><li><b>Cleaner combustion</b><span>Lower emissions and renewable fuel options.</span></li><li><b>Long burn time</b><span>Enjoy 8–24 hours of steady heat from one fill.</span></li></ul><a href="#siparis" className="text-link">Explore pellet heating <span>→</span></a></div></section>

      <section className="steps" id="siparis"><span className="kicker">THREE EASY STEPS</span><h2>Your path to warmer winters</h2><div className="step-grid"><article><b>01</b><span>▤</span><h3>Choose your model</h3><p>Find the right output for your home or speak with our heating team.</p></article><div className="step-line">→</div><article><b>02</b><span>▣</span><h3>Order with confidence</h3><p>Use secure checkout and flexible Canadian financing options.</p></article><div className="step-line">→</div><article><b>03</b><span>⚙</span><h3>Install and enjoy</h3><p>A qualified professional completes installation to local requirements.</p></article></div></section>

      <section className="guarantee"><div><span className="shield">✓</span><div><span className="kicker">THE PARS PROMISE</span><h2>More than a stove.<br/>Complete peace of mind.</h2></div></div><ul><li><b>2 Years</b><span>Manufacturer warranty</span></li><li><b>Canada</b><span>Regional service partners</span></li><li><b>14 Days</b><span>Easy returns</span></li><li><b>Expert</b><span>Customer support</span></li></ul></section>

      <section className="testimonials"><span className="kicker">REAL HOMES, REAL WARMTH</span><h2>Homeowners are feeling the difference</h2><div className="review-grid"><article><span className="stars">★★★★★</span><p>“Our home heats up faster and we no longer have to manage firewood. The installation team was careful and professional.”</p><div><b>MK</b><span><strong>Michael K.</strong><small>Barrie, ON • P12 Vision</small></span></div></article><article><span className="stars">★★★★★</span><p>“They walked us through every step. We noticed the difference on our first heating bill, and the stove is remarkably quiet.”</p><div><b>SA</b><span><strong>Sarah A.</strong><small>Kelowna, BC • P8 Compact</small></span></div></article><article><span className="stars">★★★★★</span><p>“We installed the hydronic model in our rural home. Every room stays comfortable, even on the coldest mornings.”</p><div><b>ET</b><span><strong>Eric T.</strong><small>Sherbrooke, QC • P18 Hydro</small></span></div></article></div></section>

      <section className="faq" id="sss"><div><span className="kicker">GOOD TO KNOW</span><h2>Frequently asked<br/><em>questions.</em></h2><p>Still looking for an answer?</p><a href="#final-contact">Talk to our team →</a></div><div className="accordion">{faqs.map((f, i) => <article key={f[0]} className={openFaq === i ? "active" : ""}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{f[0]}</span><b>{openFaq === i ? "−" : "+"}</b></button><p>{f[1]}</p></article>)}</div></section>

      <section className="final-cta" id="final-contact"><div><Flame/><span className="spark cs1">✦</span><span className="spark cs2">✦</span></div><span className="kicker">A WARMER CANADIAN WINTER</span><h2>Let’s find the right Pars<br/>for your home.</h2><p>Get a free consultation and a personalized recommendation based on your space, climate, and installation needs.</p><div><a className="btn light" href="#urunler">Explore Models <span>→</span></a><a className="btn outline" href="#footer-contact">Request a Consultation</a></div></section>

      <footer id="footer-contact"><div className="footer-main"><div><a className="brand brand-logo footer-brand" href="#" aria-label="Pars Stove home"><img src="/pars-stove-logo.png" alt="Pars Stove" /></a><p>Sustainable, efficient heating comfort made for Canadian homes.</p><div className="socials"><a href="#" aria-label="Instagram">ig</a><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="YouTube">▶</a></div></div><div><b>Products</b><a href="#urunler">Air Pellet Stoves</a><a href="#urunler">Hydronic Stoves</a><a href="#urunler">Ducted Systems</a><a href="#urunler">Pellet Fuel</a></div><div><b>Company</b><a href="#neden">About Us</a><a href="#neden">Why Pars?</a><a href="#">Dealer Network</a><a href="#">Journal</a></div><div><b>Support</b><a href="#siparis">Delivery & Installation</a><a href="#sss">Warranty & Returns</a><a href="#sss">FAQs</a><a href="#final-contact">Contact</a></div><div className="newsletter"><b>Get warm offers in your inbox</b><p>Be first to hear about new models and seasonal offers.</p><form onSubmit={(e) => e.preventDefault()}><input type="email" placeholder="Email address" aria-label="Email address"/><button aria-label="Subscribe">→</button></form></div></div><div className="footer-bottom"><span>© 2026 Pars Stove Canada. All rights reserved.</span><div><a href="#">Privacy</a><a href="#">Terms of Sale</a><a href="#">Accessibility</a></div><span>Secure Checkout • Visa • Mastercard</span></div></footer>
    </main>
  );
}
