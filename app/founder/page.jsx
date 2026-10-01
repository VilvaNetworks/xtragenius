import '../globals.css';
import Header from '../../components/Header';

export const metadata = {
  title: 'Our Founder — Xtragenius',
  description: 'The story of Mr. Chinnaraj, Co-Founder of Xtragenius — from a statistical assistant running a computer centre in 2000, to building a statewide training franchise, to founding Xtragenius.',
};

const SHELL = "px-[5.5%] max-[800px]:px-[6%] min-[1600px]:[padding-left:max(5.5%,calc((100vw_-_1420px)/2))] min-[1600px]:[padding-right:max(5.5%,calc((100vw_-_1420px)/2))]";
const SPACE = "pt-[112px] pb-[100px] max-[800px]:pt-[75px] max-[800px]:pb-[65px] max-[520px]:pt-[61px] max-[520px]:pb-[54px]";
const EYEBROW = "text-[10px] tracking-[1.65px] font-[550] block";
const BUTTON = "inline-flex items-center justify-between gap-[30px] bg-[#192e4e] text-white text-[12px] font-medium py-[19px] px-[24px] border border-[#192e4e] rounded-[4px] transition-[background,transform,box-shadow] duration-[250ms] hover:bg-[#2a456d] hover:-translate-y-[2px] hover:shadow-[0_7px_16px_#172d4c13]";
const SECTION_HEADING_H2 = "[font-family:var(--display)] text-[clamp(34px,3.3vw,49px)] leading-[1.2] font-medium tracking-[-2px] max-[800px]:text-[39px] max-[520px]:text-[32px] max-[520px]:tracking-[-1.5px]";

