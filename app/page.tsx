"use client";

import { useState } from "react";

const products = [
  { name: "Pars P8 Compact", heat: "8 kW", area: "60–90 m²", price: "49.900 ₺", badge: "Çok Satan", tone: "graphite" },
  { name: "Pars P12 Vision", heat: "12 kW", area: "90–130 m²", price: "64.900 ₺", badge: "Yeni", tone: "sand" },
  { name: "Pars P18 Hydro", heat: "18 kW", area: "140–190 m²", price: "89.900 ₺", badge: "Kaloriferli", tone: "forest" },
];

const faqs = [
  ["Evim için doğru sobayı nasıl seçerim?", "Metrekare, yalıtım ve bulunduğunuz bölgeye göre öneri sunuyoruz. Ücretsiz keşif formunu doldurmanız yeterli."],
  ["Kurulum fiyata dahil mi?", "Standart kurulum paketleri ürün sayfasında açıkça belirtilir. Baca veya tesisat ihtiyacına göre ek fiyat önceden paylaşılır."],
  ["Pellet sobası ne kadar yakıt tüketir?", "Kullanım kademesi ve yalıtıma bağlı olarak ortalama saatte 0,6–2,2 kg pellet tüketir."],
  ["Teslimat ne kadar sürer?", "Stoklu ürünler Türkiye genelinde ortalama 3–7 iş gününde sevk edilir."],
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
      <div className="topbar"><span>Türkiye geneli ücretsiz kargo</span><span>•</span><span>Peşin fiyatına 6 taksit</span><span>•</span><span>0850 555 72 77</span></div>
      <header>
        <a className="brand" href="#" aria-label="Pars Stove ana sayfa"><Flame/><span><b>PARS</b><small>STOVE</small></span></a>
        <nav className={menu ? "open" : ""} aria-label="Ana menü">
          <a href="#urunler" onClick={() => setMenu(false)}>Sobalar</a><a href="#neden" onClick={() => setMenu(false)}>Neden Pars?</a><a href="#siparis" onClick={() => setMenu(false)}>Nasıl Alırım?</a><a href="#sss" onClick={() => setMenu(false)}>Destek</a>
        </nav>
        <div className="header-actions"><button className="cart" aria-label={`Sepet, ${cart} ürün`}>Sepet <span>{cart}</span></button><a className="header-cta" href="#urunler">Ürünleri İncele</a><button className="menu" onClick={() => setMenu(!menu)} aria-label="Menüyü aç" aria-expanded={menu}>☰</button></div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span>●</span> EVİNİZİN YENİ SICAKLIK NOKTASI</div>
          <h1>Doğanın sıcaklığı,<br/><em>akıllı konforla.</em></h1>
          <p>Yüksek verimli pellet sobalarıyla evinizi zahmetsizce ısıtın. Online seçin, kapınıza gelsin, uzman ekibimiz kursun.</p>
          <div className="hero-buttons"><a className="btn primary" href="#urunler">Sobamı Bul <span>→</span></a><a className="btn secondary" href="#neden">Nasıl çalışır? <span>▶</span></a></div>
          <div className="hero-proof"><div><b>4.9</b><span className="stars">★★★★★</span><small>1.200+ mutlu müşteri</small></div><i/><div><b>2 yıl</b><small>Üretici garantisi</small></div><i/><div><b>%92+</b><small>Yüksek verim</small></div></div>
        </div>
        <div className="hero-visual">
          <div className="warm-orb"/><div className="floor-shadow"/><Stove/>
          <div className="float-card fc1"><span>♨</span><div><b>A+ Verimlilik</b><small>Daha az yakıt, daha çok ısı</small></div></div>
          <div className="float-card fc2"><span>✓</span><div><b>Kolay Kurulum</b><small>Yetkili servis güvencesi</small></div></div>
          <span className="spark s1">✦</span><span className="spark s2">·</span><span className="spark s3">✦</span>
        </div>
      </section>

      <section className="categories">
        <div className="section-intro"><div><span className="kicker">İHTİYACINIZA UYGUN</span><h2>Her eve uygun bir <em>Pars</em> var.</h2></div><p>Kompakt yaşam alanlarından geniş evlere, ihtiyacınıza göre tasarlanmış yüksek verimli modeller.</p></div>
        <div className="category-grid"><article><span className="cat-icon">⌂</span><div><h3>Hava Üflemeli</h3><p>Tek odada hızlı ve homojen ısı</p></div><a href="#urunler">→</a></article><article><span className="cat-icon">≋</span><div><h3>Kaloriferli</h3><p>Tüm evde radyatör konforu</p></div><a href="#urunler">→</a></article><article><span className="cat-icon">↯</span><div><h3>Kanallı Sistem</h3><p>Birden fazla odayı aynı anda ısıtın</p></div><a href="#urunler">→</a></article></div>
      </section>

      <section className="products" id="urunler">
        <div className="section-head"><div><span className="kicker">ÖNE ÇIKAN MODELLER</span><h2>En çok tercih edilenler</h2></div><a href="#urunler">Tümünü gör <span>→</span></a></div>
        <div className="product-grid">{products.map((p) => <article className="product" key={p.name}><div className="product-image"><span className="badge">{p.badge}</span><button aria-label={`${p.name} favorilere ekle`}>♡</button><Stove tone={p.tone}/></div><div className="product-info"><div className="spec"><span>{p.heat}</span><i/> <span>{p.area}</span></div><h3>{p.name}</h3><div className="price-row"><div><small>Başlangıç fiyatı</small><b>{p.price}</b></div><button onClick={() => setCart(cart + 1)} aria-label={`${p.name} sepete ekle`}>Sepete Ekle</button></div></div></article>)}</div>
      </section>

      <section className="benefits" id="neden"><div className="benefit-visual"><div className="lounge"><span className="plant">♧</span><div className="side-table"/><Stove tone="sand"/></div><div className="saving"><b>%35’e varan</b><span>yakıt tasarrufu</span></div></div><div className="benefit-copy"><span className="kicker">NEDEN PELLET?</span><h2>Konforlu ısınmanın<br/><em>daha akıllı yolu.</em></h2><p>Odun sobasının sıcaklığını, modern teknolojinin kolaylığıyla buluşturduk. Siz sadece istediğiniz dereceyi seçin.</p><ul><li><b>Otomatik çalışma</b><span>Programlayın, eviniz siz gelmeden ısınsın.</span></li><li><b>Temiz ve çevreci</b><span>Düşük emisyon, sürdürülebilir yakıt.</span></li><li><b>Uzun yanma süresi</b><span>Tek dolumla 8–24 saat kesintisiz sıcaklık.</span></li></ul><a href="#siparis" className="text-link">Pellet sobasını keşfet <span>→</span></a></div></section>

      <section className="steps" id="siparis"><span className="kicker">3 KOLAY ADIMDA</span><h2>Sıcaklığa giden yol</h2><div className="step-grid"><article><b>01</b><span>▤</span><h3>Modelini seç</h3><p>Metrekarenize uygun sobayı bulun veya uzmanımıza danışın.</p></article><div className="step-line">→</div><article><b>02</b><span>▣</span><h3>Güvenle sipariş ver</h3><p>Güvenli ödeme ve taksit seçeneklerinden yararlanın.</p></article><div className="step-line">→</div><article><b>03</b><span>⚙</span><h3>Kurulsun, keyfini çıkar</h3><p>Yetkili ekibimiz teslimat ve kurulumu tamamlasın.</p></article></div></section>

      <section className="guarantee"><div><span className="shield">✓</span><div><span className="kicker">PARS GÜVENCESİ</span><h2>Sadece soba değil,<br/>içiniz rahat olsun.</h2></div></div><ul><li><b>2 Yıl</b><span>Üretici garantisi</span></li><li><b>81 İl</b><span>Yaygın servis ağı</span></li><li><b>14 Gün</b><span>Kolay iade</span></li><li><b>7/24</b><span>Teknik destek</span></li></ul></section>

      <section className="testimonials"><span className="kicker">GERÇEK EVLER, GERÇEK SICAKLIK</span><h2>Müşterilerimiz anlatıyor</h2><div className="review-grid"><article><span className="stars">★★★★★</span><p>“90 metrekare evimiz hem daha hızlı ısınıyor hem de odunla uğraşmıyoruz. Kurulum ekibi de çok titizdi.”</p><div><b>MK</b><span><strong>Murat K.</strong><small>Bolu • P12 Vision</small></span></div></article><article><span className="stars">★★★★★</span><p>“Siparişten iki gün sonra aradılar, her adımı anlattılar. İlk faturada farkı gördük. Gerçekten sessiz çalışıyor.”</p><div><b>SA</b><span><strong>Selin A.</strong><small>Bursa • P8 Compact</small></span></div></article><article><span className="stars">★★★★★</span><p>“Kaloriferli modeli müstakil evimize kurduk. Bütün odalar eşit ısınıyor. Parasının karşılığını fazlasıyla verdi.”</p><div><b>ET</b><span><strong>Emre T.</strong><small>Eskişehir • P18 Hydro</small></span></div></article></div></section>

      <section className="faq" id="sss"><div><span className="kicker">AKLINIZDA KALMASIN</span><h2>Sıkça sorulan<br/><em>sorular.</em></h2><p>Aradığınız cevabı bulamadınız mı?</p><a href="tel:08505557277">Bize ulaşın →</a></div><div className="accordion">{faqs.map((f, i) => <article key={f[0]} className={openFaq === i ? "active" : ""}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{f[0]}</span><b>{openFaq === i ? "−" : "+"}</b></button><p>{f[1]}</p></article>)}</div></section>

      <section className="final-cta"><div><Flame/><span className="spark cs1">✦</span><span className="spark cs2">✦</span></div><span className="kicker">BU KIŞ DAHA SICAK</span><h2>Evinize en uygun Pars’ı<br/>birlikte bulalım.</h2><p>Ücretsiz danışmanlık alın, ihtiyacınıza uygun modeli ve kurulum planını birlikte belirleyelim.</p><div><a className="btn light" href="#urunler">Modelleri İncele <span>→</span></a><a className="btn outline" href="tel:08505557277">0850 555 72 77</a></div></section>

      <footer><div className="footer-main"><div><a className="brand footer-brand" href="#"><Flame/><span><b>PARS</b><small>STOVE</small></span></a><p>Sürdürülebilir, verimli ve konforlu ısınma çözümleri.</p><div className="socials"><a href="#" aria-label="Instagram">ig</a><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Youtube">▶</a></div></div><div><b>Ürünler</b><a href="#urunler">Hava Üflemeli</a><a href="#urunler">Kaloriferli</a><a href="#urunler">Kanallı Sistem</a><a href="#urunler">Pellet Yakıtı</a></div><div><b>Kurumsal</b><a href="#neden">Hakkımızda</a><a href="#neden">Neden Pars?</a><a href="#">Bayilerimiz</a><a href="#">Blog</a></div><div><b>Destek</b><a href="#siparis">Teslimat & Kurulum</a><a href="#sss">Garanti & İade</a><a href="#sss">Sıkça Sorulanlar</a><a href="tel:08505557277">İletişim</a></div><div className="newsletter"><b>Sıcak fırsatları kaçırmayın</b><p>Kampanya ve yeniliklerden haberdar olun.</p><form onSubmit={(e) => e.preventDefault()}><input type="email" placeholder="E-posta adresiniz" aria-label="E-posta adresiniz"/><button aria-label="Kaydol">→</button></form></div></div><div className="footer-bottom"><span>© 2026 Pars Stove. Tüm hakları saklıdır.</span><div><a href="#">Gizlilik</a><a href="#">Mesafeli Satış</a><a href="#">KVKK</a></div><span>Güvenli Ödeme • Visa • Mastercard</span></div></footer>
    </main>
  );
}
