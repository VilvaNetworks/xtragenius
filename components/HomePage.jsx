'use client';
import { useEffect, useState } from 'react';
import LearningLab from './LearningLab';
import { CourseGrid, Announcements, DetailDialog } from './LearningUI';
import { skillDetails } from '../lib/content';

export default function HomePage() {
  const [shape, setShape] = useState(0);
  const [motion, setMotion] = useState(true);
  const [filter, setFilter] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);
  const [view, setView] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    setMotion(!media.matches);
    const update = () => setMotion(!media.matches);
    media.addEventListener('change', update);
    const onKey = e => { if(e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => { media.removeEventListener('change', update); document.removeEventListener('keydown', onKey); };
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle('motion-paused', !motion);
    document.documentElement.classList.toggle('js-motion', motion);
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), {threshold:.12});
    document.querySelectorAll('.reveal').forEach(el => { if(!motion) el.classList.add('visible'); else observer.observe(el); });
    return () => observer.disconnect();
  }, [motion]);
  function handleClick(event) {
    const target = event.target.closest('button, a');
    if(!target) return;
    if(target.dataset.contact) setView({type:'contact', topic:target.dataset.contact});
    if(target.dataset.course) setView({type:'course', id:target.dataset.course});
    if(target.dataset.skill !== undefined) setView({type:'skill', index:Number(target.dataset.skill)});
    if(target.dataset.filter) setFilter(target.dataset.filter);
    if(target.dataset.shape !== undefined) setShape(Number(target.dataset.shape));
    if(target.id === 'motion-toggle') setMotion(value=>!value);
    if(target.id === 'privacy-button') setView({type:'privacy'});
    if(target.classList.contains('menu-toggle')) setMenuOpen(value=>!value);
    if(target.closest('#navigation') && target.tagName === 'A') setMenuOpen(false);
    if(target.dataset.faq !== undefined){ const i=Number(target.dataset.faq); setOpenFaq(v=>v===i?-1:i); }
  }
  const faqs = [
    { q:'What ages are Xtragenius programmes for?', a:'Our core cognitive programmes are designed for children aged 4 to 14, with specific tracks suited to different age bands within that range.' },
    { q:'Do I need any prior experience to start?', a:'No. Every child starts from their own level. Our instructors assess where your child is and build from there — no prior abacus or mental-maths experience is needed.' },
    { q:'Are classes available online or only at a centre?', a:'Both. Xtragenius has 150+ physical centres across India, and the same programmes are now available online so you can learn from anywhere.' },
    { q:'How long is each class and how often do they run?', a:'Class length and frequency vary by programme and centre. Your nearest centre or our learning team can share the exact schedule for the programme you’re interested in.' },
    { q:'Is Xtragenius a certified institution?', a:'Yes. Xtragenius is ISO 9001:2015 certified, reflecting our commitment to consistent, quality-controlled learning across every centre.' },
    { q:'How do I become an Xtragenius educator or partner?', a:'Use the “Become a partner” section on this page, or reach out through the Educator Portal link in the navigation — our team will walk you through onboarding.' },
  ];
  return <div onClick={handleClick}>

  <a className="skip-link" href="#main">Skip to content</a>
  <div className="announcement"><span className="live-dot"></span> A legacy of learning. A new world of possibilities. <a href="#programmes">Now online <span>↗</span></a></div>
  <header className="header">
    <a className="wordmark" href="/" aria-label="Xtragenius home"><img src="/images/logo.png" alt="Xtragenius — multiplying intelligence" className="brand-logo" /></a>
    <nav aria-label="Main navigation" id="navigation" className={menuOpen ? "open" : ""}>
      <a href="#programmes">All Programs</a>
      <a href="#approach">Why Xtragenius</a>
      <a href="#outcomes">Highlights</a>
      <a href="#legacy">Competitions</a>
      <a href="#partners">Become a Partner</a>
      <a href="#proof">150+ Centres</a>
      <button type="button" className="nav-link" data-contact="educator enquiry">Educator Portal</button>
    </nav>
    <button className="button button-small header-cta" data-contact="consultation">Let’s find their potential <span>↗</span></button>
    <button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="navigation"><span></span><span></span></button>
  </header>
  <main id="main">
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-topline"><span className="eyebrow"><span className="tiny-cross">+</span> EXTRAORDINARY MINDS START HERE</span><span className="age-label">FOR THE CURIOUS. AGES 4–14.</span></div>
      <div className="hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">The potential<br />is already there.<br /><span>Let’s shape it.</span><span className="headline-star" aria-hidden="true">✳</span></h1>
          <p className="hero-description">Other programmes teach children <strong>what</strong> to learn.<br />We train them <strong>how</strong> to learn. Unlock your child’s extra<br className="desktop-break" /> potential, one extraordinary discovery at a time.</p>
          <div className="hero-actions"><a className="button" href="#programmes">Explore programmes <span>↗</span></a><a className="text-link" href="#approach">Discover our approach <span>↓</span></a></div>
          <div className="hero-trust"><span className="trust-icon">◎</span><span>25+ years of shaping minds.<br /><strong>Now, wherever you are.</strong></span></div>
        </div>
        <div className="sculpture-wrap learning-lab-wrap">
          <div className="sculpture-caption"><span className="tiny-cross">+</span> THE LITTLE LEARNING LAB <span className="caption-index">0{shape + 1} / 04</span></div>
          <LearningLab key={shape} skill={shape} motion={motion} />
          <div className="sculpture-bottom"><span className="drag-hint">REAL LEARNING. RIGHT AT YOUR FINGERTIPS.</span><button id="motion-toggle" aria-pressed={motion}>Motion {motion ? "on" : "off"} <span className="motion-indicator"></span></button></div>
          <div className="sculpture-tabs" role="group" aria-label="Explore the four learning skills">{skillDetails.map((s, i) => <button key={s[0]} className={shape === i ? "active" : ""} data-shape={i} aria-pressed={shape === i}><span>0{i + 1}</span>{s[0]}</button>)}</div>
        </div>
      </div>
      <div className="hero-bottom"><span>MIND DEVELOPMENT. LIFELONG POSSIBILITY.</span><a href="#proof">A little scroll. A bigger perspective. <span>↓</span></a></div>
    </section>
    <section className="proof-bar section-shell" id="proof" aria-label="Our legacy in numbers"><div className="proof-intro">Rooted in Chennai.<br /><strong>Trusted across India.</strong></div><div className="stat"><strong><span data-count="25">25</span><span>+</span></strong><span>Years of experience</span></div><div className="stat"><strong><span data-count="150">150</span><span>+</span></strong><span>Learning centres</span></div><div className="stat"><strong><span data-count="350">350</span><span>+</span></strong><span>Educators being onboarded</span></div><div className="certification"><span className="seal">✧</span><div><strong>ISO 9001:2015</strong><span>Certified quality. Lasting trust.</span></div></div></section>
    <section className="approach section-shell section-space section-tint" id="approach">
      <div className="section-heading reveal"><div><span className="eyebrow">01 / THE FOUNDATION</span><h2>Not just better at a subject.<br /><span>Better at learning.</span></h2></div><p>Big possibilities begin with four essential abilities.<br />Every Xtragenius programme strengthens the way<br className="desktop-break" /> your child thinks, learns and grows.</p></div>
      <div className="skill-grid">
        <button className="skill-card reveal" data-skill="0"><div className="skill-card-top"><span>01</span><span>↗</span></div><div className="skill-art concentration-art"><i></i><i></i><i></i><i></i><b></b></div><h3>Concentration</h3><p>Find focus in a world full of distractions.</p><span className="skill-bottom">A mind that stays with it <span>↗</span></span></button>
        <button className="skill-card reveal" data-skill="1"><div className="skill-card-top"><span>02</span><span>↗</span></div><div className="skill-art speed-art"><i></i><i></i><i></i><i></i><i></i></div><h3>Speed</h3><p>Think on your feet. With clarity and accuracy.</p><span className="skill-bottom">Confidence in every response <span>↗</span></span></button>
        <button className="skill-card reveal" data-skill="2"><div className="skill-card-top"><span>03</span><span>↗</span></div><div className="skill-art memory-art"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><h3>Memory</h3><p>Make connections that stay for a lifetime.</p><span className="skill-bottom">Learn it. Connect it. Remember it. <span>↗</span></span></button>
        <button className="skill-card reveal" data-skill="3"><div className="skill-card-top"><span>04</span><span>↗</span></div><div className="skill-art visualization-art"><i></i><i></i><i></i></div><h3>Visualization</h3><p>See the possibilities before they take shape.</p><span className="skill-bottom">Imagination with a purpose <span>↗</span></span></button>
      </div>
      <div className="approach-footnote"><span className="tiny-cross">+</span> Four abilities. Endless applications. <span>In the classroom. And far beyond it.</span></div>
    </section>
    <section className="programmes section-shell section-space section-dark" id="programmes">
      <div className="section-heading reveal"><div><span className="eyebrow">02 / FIND THEIR NEXT DISCOVERY</span><h2>Small beginnings.<br /><span>Extraordinary journeys.</span></h2></div><p>Expert-led programmes for curious minds.<br />Grounded in our approach. Designed to bring<br className="desktop-break" /> out the extraordinary in every child.</p></div>
      <div className="programme-toolbar"><div className="filters" role="group" aria-label="Filter programmes">{[["all", "All programmes"], ["core", "Cognitive & maths"], ["creative", "Creative skills"], ["future", "Future skills"]].map(([value, label]) => <button key={value} className={filter === value ? "active" : ""} data-filter={value} aria-pressed={filter === value}>{label}{value === "all" && <span>06</span>}</button>)}</div><span className="programme-count">A WORLD BEYOND THE CLASSROOM ↗</span></div>
      <CourseGrid filter={filter} />
      <div className="programme-note"><span>Every child has a different starting point. We’ll help you find theirs.</span><button className="text-link" data-contact="programme guidance">Talk to our learning team <span>↗</span></button></div>
    </section>
    <Announcements motion={motion} />
    <section className="legacy section-shell section-space" id="legacy"><div className="legacy-image reveal"><img src="/images/classroom.jpg" alt="Children exploring and learning together in a classroom" loading="lazy" /><div className="image-label"><span className="tiny-cross">+</span> REAL LEARNING. REAL POSSIBILITY.</div><div className="legacy-image-badge"><strong>25<span>+</span></strong><span>YEARS OF<br />LOOKING AHEAD.</span></div></div><div className="legacy-copy reveal"><span className="eyebrow">03 / A LEGACY THAT LOOKS FORWARD</span><h2>New possibilities.<br /><span>The same strong roots.</span></h2><p>For over 25 years, we’ve helped children discover what their minds can do. From our roots in Chennai to 150+ centres across India, our belief has never changed: the right foundation changes everything.</p><p>Now, we’re bringing that experience online. The same considered approach. The same commitment to quality. A whole new way to reach your child.</p><div className="legacy-points"><div><span>01</span><div><h4>Established. Experienced. Here for the long run.</h4><p>A learning network built over decades, not overnight.</p></div></div><div><span>02</span><div><h4>A standard you can trust.</h4><p>ISO 9001:2015 certified quality, at the heart of our systems.</p></div></div><div><span>03</span><div><h4>A bigger stage for growing confidence.</h4><p>From centre to district to state — competitions that celebrate progress.</p></div></div></div><button className="text-link" data-contact="our centres">Connect with our network <span>↗</span></button></div></section>
    <section className="founder founder-teaser section-shell section-space section-dark" id="founder">
      <div className="founder-portrait reveal">
        <div className="founder-portrait-frame"><img src="/images/founder/chinnaraj.png" alt="Mr. Chinnaraj, Co-Founder of Xtragenius" /></div>
        <div className="founder-badge">25<span>+ YEARS<br />BUILDING XTRAGENIUS</span></div>
      </div>
      <div className="founder-copy reveal">
        <span className="eyebrow">04 / THE PERSON BEHIND THE POTENTIAL</span>
        <p className="founder-quote">“Every extraordinary idea started as someone willing to try something new.”</p>
        <p className="founder-teaser-text">From a statistical assistant running a computer centre in 2000, to building a statewide training franchise, to founding Xtragenius — Mr. Chinnaraj’s journey is one of constantly trying something new.</p>
        <a className="text-link" href="/founder">Read the full story <span>↗</span></a>
      </div>
    </section>
    <section className="outcomes section-shell section-space" id="outcomes"><div className="section-heading reveal"><div><span className="eyebrow">05 / PROGRESS THAT GOES BEYOND MARKS</span><h2>Little shifts.<br /><span>Life-changing confidence.</span></h2></div><p>The outcomes our programmes work towards.<br />Because the best kind of progress shows up<br className="desktop-break" /> in everyday life.</p></div><div className="outcome-grid"><article className="reveal"><span className="outcome-symbol">◎</span><span className="eyebrow">CONCENTRATION</span><h3>Staying with a challenge.<br />And enjoying the discovery.</h3><p>Building the focus to approach a task patiently and give new ideas room to grow.</p></article><article className="reveal"><span className="outcome-symbol">↗</span><span className="eyebrow">SPEED & CONFIDENCE</span><h3>A hand that goes up.<br />A mind that backs itself.</h3><p>Practising mental mathematics to develop accuracy and the confidence to participate.</p></article><article className="reveal"><span className="outcome-symbol">✳</span><span className="eyebrow">MEMORY & VISUALIZATION</span><h3>Connecting the dots.<br />Seeing a bigger picture.</h3><p>Strengthening recall and mental imagery to make learning feel more connected.</p></article></div></section>
    <section className="press-strip section-shell section-space section-tint" id="press" aria-labelledby="press-heading">
      <div className="press-grid">
        <div className="press-copy reveal">
          <span className="eyebrow">06 / AS SEEN ON</span>
          <h2 id="press-heading">Recognised beyond<br /><span>the classroom.</span></h2>
          <p>Our work in cognitive learning has reached beyond our centres — including a feature on Vijay TV, Tamil Nadu’s leading television network.</p>
          <div className="press-chips">
            <span className="press-badge"><span className="press-dot" aria-hidden="true"></span>ISO 9001:2015 Certified</span>
            <span className="press-badge"><span className="press-dot" aria-hidden="true"></span>150+ Centres Nationwide</span>
          </div>
        </div>
        <div className="press-video reveal">
          <span className="press-video-label">FEATURED ON VIJAY TV</span>
          <div className="press-video-frame">
            <iframe
              src="https://www.youtube.com/embed/Sv3cCIJtB2A?si=1ZarTope26fP173r"
              title="Xtragenius featured on Vijay TV"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    <section className="partner section-shell" id="partners"><div className="partner-inner"><div className="partner-art" aria-hidden="true"><span>✳</span><span>✳</span><span>✳</span><span>✳</span></div><div className="partner-copy reveal"><span className="eyebrow">FOR EDUCATORS, ACADEMIES & INSTITUTES</span><h2>Great educators.<br /><span>Greater possibilities.</span></h2><p>Bring your expertise to India’s trusted cognitive learning network. Join an established ecosystem of educators, and help shape the next generation of confident learners.</p><div className="partner-actions"><button className="button button-gold" data-contact="partnership">Become a partner <span>↗</span></button><span>YOUR EXPERTISE. OUR SHARED PURPOSE.</span></div></div></div></section>
    <section className="final-cta section-shell reveal section-gold"><span className="eyebrow">THE NEXT CHAPTER STARTS WITH CURIOSITY.</span><h2>Learn more. Think better.<br /><span>Grow confidently.</span><span className="cta-star">✳</span></h2><a className="button" href="#programmes">Find their programme <span>↗</span></a></section>
    <section className="faq section-shell section-space" id="faq" aria-labelledby="faq-heading">
      <div className="section-heading reveal"><div><span className="eyebrow">07 / YOUR QUESTIONS</span><h2 id="faq-heading">Good questions.<br /><span>Clear answers.</span></h2></div></div>
      <div className="faq-section">
        {faqs.map((item, i) => <div key={item.q} className="faq-item reveal" data-open={openFaq === i}>
          <button type="button" className="faq-question" data-faq={i} aria-expanded={openFaq === i}>
            <span>{item.q}</span>
            <span className="faq-question-icon" aria-hidden="true">+</span>
          </button>
          <div className="faq-answer"><div className="faq-answer-inner"><p>{item.a}</p></div></div>
        </div>)}
      </div>
    </section>
  </main>
  <footer className="footer section-shell section-dark" id="contact"><div className="footer-top"><div><a className="wordmark footer-logo-card" href="/"><img src="/images/logo.png" alt="Xtragenius — multiplying intelligence" className="brand-logo" /></a><p>Extra potential. Extraordinary possibilities.</p><span className="footer-location">Chennai, Tamil Nadu, India<br />A nationwide network. A shared purpose.</span><div className="footer-social" aria-label="Xtragenius on social media">
            <a href="https://www.instagram.com/xtragenius_abacus/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
            <a href="https://www.facebook.com/learning.xtragenius/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 9h3V5h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1Z"/></svg></a>
            <a href="https://in.linkedin.com/company/learning-xtragenius" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8.5" r="1" fill="currentColor" stroke="none"/><path d="M8 11v6M12 11v6M12 13.5c0-1.4 1-2.5 2.5-2.5S17 12.1 17 13.5V17"/></svg></a>
          </div></div><div className="footer-links"><h4>Explore</h4><a href="#approach">Our approach</a><a href="#programmes">Our programmes</a><a href="#legacy">Our legacy</a><button data-contact="competition">Competitions</button></div><div className="footer-links"><h4>Grow with us</h4><a href="#partners">Become a partner</a><button data-contact="our centres">Find a centre</button><button data-contact="educator enquiry">Educator enquiries</button><button data-contact="consultation">Contact us ↗</button></div><div className="footer-promise"><span className="seal">✧</span><span>25+ YEARS OF TRUST<br />ISO 9001:2015 CERTIFIED<br />150+ CENTRES ACROSS INDIA</span></div></div><div className="footer-bottom"><span>© <span>{new Date().getFullYear()}</span> Xtragenius Learning Systems.</span><span>Designed for a lifetime of learning.</span><button className="text-link" id="privacy-button">Privacy notice ↗</button><a href="#">Back to top ↑</a></div></footer>
  <DetailDialog view={view} setView={setView} onClose={() => setView(null)} />
  

</div>;
}
