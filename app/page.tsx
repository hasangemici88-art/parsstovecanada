"use client";

import { useState } from "react";

const products = [
  { name: "Pars P8 Compact", heat: "27,000 BTU", area: "650–970 sq. ft.", price: "$3,499 CAD", badge: "Best Seller", tone: "graphite" },
  { name: "Pars P12 Vision", heat: "41,000 BTU", area: "970–1,400 sq. ft.", price: "$4,599 CAD", badge: "New", tone: "sand" },
  { name: "Pars P18 Hydro", heat: "61,000 BTU", area: "1,500–2,050 sq. ft.", price: "$6,299 CAD", badge: "Hydronic", tone: "forest" },
];

const faqs = [
  ["How do I choose the right stove for my home?", "We recommend a model based on your square footage, insulation, climate zone, and local code requirements. Start with our free consultation."],
  ["Is installation included?", "Standard installation options are shown on each product page. Any venting or electrical work is quoted clearly before your appointment."],
  ["How much fuel does a pellet stove use?", "Depending on the heat setting and insulation, typical consumption is approximately 0.6–2.2 kg of pellets per hour."],
  ["How long does delivery take?", "In-stock models typically ship within 3–7 business days in our Canadian service areas. Remote-area timing may vary."],
];

function Flame() {
  return <span className="flame" aria-hidden="true"><i /></span>;
}

