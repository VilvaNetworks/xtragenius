'use client';

import { useEffect, useState } from 'react';
import { galleryItems } from '../../lib/content';
import Header from '../../components/Header';
import '../globals.css';

const SHELL = "px-[5.5%] max-[800px]:px-[6%] min-[1600px]:[padding-left:max(5.5%,calc((100vw_-_1420px)/2))] min-[1600px]:[padding-right:max(5.5%,calc((100vw_-_1420px)/2))]";
const SPACE = "pt-[112px] pb-[100px] max-[800px]:pt-[75px] max-[800px]:pb-[65px] max-[520px]:pt-[61px] max-[520px]:pb-[54px]";
const EYEBROW = "text-[12px] tracking-[1.65px] font-[550] block";
const SECTION_HEADING_H2 = "[font-family:var(--display)] text-[clamp(34px,3.3vw,49px)] leading-[1.2] font-medium tracking-[-2px] max-[800px]:text-[39px] max-[520px]:text-[32px] max-[520px]:tracking-[-1.5px]";

const categories = ['All', ...Array.from(new Set(galleryItems.map(g => g.category)))];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [motion, setMotion] = useState(true);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    setMotion(!media.matches);
    const update = () => setMotion(!media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.setAttribute('data-revealed', 'true'); observer.unobserve(entry.target); } }), { threshold: .12 });
    document.querySelectorAll('[data-reveal]').forEach(el => { if (!motion) el.setAttribute('data-revealed', 'true'); else observer.observe(el); });
    return () => observer.disconnect();
  }, [motion, filter]);
  const reveal = motion
    ? "opacity-0 translate-y-[25px] transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(.2,.65,.3,1)] data-[revealed=true]:opacity-100 data-[revealed=true]:translate-y-0"
    : "opacity-100";
  const items = galleryItems.filter(g => filter === 'All' || g.category === filter);

  return <div>
    <Header />

    <main>
      <section className={`${SHELL} pt-[70px] pb-[70px] text-center bg-[#192e4e] text-[#f7f3ea]`}>
        <div className="max-w-[640px] [margin:0_auto]">
          <span className={`${EYEBROW} text-[#e3b876]`}>A GLIMPSE INSIDE XTRAGENIUS</span>
          <h1 className="[font-family:var(--display)] text-[clamp(40px,5vw,60px)] font-bold [margin:18px_0_22px] leading-[1.1]">The gallery.</h1>
          <p className="[font-family:var(--display)] text-[20px] font-medium leading-[1.5] opacity-90 max-w-[480px] [margin:0_auto]">Moments from our classrooms, centres and competitions. We’re building this gallery out — real photos are on their way.</p>
        </div>
      </section>

      <section className={`${SHELL} ${SPACE}`}>
        <div data-reveal data-revealed={!motion || undefined} className={`flex items-end justify-between gap-[30px] mb-[44px] max-[800px]:gap-[25px] max-[800px]:items-start max-[800px]:flex-col max-[800px]:mb-[33px] ${reveal}`}>
          <div>
            <span className={`${EYEBROW} text-[#778078] mb-[24px] max-[800px]:mb-[17px]`}>SEE XTRAGENIUS IN ACTION</span>
            <h2 className={SECTION_HEADING_H2}>Every centre has<br /><span className="text-[#868c86]">a story worth sharing.</span></h2>
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-[#dcded6] mb-[30px] pb-[2px]">
          <div className="flex gap-[29px] max-[800px]:gap-[22px] max-[520px]:gap-[17px] max-[520px]:overflow-x-auto max-[520px]:w-full max-[520px]:[scrollbar-width:none]" role="group" aria-label="Filter gallery">
            {categories.map(cat => <button key={cat} onClick={() => setFilter(cat)} className={`[padding:0_0_17px] text-[13px] border-b-2 relative bottom-[-1px] max-[800px]:text-[12px] max-[520px]:text-[12px] max-[520px]:whitespace-nowrap max-[520px]:pb-[13px] ${filter === cat ? "text-[#192e4e] border-[#192e4e]" : "text-[#7e8482] border-transparent hover:text-[#192e4e]"}`} aria-pressed={filter === cat}>{cat}</button>)}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[24px] max-[800px]:grid-cols-2 max-[520px]:grid-cols-1">
          {items.map((item, i) => <figure key={item.id} data-reveal data-revealed={!motion || undefined} className={`group relative overflow-hidden rounded-[6px] border border-[#dcded6] ${i % 3 === 1 ? 'delay-[80ms]' : i % 3 === 2 ? 'delay-[160ms]' : ''} ${reveal}`}>
            <div className="h-[260px] flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.04]" style={{ background: item.bg }}>
              <span className="text-[64px] [font-family:Georgia,serif]" style={{ color: item.fg }}>{item.symbol}</span>
            </div>
            <span className="absolute top-[14px] left-[14px] z-[1] bg-[#f7f7f0e8] text-[#192e4e] py-[6px] px-[10px] text-[10px] tracking-[1px] rounded-[2px]">{item.category.toUpperCase()}</span>
            <span className="absolute top-[14px] right-[14px] z-[1] bg-[#192e4ee8] text-[#f7f3ea] py-[6px] px-[10px] text-[10px] tracking-[1px] rounded-[2px]">PHOTO COMING SOON</span>
            <figcaption className="absolute inset-x-0 bottom-0 [padding:16px_18px] bg-[linear-gradient(0deg,#16283360,transparent)] translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-[14px] font-medium text-white">{item.title}</span>
            </figcaption>
          </figure>)}
        </div>
      </section>

      <section className={`${SHELL} [padding-top:80px] [padding-bottom:80px] text-center border-t border-[rgba(32,49,75,.18)] bg-[#dba34b] text-[#20314b] max-[800px]:pt-[60px] max-[800px]:pb-[60px]`}>
        <span className="text-[11px] text-[#5a3f16] mb-[23px] block tracking-[1.65px] font-[550]">WANT TO SEE MORE?</span>
        <h2 className="text-[40px] leading-[1.23] tracking-[-1.6px] relative inline-block max-[800px]:text-[32px]">Visit a centre near you<br /><span className="text-[#6b5327]">and see it for yourself.</span></h2>
        <a className="inline-flex items-center justify-between gap-[30px] bg-[#20314b] text-[#dba34b] border border-[#20314b] rounded-[4px] py-[19px] px-[24px] text-[14px] font-medium transition-[background,transform,box-shadow] duration-[250ms] hover:bg-[#2c4064] hover:-translate-y-[2px] hover:shadow-[0_7px_16px_#172d4c13] flex w-fit whitespace-nowrap [margin:29px_auto_0]" href="/#proof">Find a centre <span className="text-[19px] leading-[1]">↗</span></a>
      </section>
    </main>

    <footer className={`${SHELL} border-t border-[rgba(247,243,234,.16)] pt-[51px] bg-[#192e4e] text-[#f7f3ea]`} id="contact">
      <div className="border-t border-[rgba(247,243,234,.16)] py-[22px] flex items-center justify-between gap-[20px] text-[11px] text-[#90968b] max-[520px]:flex-wrap max-[520px]:[row-gap:16px] max-[520px]:[&>span]:w-full max-[520px]:[&>span]:text-[12px]">
        <span>© <span>{new Date().getFullYear()}</span> Xtragenius Learning Systems.</span>
        <a href="/">Back to home ↑</a>
      </div>
    </footer>
  </div>;
}