export default function FounderPage() {
  return <div>
    <Header />

    <main>
      <section className={`${SHELL} pt-[70px] pb-[70px] text-center bg-[#192e4e] text-[#f7f3ea]`}>
        <div className="max-w-[640px] [margin:0_auto]">
          <span className={`${EYEBROW} text-[#e3b876]`}>THE PERSON BEHIND THE POTENTIAL</span>
          <h1 className="[font-family:var(--display)] text-[clamp(40px,5vw,60px)] font-bold [margin:18px_0_22px] leading-[1.1]">Mr. Chinnaraj<span className="block text-[16px] font-medium text-[#dba34b] mt-[12px] [font-family:var(--font)] tracking-[.3px]">Co-Founder, Xtragenius</span></h1>
          <p className="[font-family:var(--display)] text-[26px] font-bold leading-[1.35] [margin:0_auto] max-w-[520px]">“Every extraordinary idea started as someone willing to try something new.”</p>
        </div>
      </section>

      <section className={`${SHELL} ${SPACE} grid [grid-template-columns:.8fr_1.2fr] gap-[9%] items-start max-[900px]:[grid-template-columns:1fr] max-[900px]:gap-[34px]`}>
        <div className="sticky top-[120px] rounded-[14px] overflow-hidden [aspect-ratio:1/1] max-w-[420px] max-[900px]:static max-[900px]:max-w-[320px] max-[900px]:mx-auto">
          <img src="/images/founder/chinnaraj.png" alt="Mr. Chinnaraj, Co-Founder of Xtragenius" className="w-full h-full object-cover block" />
        </div>
        <div>
          <span className={`${EYEBROW} text-[#778078]`}>01 / FROM STATISTICAL ASSISTANT TO FOUNDER</span>
          <h2 className={`${SECTION_HEADING_H2} [margin:16px_0_26px]`}>A beginning nobody<br /><span className="text-[#868c86]">would have predicted.</span></h2>
          <div>
            <p className="text-[14px] leading-[1.85] text-[#192e4e] opacity-85 [margin:0_0_18px] max-w-[640px]">Our founder’s journey began in 2000 — not in a classroom, but as a statistical assistant in the government health department, running a computer browsing centre on the side. That small start grew into the Tamil Nadu Advanced Computer Training Centre (TACTC), a franchise brand built with the National Educational Trust that reached towns across Tamil Nadu, operating on minimal fees to stay accessible.</p>
            <p className="text-[14px] leading-[1.85] text-[#192e4e] opacity-85 [margin:0_0_18px] max-w-[640px]">When the computer-training market shifted in 2001 — shaken by global events that made parents cautious about the sector — the search for what came next led somewhere unexpected: children’s education. A connection made in Arya Bhatta sparked a partnership with UC Mass, and a specialised tool for blind and visually handicapped students — learned during B.Ed. studies in Coimbatore — became part of the offering. What started in one city expanded into Madurai, Trichy, Coimbatore and beyond, each new zone built on the same franchise model.</p>
            <p className="text-[14px] leading-[1.85] text-[#192e4e] opacity-85 [margin:0_0_18px] max-w-[640px]">The years that followed brought constant evolution: partnerships that came and went (with individuals like Alagappan, Ilango, and others), a shift from trust-based operations into private limited companies, and new ventures — CRT Enterprises in 2013 (an e-commerce venture selling children’s products on Amazon), and later, Extraordinary Learning Systems. The business scaled through offline competitions and portal-based learning systems through the 2010s.</p>
            <p className="text-[14px] leading-[1.85] text-[#192e4e] opacity-85 [margin:0_0_18px] max-w-[640px]">Not every chapter was a success. Investments in share trading around 2017 led to real financial losses, forcing a hard reconfiguration of the business model. But that setback — like every setback before it — fed the same conviction: the right foundation changes everything. That conviction is what Xtragenius is built on today.</p>
          </div>
        </div>
      </section>

      <section className={`${SHELL} ${SPACE} bg-[#f4ead6]`}>
        <div className="flex items-end justify-between gap-[30px] mb-[44px] max-[800px]:gap-[25px] max-[800px]:items-start max-[800px]:flex-col max-[800px]:mb-[33px]"><div><span className={`${EYEBROW} text-[#778078]`}>02 / THE JOURNEY SO FAR</span><h2 className={SECTION_HEADING_H2}>Two decades.<br /><span className="text-[#868c86]">One continuous lesson.</span></h2></div></div>
        <ul className="max-w-[720px] [margin:0_auto] grid gap-0">
          <li className="grid [grid-template-columns:90px_1fr] gap-[20px] [padding:20px_0] border-t border-[#e3d6b8] text-[13px]"><b className="[font-family:var(--display)] text-[16px] text-[#192e4e]">2000</b><span className="leading-[1.7] opacity-85">Starts a computer browsing centre; founds TACTC as a statewide franchise brand with the National Educational Trust.</span></li>
          <li className="grid [grid-template-columns:90px_1fr] gap-[20px] [padding:20px_0] border-t border-[#e3d6b8] text-[13px]"><b className="[font-family:var(--display)] text-[16px] text-[#192e4e]">2001</b><span className="leading-[1.7] opacity-85">Steps back from computer training as the market shifts; begins exploring children’s education.</span></li>
          <li className="grid [grid-template-columns:90px_1fr] gap-[20px] [padding:20px_0] border-t border-[#e3d6b8] text-[13px]"><b className="[font-family:var(--display)] text-[16px] text-[#192e4e]">2001–05</b><span className="leading-[1.7] opacity-85">Partners with UC Mass; introduces a specialised tool for blind and visually handicapped students; expands into Madurai, Trichy and Coimbatore.</span></li>
          <li className="grid [grid-template-columns:90px_1fr] gap-[20px] [padding:20px_0] border-t border-[#e3d6b8] text-[13px]"><b className="[font-family:var(--display)] text-[16px] text-[#192e4e]">2013</b><span className="leading-[1.7] opacity-85">Founds CRT Enterprises, an early e-commerce venture, and later Extraordinary Learning Systems.</span></li>
          <li className="grid [grid-template-columns:90px_1fr] gap-[20px] [padding:20px_0] border-t border-[#e3d6b8] text-[13px]"><b className="[font-family:var(--display)] text-[16px] text-[#192e4e]">2010s</b><span className="leading-[1.7] opacity-85">Scales offline competitions and portal-based learning systems across the franchise network.</span></li>
          <li className="grid [grid-template-columns:90px_1fr] gap-[20px] [padding:20px_0] border-t border-[#e3d6b8] text-[13px]"><b className="[font-family:var(--display)] text-[16px] text-[#192e4e]">2017</b><span className="leading-[1.7] opacity-85">Navigates financial setbacks from share trading investments; reconfigures the business model.</span></li>
          <li className="grid [grid-template-columns:90px_1fr] gap-[20px] [padding:20px_0] border-t border-b border-[#e3d6b8] text-[13px]"><b className="[font-family:var(--display)] text-[16px] text-[#192e4e]">Today</b><span className="leading-[1.7] opacity-85">25+ years of experience, carried forward as Xtragenius.</span></li>
        </ul>
      </section>

      <section className={`${SHELL} [padding-top:111px] [padding-bottom:108px] text-center border-t border-[rgba(32,49,75,.18)] bg-[#dba34b] text-[#20314b] max-[800px]:pt-[75px] max-[800px]:pb-[75px] max-[520px]:pt-[65px] max-[520px]:pb-[65px] max-[360px]:pt-[55px]`}>
        <span className="text-[8px] text-[#5a3f16] mb-[23px] block tracking-[1.65px] font-[550] max-[520px]:text-[6px] max-[520px]:tracking-[1px]">THE NEXT CHAPTER STARTS WITH CURIOSITY.</span>
        <h2 className="text-[54px] leading-[1.23] tracking-[-2.5px] relative inline-block max-[800px]:text-[43px] max-[520px]:text-[33px] max-[520px]:tracking-[-1.6px] max-[360px]:text-[28px]">See where that journey<br /><span className="text-[#6b5327]">leads your child.</span><span className="text-[#dba34b] text-[55px] absolute bottom-[3px] right-[-65px] max-[800px]:text-[40px] max-[800px]:right-[-48px] max-[520px]:text-[24px] max-[520px]:right-[-19px] max-[520px]:bottom-[5px] max-[360px]:text-[20px] max-[360px]:right-[-15px]">✳</span></h2>
        <a className={`${BUTTON} flex w-fit whitespace-nowrap [margin:29px_auto_0] max-[800px]:text-[10px] max-[800px]:p-[17px_18px]`} href="/#programmes">Explore programmes <span className="text-[17px] leading-[1]">↗</span></a>
      </section>
    </main>

    <footer className={`${SHELL} border-t border-[rgba(247,243,234,.16)] pt-[51px] bg-[#192e4e] text-[#f7f3ea]`} id="contact">
      <div className="border-t border-[rgba(247,243,234,.16)] py-[22px] flex items-center justify-between gap-[20px] text-[8px] text-[#90968b] max-[520px]:flex-wrap max-[520px]:[row-gap:16px] max-[520px]:[&>span]:w-full max-[520px]:[&>span]:text-[9px]">
        <span>© <span>{new Date().getFullYear()}</span> Xtragenius Learning Systems.</span>
        <a href="/">Back to home ↑</a>
      </div>
    </footer>
  </div>;
}
