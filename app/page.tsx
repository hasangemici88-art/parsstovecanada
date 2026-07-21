"use client";

import { motion, MotionConfig } from "motion/react";

const fade = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: .7, ease: [0.22, 1, 0.36, 1] as const } } };

const steps = [
  ["01", "Share your space", "Tell us about your room, chimney and heating goals."],
  ["02", "Choose your fire", "We match the right Pars configuration to the way you live."],
  ["03", "Plan the installation", "Clear guidance for placement, venting and a clean finish."],
  ["04", "Light the first flame", "Enjoy efficient pellet heat with wood-fire flexibility."],
];

export default function Home() {
  return <MotionConfig reducedMotion="user"><main className="neo-site">
    <section className="neo-hero" id="top">
      <img src="/pellet-stove-cabin.jpg" alt="Pars pellet stove burning in a modern cabin" />
      <div className="hero-wash" />
      <header className="neo-nav">
        <a href="#top" className="neo-logo">ParsStove.</a>
        <nav><a href="#system">System</a><a href="#process">Process</a><a href="#contact">Contact</a></nav>
        <a href="#contact" className="menu-disc" aria-label="Start a project"><span/><span/><span/></a>
      </header>
      <motion.div className="hero-copy-neo" initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{duration:.9,ease:[.22,1,.36,1]}}>
        <p>Fire, re-engineered for modern Canadian living. Panoramic presence. Renewable fuel. Real comfort.</p>
        <span className="hero-kicker">Intelligent pellet heating</span>
        <h1>PARS<span>STOVE</span></h1>
      </motion.div>
      <div className="vertical-year">© 2026 <i/> 3-SIDED FLAME</div>
    </section>

    <section className="dark-section intro" id="system">
      <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{once:true,amount:.2}}>
        <p className="bracket">[The System]</p>
        <h2>SMART HEAT<br/><span>THAT ADAPTS</span></h2>
        <div className="plus">+</div>
        <p className="lead">Stop settling for ordinary heat. Pars combines a three-sided flame view, renewable pine pellets and dual-fuel freedom in one sculptural system.</p>
      </motion.div>
      <div className="feature-stack">
        <motion.article variants={fade} initial="hidden" whileInView="show" viewport={{once:true,amount:.25}} className="feature-card">
          <p className="feature-label"><b>◎</b> Panoramic Flame</p><h3>See the fire from every angle.</h3>
          <div className="split-images"><img src="/pellet-stove-classic.jpg" alt="Classic pellet stove"/><img src="/pellet-stove-cabin.jpg" alt="Pellet stove in a cabin"/></div>
        </motion.article>
        <motion.article variants={fade} initial="hidden" whileInView="show" viewport={{once:true,amount:.25}} className="feature-card fuel-card">
          <p className="feature-label"><b>✦</b> Fuel Flexibility</p><h3>Pellet efficiency. Wood-fire soul.</h3>
          <div className="fuel-display"><div><span>PELLET</span><strong>100%</strong><small>renewable pine</small></div><div><span>WOOD</span><strong>+</strong><small>when you choose</small></div></div>
        </motion.article>
        <motion.article variants={fade} initial="hidden" whileInView="show" viewport={{once:true,amount:.25}} className="feature-card metric-card">
          <p className="feature-label"><b>↗</b> Consistent Comfort</p><h3>Designed to make long winters feel effortless.</h3>
          <div className="heat-bars">{[42,61,54,73,68,92].map((h,i)=><i key={i} style={{height:`${h}%`}}><span>{18+i}°</span></i>)}</div>
        </motion.article>
      </div>
    </section>

    <section className="dark-section intelligence">
      <p className="bracket">[Performance]</p><h2>HEAT<br/>INTELLIGENCE</h2>
      <div className="cinema"><img src="/pellet-stove-modern.jpg" alt="Modern Pars pellet stove with a visible flame"/><span className="play">→</span></div>
      <div className="big-stats"><div><strong>3×</strong><span>flame visibility</span></div><div><strong>2</strong><span>fuel choices</span></div><div><strong>1</strong><span>remarkable centrepiece</span></div></div>
      <div className="plus">+</div><p className="lead">A heating object should do more than warm the room. It should shape the atmosphere, simplify the ritual and become part of the architecture.</p>
    </section>

    <section className="color-break"><div>+</div><div>+</div><p>WARMTH WITHOUT<br/>THE ORDINARY</p></section>

    <section className="dark-section process" id="process">
      <p className="bracket">[How it works]</p><h2>SIMPLE STEPS<br/><span>WARM RESULTS</span></h2>
      <img className="process-image" src="/pars-pellet-system.png" alt="Pars pellet heating system"/>
      <div className="step-grid">{steps.map(([n,t,d])=><motion.article key={n} variants={fade} initial="hidden" whileInView="show" viewport={{once:true,amount:.2}}><b>{n}</b><h3>{t}</h3><p>{d}</p></motion.article>)}</div>
      <a className="pill" href="#contact">Plan your ParsStove</a>
    </section>

    <section className="dark-section result">
      <p className="bracket">[The experience]</p><h2>VISIBLE<br/><span>[FROM EVERY SIDE]</span></h2>
      <div className="quote-card"><em>ParsStove.</em><h3>A room transformed.</h3><blockquote>“The fire doesn’t sit against the wall anymore. It feels present from every part of the room.”</blockquote></div>
      <div className="result-image"><img src="/pellet-stove-classic.jpg" alt="Three-sided stove as the centrepiece of a living room"/><span>BEFORE</span><span>AFTER PARS</span></div>
    </section>

    <section className="dark-section collection">
      <p className="bracket">[Collection]</p><h2>SELECT YOUR<br/><span>FIRE PROFILE</span></h2>
      <div className="offer-card"><p className="feature-label">◎ Signature</p><strong>Three-Sided</strong><h3>Panoramic pellet heat</h3><p>For open rooms and interiors where the flame deserves to be seen from more than one direction.</p><ul><li>Three-sided flame presence</li><li>Renewable pine pellet compatible</li><li>Wood-burning flexibility</li><li>Installation planning support</li></ul><a className="pill" href="#contact">Request consultation</a></div>
      <div className="offer-card image-offer"><img src="/pellet-stove-cabin.jpg" alt="ParsStove custom installation"/><span>Custom project</span><h3>Bigger vision?<br/>Let&apos;s build around it.</h3></div>
    </section>

    <section className="dark-section contact" id="contact">
      <p className="bracket">[Start a project]</p><h2>BRING THE FIRE<br/><span>HOME</span></h2>
      <form action="mailto:info@parssttove.com" method="post" encType="text/plain"><label>Name<input name="name" required placeholder="Your name"/></label><label>Email<input type="email" name="email" required placeholder="you@example.com"/></label><label>Postal code<input name="postal" placeholder="A1A 1A1"/></label><label>Project<select name="project" defaultValue=""><option value="" disabled>Choose one</option><option>Pellet stove</option><option>Installation</option><option>Pellet fuel</option></select></label><button className="pill" type="submit">Start the conversation</button></form>
      <footer><a href="#top" className="neo-logo">ParsStove.</a><span>Canada / 2026</span></footer>
    </section>
  </main></MotionConfig>;
}
