"use client";

import { motion, MotionConfig } from "motion/react";

const products = [
  { name: "Ashwood 700", type: "Wood stove", output: "Up to 2,100 sq. ft.", tone: "ashwood" },
  { name: "Emberline 50", type: "Gas fireplace", output: "38,000 BTU", tone: "emberline" },
  { name: "Northstar Insert", type: "Wood insert", output: "Up to 1,800 sq. ft.", tone: "northstar" },
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
            <a href="#collection">Collection</a>
            <a href="#process">Installation</a>
            <a href="#about">Why ParsStove</a>
          </nav>
          <a className="header-cta" href="#quote">Request a quote <span>↗</span></a>
        </header>

        <section className="hero" id="top">
          <div className="hero-copy">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className="eyebrow">Built for the long winter</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>Warmth, engineered for <em>Canadian winters.</em></motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }} className="hero-lede">High-efficiency stoves and fireplaces, thoughtfully selected and professionally installed for lasting comfort.</motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }} className="hero-actions">
              <a className="button button-primary" href="#collection">Explore the collection <span>→</span></a>
              <a className="text-link" href="#quote">Plan your project <span>↗</span></a>
            </motion.div>
          </div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} aria-label="Modern freestanding stove in a warm lodge setting" role="img">
            <div className="sun-glow" />
            <div className="stove-pipe" />
            <div className="stove">
              <div className="stove-door"><i className="flame one"/><i className="flame two"/><i className="flame three"/></div>
              <div className="stove-handle" />
            </div>
            <div className="hearth" />
            <div className="visual-note"><strong>HEAT WITH CONFIDENCE</strong><span>Certified systems • Expert guidance</span></div>
          </motion.div>
        </section>

        <section className="trust-strip" aria-label="Service highlights">
          <span>CSA-certified options</span><span>Energy-efficient heating</span><span>Professional installation</span><span>Canadian winter ready</span>
        </section>

        <motion.section className="collection section" id="collection" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
          <div className="section-heading">
            <div><p className="eyebrow">Our collection</p><h2>Find your perfect fire.</h2></div>
            <p>From modern freestanding stoves to seamless fireplace inserts, each model is chosen for reliable performance and timeless design.</p>
          </div>
          <div className="product-grid">
            {products.map((product, index) => (
              <motion.article className="product-card" key={product.name} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 280, damping: 24 }}>
                <div className={`product-visual ${product.tone}`}><div className="mini-pipe"/><div className="mini-stove"><span/></div><b>0{index + 1}</b></div>
                <div className="product-info"><p>{product.type}</p><h3>{product.name}</h3><div><span>{product.output}</span><a href="#quote" aria-label={`Ask about ${product.name}`}>↗</a></div></div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <section className="story section" id="about">
          <motion.div className="story-panel" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <p className="eyebrow light">The ParsStove difference</p>
            <h2>Better warmth begins with better guidance.</h2>
            <p>We make home heating feel clear—from choosing the right output to planning a safe, beautiful installation. You get practical advice, well-built products and support beyond the first fire.</p>
            <div className="story-stats"><div><strong>4-season</strong><span>local support</span></div><div><strong>One team</strong><span>from plan to flame</span></div></div>
          </motion.div>
          <div className="story-image" aria-hidden="true"><div className="log log-a"/><div className="log log-b"/><div className="story-fire"/></div>
        </section>

        <motion.section className="process section" id="process" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }}>
          <div className="section-heading compact"><div><p className="eyebrow">From plan to first fire</p><h2>A warmer home, in four steps.</h2></div></div>
          <div className="steps">{steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </motion.section>

        <section className="quote section" id="quote">
          <div className="quote-copy"><p className="eyebrow light">Start your project</p><h2>Let&apos;s make winter feel different.</h2><p>Tell us a little about your space. We&apos;ll help you identify the right heating solution and next step.</p></div>
          <form className="quote-form" action="mailto:info@parsstove.ca" method="post" encType="text/plain">
            <label>Full name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
            <label>Email address<input type="email" name="email" autoComplete="email" required placeholder="you@example.com" /></label>
            <label>What are you looking for?<select name="project" defaultValue=""><option value="" disabled>Select a project type</option><option>Wood stove</option><option>Gas fireplace</option><option>Fireplace insert</option><option>Not sure yet</option></select></label>
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
