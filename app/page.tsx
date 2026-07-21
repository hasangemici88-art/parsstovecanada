"use client";

import { motion, MotionConfig } from "motion/react";

const products = [
  { name: "Three-Sided Pellet Stove", type: "Signature collection", output: "Panoramic flame view", image: "/pellet-stove-classic.jpg" },
  { name: "Modern Pellet Stove", type: "Contemporary collection", output: "Compact, efficient heat", image: "/pellet-stove-modern.jpg" },
  { name: "Cabin Pellet Stove", type: "Lodge collection", output: "Made for winter rooms", image: "/pellet-stove-cabin.jpg" },
];

const steps = [
  ["01", "Home consultation", "We learn how you live, measure the space and understand your heating goals."],
  ["02", "Right-size selection", "Choose a certified stove or fireplace matched to your home—not just the room."],
  ["03", "Professional install", "A clean, code-conscious installation coordinated from delivery to first fire."],
  ["04", "Ongoing care", "Practical guidance and dependable support keep your system performing beautifully."],
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <main>
        <header className="site-header">
          <a className="brand" href="#top" aria-label="ParsStove Canada home">
            <span className="brand-mark">P</span>
            <span>ParsStove <small>CANADA</small></span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#collection">Pellet stoves</a>
            <a href="#process">Installation</a>
            <a href="#about">Why ParsStove</a>
          </nav>
          <a className="header-cta" href="#quote">Request a quote <span>↗</span></a>
        </header>

        <section className="hero" id="top">
          <div className="hero-copy">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className="eyebrow">Pellet heat, beautifully reimagined</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>See the fire.<br/><em>Feel the difference.</em></motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }} className="hero-lede">Pars three-sided pellet stoves bring a panoramic flame, efficient warmth and remarkable fuel flexibility to Canadian homes.</motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }} className="hero-actions">
              <a className="button button-primary" href="#collection">Explore the collection <span>→</span></a>
              <a className="text-link" href="#quote">Plan your project <span>↗</span></a>
            </motion.div>
          </div>
          <motion.div className="hero-visual photo-hero" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }}>
            <img src="/pellet-stove-cabin.jpg" alt="Pars pellet stove warming a wood-lined Canadian cabin" />
            <div className="hero-badge"><strong>360°</strong><span>Panoramic<br/>flame presence</span></div>
            <div className="visual-note"><strong>DESIGNED AROUND THE FLAME</strong><span>Pellet efficiency • Wood-fire flexibility</span></div>
          </motion.div>
        </section>

        <section className="trust-strip" aria-label="Service highlights">
          <span>Three-sided flame view</span><span>Renewable pine pellets</span><span>Pellet + wood flexibility</span><span>Installation guidance</span>
        </section>

        <motion.section className="collection section" id="collection" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
          <div className="section-heading">
            <div><p className="eyebrow">The Pars collection</p><h2>One flame. Three expressions.</h2></div>
            <p>Explore pellet stove configurations shaped for contemporary homes, weekend cabins and character-rich interiors.</p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <motion.article className="product-card" key={product.name} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 280, damping: 24 }}>
                <div className="product-visual product-photo"><img src={product.image} alt={product.name} loading="lazy" /></div>
                <div className="product-info"><p>{product.type}</p><h3>{product.name}</h3><div><span>{product.output}</span><a href="#quote" aria-label={`Ask about ${product.name}`}>↗</a></div></div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <section className="story section" id="about">
          <motion.div className="story-panel" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <p className="eyebrow light">Why pellet heat</p>
            <h2>Less waste. More comfort. A better ritual.</h2>
            <p>Natural pine pellets turn renewable material into consistent, convenient heat. Pars adds a distinctive three-sided view and the flexibility to enjoy traditional wood when you choose.</p>
            <div className="story-stats"><div><strong>100% pine</strong><span>renewable pellet fuel</span></div><div><strong>Dual-fuel</strong><span>pellet and wood capable</span></div></div>
          </motion.div>
          <div className="story-image real-story"><img src="/pars-pellet-system.png" alt="Pars pellet heating system" loading="lazy" /></div>
        </section>

        <motion.section className="process section" id="process" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }}>
          <div className="section-heading compact"><div><p className="eyebrow">From plan to first fire</p><h2>A warmer home, in four steps.</h2></div></div>
          <div className="steps">{steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </motion.section>

        <section className="quote section" id="quote">
          <div className="quote-copy"><p className="eyebrow light">Start your project</p><h2>Let&apos;s make winter feel different.</h2><p>Tell us a little about your space. We&apos;ll help you identify the right heating solution and next step.</p></div>
          <form className="quote-form" action="mailto:info@parssttove.com" method="post" encType="text/plain">
            <label>Full name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
            <label>Email address<input type="email" name="email" autoComplete="email" required placeholder="you@example.com" /></label>
            <label>What are you looking for?<select name="project" defaultValue=""><option value="" disabled>Select a project type</option><option>Three-sided pellet stove</option><option>Pellet fuel</option><option>Installation guidance</option><option>Not sure yet</option></select></label>
            <label>Postal code<input name="postal-code" autoComplete="postal-code" placeholder="A1A 1A1" /></label>
            <button className="button button-amber" type="submit">Request my consultation <span>→</span></button>
            <small>By submitting, you agree to be contacted about your project.</small>
          </form>
        </section>

        <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">P</span><span>ParsStove <small>CANADA</small></span></a><p>Thoughtful heat for Canadian homes.</p><div><a href="#collection">Collection</a><a href="#process">Installation</a><a href="#quote">Contact</a></div><span>© 2026 ParsStove Canada</span></footer>
      </main>
    </MotionConfig>
  );
}
