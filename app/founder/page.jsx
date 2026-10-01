import '../globals.css';

export const metadata = {
  title: 'Our Founder — Xtragenius',
  description: 'The story of Mr. Chinnaraj, Co-Founder of Xtragenius — from a statistical assistant running a computer centre in 2000, to building a statewide training franchise, to founding Xtragenius.',
};

export default function FounderPage() {
  return <div>
    <header className="header founder-page-header">
      <a className="wordmark" href="/" aria-label="Xtragenius home"><img src="/images/logo.png" alt="Xtragenius — multiplying intelligence" className="brand-logo" /></a>
      <a className="text-link" href="/">← Back to home</a>
    </header>

    <main>
      <section className="founder-hero section-shell section-dark">
        <div className="founder-hero-inner reveal visible">
          <span className="eyebrow">THE PERSON BEHIND THE POTENTIAL</span>
          <h1>Mr. Chinnaraj<span>Co-Founder, Xtragenius</span></h1>
          <p className="founder-quote">“Every extraordinary idea started as someone willing to try something new.”</p>
        </div>
      </section>

      <section className="founder-full section-shell section-space">
        <div className="founder-full-portrait">
          <img src="/images/founder/chinnaraj.png" alt="Mr. Chinnaraj, Co-Founder of Xtragenius" />
        </div>
        <div className="founder-full-copy">
          <span className="eyebrow">01 / FROM STATISTICAL ASSISTANT TO FOUNDER</span>
          <h2>A beginning nobody<br /><span>would have predicted.</span></h2>
          <div className="founder-bio">
            <p>Our founder’s journey began in 2000 — not in a classroom, but as a statistical assistant in the government health department, running a computer browsing centre on the side. That small start grew into the Tamil Nadu Advanced Computer Training Centre (TACTC), a franchise brand built with the National Educational Trust that reached towns across Tamil Nadu, operating on minimal fees to stay accessible.</p>
            <p>When the computer-training market shifted in 2001 — shaken by global events that made parents cautious about the sector — the search for what came next led somewhere unexpected: children’s education. A connection made in Arya Bhatta sparked a partnership with UC Mass, and a specialised tool for blind and visually handicapped students — learned during B.Ed. studies in Coimbatore — became part of the offering. What started in one city expanded into Madurai, Trichy, Coimbatore and beyond, each new zone built on the same franchise model.</p>
            <p>The years that followed brought constant evolution: partnerships that came and went (with individuals like Alagappan, Ilango, and others), a shift from trust-based operations into private limited companies, and new ventures — CRT Enterprises in 2013 (an e-commerce venture selling children’s products on Amazon), and later, Extraordinary Learning Systems. The business scaled through offline competitions and portal-based learning systems through the 2010s.</p>
            <p>Not every chapter was a success. Investments in share trading around 2017 led to real financial losses, forcing a hard reconfiguration of the business model. But that setback — like every setback before it — fed the same conviction: the right foundation changes everything. That conviction is what Xtragenius is built on today.</p>
          </div>
        </div>
      </section>

      <section className="founder-timeline-section section-shell section-space section-tint">
        <div className="section-heading reveal"><div><span className="eyebrow">02 / THE JOURNEY SO FAR</span><h2>Two decades.<br /><span>One continuous lesson.</span></h2></div></div>
        <ul className="founder-timeline founder-timeline-full">
          <li><b>2000</b><span>Starts a computer browsing centre; founds TACTC as a statewide franchise brand with the National Educational Trust.</span></li>
          <li><b>2001</b><span>Steps back from computer training as the market shifts; begins exploring children’s education.</span></li>
          <li><b>2001–05</b><span>Partners with UC Mass; introduces a specialised tool for blind and visually handicapped students; expands into Madurai, Trichy and Coimbatore.</span></li>
          <li><b>2013</b><span>Founds CRT Enterprises, an early e-commerce venture, and later Extraordinary Learning Systems.</span></li>
          <li><b>2010s</b><span>Scales offline competitions and portal-based learning systems across the franchise network.</span></li>
          <li><b>2017</b><span>Navigates financial setbacks from share trading investments; reconfigures the business model.</span></li>
          <li><b>Today</b><span>25+ years of experience, carried forward as Xtragenius.</span></li>
        </ul>
      </section>

      <section className="final-cta section-shell reveal visible section-gold">
        <span className="eyebrow">THE NEXT CHAPTER STARTS WITH CURIOSITY.</span>
        <h2>See where that journey<br /><span>leads your child.</span><span className="cta-star">✳</span></h2>
        <a className="button" href="/#programmes">Explore programmes <span>↗</span></a>
      </section>
    </main>

    <footer className="footer section-shell section-dark" id="contact">
      <div className="footer-bottom">
        <span>© <span>{new Date().getFullYear()}</span> Xtragenius Learning Systems.</span>
        <a href="/">Back to home ↑</a>
      </div>
    </footer>
  </div>;
}