function Stove({ tone = "graphite" }: { tone?: string }) {
  return <div className={`stove ${tone}`} aria-hidden="true"><div className="pipe"/><div className="stove-top"/><div className="stove-body"><div className="window"><Flame/><span className="ember e1"/><span className="ember e2"/></div><div className="control"/></div><div className="feet"><i/><i/></div></div>;
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [cart, setCart] = useState(0);

  return (
    <main>
      <div className="topbar"><span>Free shipping in select Canadian regions</span><span>•</span><span>Flexible financing available</span><span>•</span><span>Canadian customer support</span></div>
      <header>
        <a className="brand" href="#" aria-label="Pars Stove home"><Flame/><span><b>PARS</b><small>STOVE</small></span></a>
        <nav className={menu ? "open" : ""} aria-label="Main navigation">
          <a href="#urunler" onClick={() => setMenu(false)}>Stoves</a><a href="#neden" onClick={() => setMenu(false)}>Why Pars?</a><a href="#siparis" onClick={() => setMenu(false)}>How It Works</a><a href="#sss" onClick={() => setMenu(false)}>Support</a>
        </nav>
        <div className="header-actions"><button className="cart" aria-label={`Cart, ${cart} items`}>Cart <span>{cart}</span></button><a className="header-cta" href="#urunler">Shop Stoves</a><button className="menu" onClick={() => setMenu(!menu)} aria-label="Open menu" aria-expanded={menu}>☰</button></div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span>●</span> MADE FOR CANADIAN WINTERS</div>
          <h1>Natural warmth.<br/><em>Smarter comfort.</em></h1>
          <p>Heat your home effortlessly with a high-efficiency pellet stove. Choose online, get it delivered, and have it installed by a qualified local professional.</p>
          <div className="hero-buttons"><a className="btn primary" href="#urunler">Find My Stove <span>→</span></a><a className="btn secondary" href="#neden">How it works <span>▶</span></a></div>
          <div className="hero-proof"><div><b>4.9</b><span className="stars">★★★★★</span><small>1,200+ happy homeowners</small></div><i/><div><b>2 years</b><small>Manufacturer warranty</small></div><i/><div><b>92%+</b><small>High efficiency</small></div></div>
        </div>
        <div className="hero-visual">
          <div className="warm-orb"/><div className="floor-shadow"/><Stove/>
          <div className="float-card fc1"><span>♨</span><div><b>High Efficiency</b><small>More heat from less fuel</small></div></div>
          <div className="float-card fc2"><span>✓</span><div><b>Qualified Installation</b><small>Trusted local professionals</small></div></div>
          <span className="spark s1">✦</span><span className="spark s2">·</span><span className="spark s3">✦</span>
        </div>
      </section>

      <section className="categories">
        <div className="section-intro"><div><span className="kicker">BUILT AROUND YOUR HOME</span><h2>There’s a <em>Pars</em> for every space.</h2></div><p>High-efficiency models for everything from compact cabins and condos to large Canadian homes.</p></div>
        <div className="category-grid"><article><span className="cat-icon">⌂</span><div><h3>Air Pellet Stoves</h3><p>Fast, even heat for open spaces</p></div><a href="#urunler">→</a></article><article><span className="cat-icon">≋</span><div><h3>Hydronic Stoves</h3><p>Whole-home radiator comfort</p></div><a href="#urunler">→</a></article><article><span className="cat-icon">↯</span><div><h3>Ducted Systems</h3><p>Warm multiple rooms at once</p></div><a href="#urunler">→</a></article></div>
      </section>

      <section className="products" id="urunler">
        <div className="section-head"><div><span className="kicker">FEATURED MODELS</span><h2>Canadian favourites</h2></div><a href="#urunler">View all <span>→</span></a></div>
        <div className="product-grid">{products.map((p) => <article className="product" key={p.name}><div className="product-image"><span className="badge">{p.badge}</span><button aria-label={`Add ${p.name} to favourites`}>♡</button><Stove tone={p.tone}/></div><div className="product-info"><div className="spec"><span>{p.heat}</span><i/> <span>{p.area}</span></div><h3>{p.name}</h3><div className="price-row"><div><small>Starting at</small><b>{p.price}</b></div><button onClick={() => setCart(cart + 1)} aria-label={`Add ${p.name} to cart`}>Add to Cart</button></div></div></article>)}</div>
      </section>

      <section className="benefits" id="neden"><div className="benefit-visual"><div className="lounge"><span className="plant">♧</span><div className="side-table"/><Stove tone="sand"/></div><div className="saving"><b>Up to 35%</b><span>fuel savings</span></div></div><div className="benefit-copy"><span className="kicker">WHY PELLET?</span><h2>A smarter way<br/><em>to stay warm.</em></h2><p>We bring together the warmth of a wood stove and the ease of modern technology. Simply set your preferred temperature.</p><ul><li><b>Automatic operation</b><span>Schedule it so your home is warm before you arrive.</span></li><li><b>Cleaner combustion</b><span>Lower emissions and renewable fuel options.</span></li><li><b>Long burn time</b><span>Enjoy 8–24 hours of steady heat from one fill.</span></li></ul><a href="#siparis" className="text-link">Explore pellet heating <span>→</span></a></div></section>

      <section className="steps" id="siparis"><span className="kicker">THREE EASY STEPS</span><h2>Your path to warmer winters</h2><div className="step-grid"><article><b>01</b><span>▤</span><h3>Choose your model</h3><p>Find the right output for your home or speak with our heating team.</p></article><div className="step-line">→</div><article><b>02</b><span>▣</span><h3>Order with confidence</h3><p>Use secure checkout and flexible Canadian financing options.</p></article><div className="step-line">→</div><article><b>03</b><span>⚙</span><h3>Install and enjoy</h3><p>A qualified professional completes installation to local requirements.</p></article></div></section>

      <section className="guarantee"><div><span className="shield">✓</span><div><span className="kicker">THE PARS PROMISE</span><h2>More than a stove.<br/>Complete peace of mind.</h2></div></div><ul><li><b>2 Years</b><span>Manufacturer warranty</span></li><li><b>Canada</b><span>Regional service partners</span></li><li><b>14 Days</b><span>Easy returns</span></li><li><b>Expert</b><span>Customer support</span></li></ul></section>

      <section className="testimonials"><span className="kicker">REAL HOMES, REAL WARMTH</span><h2>Homeowners are feeling the difference</h2><div className="review-grid"><article><span className="stars">★★★★★</span><p>“Our home heats up faster and we no longer have to manage firewood. The installation team was careful and professional.”</p><div><b>MK</b><span><strong>Michael K.</strong><small>Barrie, ON • P12 Vision</small></span></div></article><article><span className="stars">★★★★★</span><p>“They walked us through every step. We noticed the difference on our first heating bill, and the stove is remarkably quiet.”</p><div><b>SA</b><span><strong>Sarah A.</strong><small>Kelowna, BC • P8 Compact</small></span></div></article><article><span className="stars">★★★★★</span><p>“We installed the hydronic model in our rural home. Every room stays comfortable, even on the coldest mornings.”</p><div><b>ET</b><span><strong>Eric T.</strong><small>Sherbrooke, QC • P18 Hydro</small></span></div></article></div></section>

      <section className="faq" id="sss"><div><span className="kicker">GOOD TO KNOW</span><h2>Frequently asked<br/><em>questions.</em></h2><p>Still looking for an answer?</p><a href="#final-contact">Talk to our team →</a></div><div className="accordion">{faqs.map((f, i) => <article key={f[0]} className={openFaq === i ? "active" : ""}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{f[0]}</span><b>{openFaq === i ? "−" : "+"}</b></button><p>{f[1]}</p></article>)}</div></section>

      <section className="final-cta" id="final-contact"><div><Flame/><span className="spark cs1">✦</span><span className="spark cs2">✦</span></div><span className="kicker">A WARMER CANADIAN WINTER</span><h2>Let’s find the right Pars<br/>for your home.</h2><p>Get a free consultation and a personalized recommendation based on your space, climate, and installation needs.</p><div><a className="btn light" href="#urunler">Explore Models <span>→</span></a><a className="btn outline" href="#footer-contact">Request a Consultation</a></div></section>

      <footer id="footer-contact"><div className="footer-main"><div><a className="brand footer-brand" href="#"><Flame/><span><b>PARS</b><small>STOVE</small></span></a><p>Sustainable, efficient heating comfort made for Canadian homes.</p><div className="socials"><a href="#" aria-label="Instagram">ig</a><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="YouTube">▶</a></div></div><div><b>Products</b><a href="#urunler">Air Pellet Stoves</a><a href="#urunler">Hydronic Stoves</a><a href="#urunler">Ducted Systems</a><a href="#urunler">Pellet Fuel</a></div><div><b>Company</b><a href="#neden">About Us</a><a href="#neden">Why Pars?</a><a href="#">Dealer Network</a><a href="#">Journal</a></div><div><b>Support</b><a href="#siparis">Delivery & Installation</a><a href="#sss">Warranty & Returns</a><a href="#sss">FAQs</a><a href="#final-contact">Contact</a></div><div className="newsletter"><b>Get warm offers in your inbox</b><p>Be first to hear about new models and seasonal offers.</p><form onSubmit={(e) => e.preventDefault()}><input type="email" placeholder="Email address" aria-label="Email address"/><button aria-label="Subscribe">→</button></form></div></div><div className="footer-bottom"><span>© 2026 Pars Stove Canada. All rights reserved.</span><div><a href="#">Privacy</a><a href="#">Terms of Sale</a><a href="#">Accessibility</a></div><span>Secure Checkout • Visa • Mastercard</span></div></footer>
    </main>
  );
}
