'use client';
import { useEffect, useState } from 'react';
import Header from './Header';
import LearningLab from './LearningLab';
import { CourseGrid, Announcements, Testimonials, DetailDialog } from './LearningUI';
import { skillDetails } from '../lib/content';

const SHELL = "px-[5.5%] max-[800px]:px-[6%] min-[1600px]:[padding-left:max(5.5%,calc((100vw_-_1420px)/2))] min-[1600px]:[padding-right:max(5.5%,calc((100vw_-_1420px)/2))]";
const SPACE = "pt-[112px] pb-[100px] max-[800px]:pt-[75px] max-[800px]:pb-[65px] max-[520px]:pt-[61px] max-[520px]:pb-[54px]";
const EYEBROW = "text-[12px] tracking-[1.65px] font-[550] block";
const TINY_CROSS = "font-mono text-[23px] text-[#dba34b] font-normal";
const TEXT_LINK = "inline-flex items-center gap-[18px] text-[13px] font-[550] pb-[6px] border-b border-[#aab1b6] leading-[1.5] transition-colors duration-200 hover:text-[#b78338]";
const BUTTON = "inline-flex items-center justify-between gap-[30px] bg-[#192e4e] text-white text-[14px] font-medium py-[19px] px-[24px] border border-[#192e4e] rounded-[4px] transition-[background,transform,box-shadow] duration-[250ms] hover:bg-[#2a456d] hover:-translate-y-[2px] hover:shadow-[0_7px_16px_#172d4c13]";
const SECTION_HEADING_H2 = "[font-family:var(--display)] text-[clamp(34px,3.3vw,49px)] leading-[1.2] font-medium tracking-[-2px] max-[800px]:text-[39px] max-[520px]:text-[32px] max-[520px]:tracking-[-1.5px]";

export default function HomePage() {
  const [shape, setShape] = useState(0);
  const [motion, setMotion] = useState(true);
  const [filter, setFilter] = useState('all');
  const [view, setView] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    setMotion(!media.matches);
    const update = () => setMotion(!media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) { entry.target.setAttribute('data-revealed', 'true'); observer.unobserve(entry.target); } }), {threshold:.12});
    document.querySelectorAll('[data-reveal]').forEach(el => { if(!motion) el.setAttribute('data-revealed', 'true'); else observer.observe(el); });
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
  const reveal = motion
    ? "opacity-0 translate-y-[25px] transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(.2,.65,.3,1)] data-[revealed=true]:opacity-100 data-[revealed=true]:translate-y-0"
    : "opacity-100";
  return <div onClick={handleClick}>

  <a className="fixed left-[20px] top-[-60px] p-[15px] bg-[#192e4e] text-white z-[100] focus:top-[10px]" href="#main">Skip to content</a>
  <div className="flex justify-center items-center gap-[10px] text-[13px] tracking-[.15px] bg-[#192e4e] text-[#e8e9e8] min-h-[35px] max-[520px]:text-[11px] max-[520px]:gap-[7px] max-[520px]:min-h-[32px]">
    <span className="w-[5px] h-[5px] rounded-full bg-[#e1b261] shadow-[0_0_0_3px_#ffffff0a]"></span>
    A legacy of learning. A new world of possibilities.
    <a className="text-[#ecc486] ml-[9px] max-[520px]:ml-0" href="#programmes">Now online <span className="ml-[8px]">↗</span></a>
  </div>
  <Header interactive />
  <main id="main">
    <section className={`${SHELL} pt-[40px] min-[1600px]:pt-[50px] max-[800px]:pt-[25px] max-[520px]:pt-[21px]`} aria-labelledby="hero-title">
      <div className="flex justify-between items-center">
        <span className={`${EYEBROW} flex items-center gap-[10px] max-[520px]:text-[10px] max-[520px]:tracking-[1.2px] max-[520px]:gap-[6px]`}><span className={`${TINY_CROSS} max-[520px]:text-[18px]`}>+</span> EXTRAORDINARY MINDS START HERE</span>
        <span className="text-[12px] tracking-[1.3px] text-[#777d82] max-[520px]:text-[9px] max-[520px]:tracking-[.7px]">FOR THE CURIOUS. AGES 4–14.</span>
      </div>
      <div className="grid [grid-template-columns:1.08fr_1fr] gap-[3%] items-center [padding:49px_0_34px] min-[1600px]:gap-[7%] min-[1600px]:[padding-top:60px] min-[1600px]:[padding-bottom:50px] max-[1100px]:gap-[2%] max-[800px]:[grid-template-columns:1fr] max-[800px]:gap-[20px] max-[800px]:pt-[40px] max-[520px]:pt-[30px] max-[520px]:gap-[35px] max-[520px]:pb-[22px]">
        <div className="relative [padding:8px_0_18px] max-[800px]:max-w-[550px]">
          <h1 id="hero-title" className="[font-family:var(--display)] text-[clamp(54px,5.6vw,86px)] tracking-[-4.2px] font-medium leading-[1.12] relative min-[1600px]:text-[88px] max-[1100px]:tracking-[-3px] max-[800px]:text-[68px] max-[520px]:text-[clamp(42px,11.5vw,60px)] max-[520px]:tracking-[-2.9px] max-[520px]:leading-[1.14]">
            <span className="text-[#818784]">The potential</span><br />is already there.<br /><span>Let’s shape it.</span>
            <span className="inline-block absolute text-[#dba34b] text-[60px] leading-[1] bottom-[3px] ml-[13px] max-[1100px]:text-[43px] max-[1100px]:ml-[8px] max-[520px]:text-[38px] max-[520px]:ml-[8px] max-[520px]:bottom-[2px]" aria-hidden="true" style={motion ? {animation:'star-turn 28s linear infinite'} : undefined}>✳</span>
          </h1>
          <p className="text-[16px] leading-[1.9] text-[#747b7d] mt-[27px] max-[1100px]:text-[14px] max-[800px]:text-[16px] max-[520px]:text-[14px] max-[520px]:mt-[23px]">Other programmes teach children <strong className="text-[#192e4e] font-semibold">what</strong> to learn.<br />We train them <strong className="text-[#192e4e] font-semibold">how</strong> to learn. Unlock your child’s extra<br className="max-[520px]:hidden" /> potential, one extraordinary discovery at a time.</p>
          <div className="flex items-center gap-[26px] mt-[29px] max-[1100px]:gap-[18px] max-[520px]:mt-[23px] max-[520px]:gap-[18px]">
            <a className={`${BUTTON} max-[1100px]:text-[12px] max-[1100px]:gap-[18px] max-[1100px]:p-[17px] max-[800px]:text-[14px] max-[800px]:p-[18px_24px] max-[520px]:p-[16px] max-[520px]:text-[12px] max-[520px]:gap-[18px]`} href="#programmes">Explore programmes <span className="text-[19px] leading-[1]">↗</span></a>
            <a className={`${TEXT_LINK} max-[1100px]:text-[12px] max-[1100px]:gap-[9px] max-[800px]:text-[13px] max-[800px]:gap-[16px] max-[520px]:text-[12px] max-[520px]:gap-[9px]`} href="#approach">Discover our approach <span className="text-[18px]">↓</span></a>
          </div>
          <div className="mt-[37px] flex gap-[12px] items-center text-[#7d8383] text-[12px] leading-[1.7] max-[1100px]:mt-[28px] max-[800px]:hidden">
            <span className="text-[32px] text-[#9b9e8d]">◎</span>
            <span>25+ years of shaping minds.<br /><strong className="font-medium text-[#192e4e]">Now, wherever you are.</strong></span>
          </div>
        </div>
        <div className="relative w-full min-w-0 h-[610px] min-[1600px]:h-[665px] max-[800px]:h-[610px] max-[800px]:max-w-[560px] max-[800px]:mx-auto max-[520px]:h-[494px]">
          <div className="absolute top-0 left-[8px] right-0 flex items-center gap-[8px] text-[11px] tracking-[1.5px] text-[#757d80] max-[520px]:left-0 max-[520px]:text-[9px] max-[520px]:tracking-[1.2px]">
            <span className="font-mono text-[18px] text-[#9a9d91] font-normal">+</span> THE LITTLE LEARNING LAB <span className="caption-index ml-auto font-mono text-[12px] max-[520px]:text-[10px]">0{shape + 1} / 04</span>
          </div>
          <LearningLab key={shape} skill={shape} motion={motion} />
          <div className="absolute bottom-[58px] left-[8px] right-0 flex items-center justify-between max-[520px]:bottom-[50px] max-[520px]:left-0">
            <span className="text-[11px] tracking-[1.4px] text-[#737b7d] max-[520px]:text-[9px]">REAL LEARNING. RIGHT AT YOUR FINGERTIPS.</span>
            <button id="motion-toggle" className="text-[12px] flex items-center gap-[7px] text-[#737b7d] max-[520px]:text-[11px]" aria-pressed={motion}>Motion {motion ? "on" : "off"} <span className={`w-[5px] h-[5px] rounded-full ${motion ? 'bg-[#749582]' : 'bg-[#aaa]'}`}></span></button>
          </div>
          <div className="absolute bottom-0 left-[8px] right-0 flex border-t border-[#dcded6] max-[520px]:left-0" role="group" aria-label="Explore the four learning skills">
            {skillDetails.map((s, i) => <button key={s[0]} className={`text-[12px] [padding:15px_6px_13px] flex-1 whitespace-nowrap relative text-left max-[520px]:pt-[13px] ${shape === i ? "text-[#192e4e] before:content-[''] before:h-[2px] before:bg-[#192e4e] before:absolute before:top-[-1px] before:left-0 before:right-[12px]" : "text-[#7b8081]"}`} data-shape={i} aria-pressed={shape === i}><span className="text-[11px] mr-[5px] text-[#999c98] max-[1100px]:block max-[1100px]:mb-[5px] max-[1100px]:mr-0 max-[800px]:inline max-[800px]:mr-[6px] max-[520px]:text-[9px] max-[520px]:mr-[3px]">0{i + 1}</span>{s[0]}</button>)}
          </div>
        </div>
      </div>
      <div className="border-t border-[#dcded6] flex items-center justify-between [padding:22px_0_25px] text-[11px] tracking-[1.4px] text-[#7d8383] max-[800px]:pt-[17px] max-[520px]:text-[9px] max-[520px]:tracking-[.6px] max-[520px]:pb-[19px]">
        <span>MIND DEVELOPMENT. LIFELONG POSSIBILITY.</span>
        <a className="text-[12px] tracking-[.1px] max-[520px]:text-[11px]" href="#proof">A little scroll. A bigger perspective. <span className="ml-[34px] text-[20px] text-[#192e4e] max-[520px]:ml-[7px] max-[520px]:text-[15px]">↓</span></a>
      </div>
    </section>
    <section className={`${SHELL} bg-[#eeefe7] border-t border-[#e5e6df] border-b border-[#e0e2d9] grid [grid-template-columns:1.3fr_1fr_1fr_1.35fr_1.45fr] items-center [padding-top:34px] [padding-bottom:34px] gap-[27px] max-[1100px]:gap-[18px] max-[800px]:[grid-template-columns:repeat(3,1fr)] max-[800px]:gap-[25px] max-[800px]:pt-[27px] max-[800px]:pb-[30px] max-[520px]:[column-gap:9px] max-[520px]:[row-gap:22px]`} id="proof" aria-label="Our legacy in numbers">
      <div className="text-[14px] leading-[1.9] text-[#78807d] max-[1100px]:text-[12px] max-[800px]:col-span-full max-[800px]:text-[14px] max-[800px]:flex max-[800px]:gap-[5px] max-[520px]:text-[13px]">Rooted in Chennai.<br className="max-[800px]:hidden" /><strong className="font-medium text-[#192e4e]">Trusted across India.</strong></div>
      <div className="border-l border-[#d8dcd4] pl-[31px] flex flex-col gap-[6px] max-[1100px]:pl-[20px] max-[800px]:pl-[20px] max-[800px]:first:border-0 max-[520px]:pl-[12px]">
        <strong className="[font-family:var(--display)] text-[35px] font-medium tracking-[-1.5px] leading-[1.15] max-[520px]:text-[31px]"><span>25</span><span className="text-[#a48653] text-[27px] max-[520px]:text-[26px]">+</span></strong>
        <span className="text-[12px] text-[#737b7b] max-[520px]:text-[10px] max-[520px]:leading-[1.5]">Years of experience</span>
      </div>
      <div className="border-l border-[#d8dcd4] pl-[31px] flex flex-col gap-[6px] max-[1100px]:pl-[20px] max-[800px]:pl-[20px] max-[520px]:pl-[12px]">
        <strong className="[font-family:var(--display)] text-[35px] font-medium tracking-[-1.5px] leading-[1.15] max-[520px]:text-[31px]"><span>150</span><span className="text-[#a48653] text-[27px] max-[520px]:text-[26px]">+</span></strong>
        <span className="text-[12px] text-[#737b7b] max-[520px]:text-[10px] max-[520px]:leading-[1.5]">Learning centres</span>
      </div>
      <div className="border-l border-[#d8dcd4] pl-[31px] flex flex-col gap-[6px] max-[1100px]:pl-[20px] max-[800px]:pl-[20px] max-[520px]:pl-[12px]">
        <strong className="[font-family:var(--display)] text-[35px] font-medium tracking-[-1.5px] leading-[1.15] max-[520px]:text-[31px]"><span>350</span><span className="text-[#a48653] text-[27px] max-[520px]:text-[26px]">+</span></strong>
        <span className="text-[12px] text-[#737b7b] max-[520px]:text-[10px] max-[520px]:leading-[1.5]">Educators being onboarded</span>
      </div>
      <div className="flex items-center gap-[15px] pl-[22px] border-l border-[#d8dcd4] max-[1100px]:gap-[10px] max-[1100px]:pl-[15px] max-[800px]:col-span-full max-[800px]:pl-0 max-[800px]:border-0 max-[800px]:pt-[5px] max-[520px]:gap-[13px]">
        <span className="text-[44px] text-[#8a907d] border border-[#a3a791] outline outline-1 outline-[#a3a791] outline-offset-[3px] rounded-full w-[45px] h-[45px] flex items-center justify-center max-[1100px]:w-[34px] max-[1100px]:h-[34px] max-[1100px]:text-[32px] max-[800px]:w-[28px] max-[800px]:h-[28px] max-[800px]:text-[27px]">✧</span>
        <div>
          <strong className="text-[13px] tracking-[.4px] max-[1100px]:text-[12px] max-[800px]:text-[13px]">ISO 9001:2015</strong>
          <span className="block text-[#737b7b] text-[11px] mt-[7px] max-[1100px]:text-[10px] max-[800px]:text-[12px]">Certified quality. Lasting trust.</span>
        </div>
      </div>
    </section>
    <section className={`${SHELL} ${SPACE} bg-[#f4ead6]`} id="approach">
      <div data-reveal data-revealed={!motion || undefined} className={`flex items-end justify-between gap-[30px] mb-[44px] max-[800px]:gap-[25px] max-[800px]:items-start max-[800px]:flex-col max-[800px]:mb-[33px] ${reveal}`}>
        <div>
          <span className={`${EYEBROW} mb-[24px] text-[#778078] max-[800px]:mb-[17px]`}>01 / THE FOUNDATION</span>
          <h2 className={SECTION_HEADING_H2}>Not just better at a subject.<br /><span className="text-[#868c86]">Better at learning.</span></h2>
        </div>
        <p className="text-[14px] leading-[1.9] text-[#7b8180] pb-[3px] min-w-[285px] max-[1100px]:min-w-[240px] max-[1100px]:text-[13px] max-[800px]:min-w-0 max-[800px]:text-[14px] max-[520px]:text-[13px]">Big possibilities begin with four essential abilities.<br />Every Xtragenius programme strengthens the way<br className="max-[520px]:hidden" /> your child thinks, learns and grows.</p>
      </div>
      <div className="grid grid-cols-4 border border-[#e3d6b8] max-[800px]:grid-cols-2">
        <button data-reveal data-revealed={!motion || undefined} className={`text-left [padding:23px_23px_0] border-r border-[#e3d6b8] relative transition-colors duration-300 overflow-hidden block last:border-r-0 max-[1100px]:px-[17px] max-[800px]:px-[23px] max-[800px]:nth-[2]:border-r-0 max-[800px]:[&:nth-child(-n+2)]:border-b max-[800px]:[&:nth-child(-n+2)]:border-[#dcded6] max-[520px]:p-[16px_15px_0] hover:bg-[#eeefe5] group ${reveal}`} data-skill="0">
          <div className="flex items-center justify-between text-[12px] text-[#8c9189]"><span>01</span><span className="text-[19px]">↗</span></div>
          <div className="h-[140px] relative [margin:12px_auto_17px] w-[160px] flex items-center justify-center max-[1100px]:w-[130px] max-[800px]:h-[135px] max-[800px]:mt-[5px] max-[520px]:w-[116px] max-[520px]:h-[120px] max-[520px]:mb-[12px] max-[520px]:scale-90">
            <i className="absolute w-[100px] h-[100px] border border-[#9fb0c4] rounded-full transition-transform duration-700 group-hover:scale-[1.15]"></i>
            <i className="absolute w-[75px] h-[75px] border border-[#7892b0] rounded-full transition-transform duration-700"></i>
            <i className="absolute w-[50px] h-[50px] border border-[#51719b] rounded-full transition-transform duration-700 group-hover:scale-[1.15]"></i>
            <i className="absolute w-[24px] h-[24px] border border-[#192e4e] rounded-full transition-transform duration-700"></i>
            <b className="w-[8px] h-[8px] bg-[#dba34b] rounded-full shadow-[0_0_0_4px_#dba34b16]"></b>
          </div>
          <h3 className="[font-family:var(--display)] text-[22px] font-medium tracking-[-.65px] mb-[12px] max-[1100px]:text-[20px] max-[800px]:text-[23px] max-[520px]:text-[20px]">Concentration</h3>
          <p className="text-[#7a817e] text-[13px] leading-[1.7] max-w-[190px] min-h-[38px] max-[1100px]:text-[12px] max-[800px]:text-[14px] max-[520px]:text-[12px] max-[520px]:min-h-[35px]">Find focus in a world full of distractions.</p>
          <span className="flex justify-between items-center border-t border-[#e3d6b8] py-[19px] mt-[23px] text-[11px] text-[#7a817e] max-[1100px]:text-[10px] max-[800px]:text-[12px] max-[520px]:text-[10px] max-[520px]:leading-[1.5] max-[520px]:py-[14px] max-[520px]:gap-[8px] max-[520px]:mt-[18px]">A mind that stays with it <span className="text-[#192e4e] text-[17px] max-[520px]:text-[14px]">↗</span></span>
        </button>
        <button data-reveal data-revealed={!motion || undefined} className={`text-left [padding:23px_23px_0] border-r border-[#e3d6b8] relative transition-colors duration-300 overflow-hidden block last:border-r-0 delay-[80ms] max-[1100px]:px-[17px] max-[800px]:px-[23px] max-[800px]:border-r-0 max-[800px]:border-b max-[800px]:border-[#dcded6] max-[520px]:p-[16px_15px_0] hover:bg-[#eeefe5] group ${reveal}`} data-skill="1">
          <div className="flex items-center justify-between text-[12px] text-[#8c9189]"><span>02</span><span className="text-[19px]">↗</span></div>
          <div className="h-[140px] relative [margin:12px_auto_17px] w-[160px] flex items-center justify-center gap-[9px] [transform:skew(-27deg)] max-[1100px]:w-[130px] max-[800px]:h-[135px] max-[800px]:mt-[5px] max-[520px]:w-[116px] max-[520px]:h-[120px] max-[520px]:mb-[12px] max-[520px]:scale-[.85]">
            <i className="block w-[10px] h-[80px] bg-[#9fb0c4] transition-transform duration-500 h-[45px] group-hover:scale-y-100 scale-y-75"></i>
            <i className="block w-[10px] h-[80px] bg-[#7892b0] transition-transform duration-500 h-[65px] group-hover:scale-y-100 scale-y-75"></i>
            <i className="block w-[10px] h-[80px] bg-[#51719b] transition-transform duration-500 h-[85px] group-hover:scale-y-100 scale-y-75"></i>
            <i className="block w-[10px] h-[105px] bg-[#192e4e] transition-transform duration-500 group-hover:scale-y-100 scale-y-75"></i>
            <i className="block w-[10px] h-[125px] bg-[#dba34b] transition-transform duration-500 group-hover:scale-y-100 scale-y-75"></i>
          </div>
          <h3 className="[font-family:var(--display)] text-[22px] font-medium tracking-[-.65px] mb-[12px] max-[1100px]:text-[20px] max-[800px]:text-[23px] max-[520px]:text-[20px]">Speed</h3>
          <p className="text-[#7a817e] text-[13px] leading-[1.7] max-w-[190px] min-h-[38px] max-[1100px]:text-[12px] max-[800px]:text-[14px] max-[520px]:text-[12px] max-[520px]:min-h-[35px]">Think on your feet. With clarity and accuracy.</p>
          <span className="flex justify-between items-center border-t border-[#e3d6b8] py-[19px] mt-[23px] text-[11px] text-[#7a817e] max-[1100px]:text-[10px] max-[800px]:text-[12px] max-[520px]:text-[10px] max-[520px]:leading-[1.5] max-[520px]:py-[14px] max-[520px]:gap-[8px] max-[520px]:mt-[18px]">Confidence in every response <span className="text-[#192e4e] text-[17px] max-[520px]:text-[14px]">↗</span></span>
        </button>
        <button data-reveal data-revealed={!motion || undefined} className={`text-left [padding:23px_23px_0] border-r border-[#e3d6b8] relative transition-colors duration-300 overflow-hidden block last:border-r-0 delay-[160ms] max-[1100px]:px-[17px] max-[800px]:px-[23px] max-[800px]:px-[23px] max-[520px]:p-[16px_15px_0] hover:bg-[#eeefe5] group ${reveal}`} data-skill="2">
          <div className="flex items-center justify-between text-[12px] text-[#8c9189]"><span>03</span><span className="text-[19px]">↗</span></div>
          <div className="h-[140px] relative [margin:12px_auto_17px] w-[160px] grid [grid-template-columns:repeat(3,22px)] gap-[9px] content-center max-[1100px]:w-[130px] max-[800px]:h-[135px] max-[800px]:mt-[5px] max-[520px]:w-[116px] max-[520px]:h-[120px] max-[520px]:mb-[12px] max-[520px]:scale-90">
            <i className="w-[22px] h-[22px] border rounded-full transition-[background,transform] duration-500 bg-[#192e4e] border-[#192e4e] group-hover:bg-[#7892b0] group-hover:border-[#7892b0] group-hover:scale-[.8]"></i>
            <i className="w-[22px] h-[22px] border border-[#9fb0c4] rounded-full transition-[background,transform] duration-500 group-hover:bg-[#7892b0] group-hover:border-[#7892b0] group-hover:scale-[.8]"></i>
            <i className="w-[22px] h-[22px] border rounded-full transition-[background,transform] duration-500 bg-[#192e4e] border-[#192e4e]"></i>
            <i className="w-[22px] h-[22px] border border-[#9fb0c4] rounded-full transition-[background,transform] duration-500 group-hover:bg-[#7892b0] group-hover:border-[#7892b0] group-hover:scale-[.8]"></i>
            <i className="w-[22px] h-[22px] border rounded-full transition-[background,transform] duration-500 bg-[#dba34b] border-[#dba34b]"></i>
            <i className="w-[22px] h-[22px] border rounded-full transition-[background,transform] duration-500 bg-[#192e4e] border-[#192e4e] group-hover:bg-[#7892b0] group-hover:border-[#7892b0] group-hover:scale-[.8]"></i>
            <i className="w-[22px] h-[22px] border border-[#9fb0c4] rounded-full transition-[background,transform] duration-500 group-hover:bg-[#7892b0] group-hover:border-[#7892b0] group-hover:scale-[.8]"></i>
            <i className="w-[22px] h-[22px] border border-[#9fb0c4] rounded-full transition-[background,transform] duration-500 group-hover:bg-[#7892b0] group-hover:border-[#7892b0] group-hover:scale-[.8]"></i>
            <i className="w-[22px] h-[22px] border rounded-full transition-[background,transform] duration-500 bg-[#192e4e] border-[#192e4e]"></i>
          </div>
          <h3 className="[font-family:var(--display)] text-[22px] font-medium tracking-[-.65px] mb-[12px] max-[1100px]:text-[20px] max-[800px]:text-[23px] max-[520px]:text-[20px]">Memory</h3>
          <p className="text-[#7a817e] text-[13px] leading-[1.7] max-w-[190px] min-h-[38px] max-[1100px]:text-[12px] max-[800px]:text-[14px] max-[520px]:text-[12px] max-[520px]:min-h-[35px]">Make connections that stay for a lifetime.</p>
          <span className="flex justify-between items-center border-t border-[#e3d6b8] py-[19px] mt-[23px] text-[11px] text-[#7a817e] max-[1100px]:text-[10px] max-[800px]:text-[12px] max-[520px]:text-[10px] max-[520px]:leading-[1.5] max-[520px]:py-[14px] max-[520px]:gap-[8px] max-[520px]:mt-[18px]">Learn it. Connect it. Remember it. <span className="text-[#192e4e] text-[17px] max-[520px]:text-[14px]">↗</span></span>
        </button>
        <button data-reveal data-revealed={!motion || undefined} className={`text-left [padding:23px_23px_0] relative transition-colors duration-300 overflow-hidden block delay-[240ms] max-[1100px]:px-[17px] max-[800px]:px-[23px] max-[800px]:border-r max-[800px]:border-[#e3d6b8] max-[520px]:p-[16px_15px_0] hover:bg-[#eeefe5] group ${reveal}`} data-skill="3">
          <div className="flex items-center justify-between text-[12px] text-[#8c9189]"><span>04</span><span className="text-[19px]">↗</span></div>
          <div className="h-[140px] relative [margin:12px_auto_17px] w-[160px] flex items-center justify-center [perspective:300px] max-[1100px]:w-[130px] max-[800px]:h-[135px] max-[800px]:mt-[5px] max-[520px]:w-[116px] max-[520px]:h-[120px] max-[520px]:mb-[12px] max-[520px]:scale-90">
            <i className="w-[78px] h-[78px] border border-[#7892b0] absolute [transform:rotate(-30deg)_skew(12deg)] transition-transform duration-700 [margin-left:-28px] [margin-top:-20px] border-[#192e4e] group-hover:[transform:translate(-7px,-7px)_rotate(-30deg)_skew(12deg)]"></i>
            <i className="w-[78px] h-[78px] border border-[#7892b0] absolute [transform:rotate(-30deg)_skew(12deg)] transition-transform duration-700 ml-[28px] mt-[20px] border-[#dba34b] group-hover:[transform:translate(7px,7px)_rotate(-30deg)_skew(12deg)]"></i>
          </div>
          <h3 className="[font-family:var(--display)] text-[22px] font-medium tracking-[-.65px] mb-[12px] max-[1100px]:text-[20px] max-[800px]:text-[23px] max-[520px]:text-[20px]">Visualization</h3>
          <p className="text-[#7a817e] text-[13px] leading-[1.7] max-w-[190px] min-h-[38px] max-[1100px]:text-[12px] max-[800px]:text-[14px] max-[520px]:text-[12px] max-[520px]:min-h-[35px]">See the possibilities before they take shape.</p>
          <span className="flex justify-between items-center border-t border-[#e3d6b8] py-[19px] mt-[23px] text-[11px] text-[#7a817e] max-[1100px]:text-[10px] max-[800px]:text-[12px] max-[520px]:text-[10px] max-[520px]:leading-[1.5] max-[520px]:py-[14px] max-[520px]:gap-[8px] max-[520px]:mt-[18px]">Imagination with a purpose <span className="text-[#192e4e] text-[17px] max-[520px]:text-[14px]">↗</span></span>
        </button>
      </div>
      <div className="text-center text-[12px] mt-[25px] text-[#69736e] max-[520px]:text-[11px] max-[520px]:leading-[1.8] max-[520px]:mt-[20px]"><span className="[vertical-align:-2px] mr-[8px]">+</span> Four abilities. Endless applications. <span className="text-[#8d928c] ml-[7px] max-[520px]:block">In the classroom. And far beyond it.</span></div>
    </section>
    <section className={`${SHELL} ${SPACE} bg-[#192e4e] text-[#f7f3ea] max-[800px]:pt-[15px] max-[520px]:pt-[15px]`} id="programmes">
      <div data-reveal data-revealed={!motion || undefined} className={`flex items-end justify-between gap-[30px] mb-[44px] max-[800px]:gap-[25px] max-[800px]:items-start max-[800px]:flex-col max-[800px]:mb-[33px] ${reveal}`}>
        <div>
          <span className={`${EYEBROW} mb-[24px] text-[#e3b876] max-[800px]:mb-[17px]`}>02 / FIND THEIR NEXT DISCOVERY</span>
          <h2 className={SECTION_HEADING_H2}>Small beginnings.<br /><span className="text-[#868c86]">Extraordinary journeys.</span></h2>
        </div>
        <p className="text-[14px] leading-[1.9] text-[#7b8180] pb-[3px] min-w-[285px] max-[1100px]:min-w-[240px] max-[1100px]:text-[13px] max-[800px]:min-w-0 max-[800px]:text-[14px] max-[520px]:text-[13px]">Expert-led programmes for curious minds.<br />Grounded in our approach. Designed to bring<br className="max-[520px]:hidden" /> out the extraordinary in every child.</p>
      </div>
      <div className="flex items-center justify-between border-b border-[rgba(247,243,234,.16)] mb-[30px]">
        <div className="flex gap-[29px] max-[800px]:gap-[22px] max-[520px]:gap-[17px] max-[520px]:overflow-x-auto max-[520px]:w-full max-[520px]:[scrollbar-width:none]" role="group" aria-label="Filter programmes">
          {[["all", "All programmes"], ["core", "Cognitive & maths"], ["creative", "Creative skills"], ["future", "Future skills"]].map(([value, label]) => <button key={value} className={`[padding:0_0_17px] text-[13px] border-b-2 relative bottom-[-1px] max-[800px]:text-[12px] max-[520px]:text-[12px] max-[520px]:whitespace-nowrap max-[520px]:pb-[13px] ${filter === value ? "text-[#f7f3ea] border-[#f7f3ea]" : "text-[#7e8482] border-transparent"}`} data-filter={value} aria-pressed={filter === value}>{label}{value === "all" && <span className="text-[11px] ml-[5px] align-top text-[#8b948b] max-[520px]:text-[9px]">06</span>}</button>)}
        </div>
        <span className="text-[11px] tracking-[1.1px] pb-[16px] text-[#8a908a] max-[1100px]:hidden">A WORLD BEYOND THE CLASSROOM ↗</span>
      </div>
      <CourseGrid filter={filter} />
      <div className="flex items-center justify-between pt-[27px] mt-[6px] text-[#80877f] text-[12px] max-[800px]:gap-[20px] max-[800px]:items-start max-[800px]:leading-[1.7] max-[520px]:flex-col max-[520px]:gap-[14px]">
        <span className="max-[800px]:max-w-[250px] max-[520px]:max-w-none">Every child has a different starting point. We’ll help you find theirs.</span>
        <button className={`${TEXT_LINK} text-[#f7f3ea] max-[800px]:text-[12px] max-[800px]:shrink-0`} data-contact="programme guidance">Talk to our learning team <span className="text-[18px]">↗</span></button>
      </div>
    </section>
    <Announcements motion={motion} />
    <section className={`${SHELL} ${SPACE} grid grid-cols-2 gap-[8%] items-center max-[1100px]:gap-[7%] max-[800px]:grid-cols-1 max-[800px]:gap-[40px] max-[800px]:pt-[48px]`} id="legacy">
      <div data-reveal data-revealed={!motion || undefined} className={`relative h-[555px] bg-[#d4d6c5] max-[1100px]:h-[540px] max-[800px]:h-[400px] max-[520px]:h-[365px] ${reveal}`}>
        <img className="w-full h-full object-cover [filter:saturate(.45)]" src="/images/classroom.jpg" alt="Children exploring and learning together in a classroom" loading="lazy" />
        <div className="absolute inset-0 [background:linear-gradient(0deg,#152b4750,transparent_60%)]"></div>
        <div className="absolute left-[24px] bottom-[24px] text-white text-[11px] tracking-[1.3px] z-[1]"><span className="mr-[7px] [vertical-align:-2px]">+</span> REAL LEARNING. REAL POSSIBILITY.</div>
        <div className="absolute top-[26px] right-[-24px] bg-[#f7f7f0] border border-[#dcded6] [padding:21px_25px] flex gap-[14px] items-center z-[2] max-[800px]:right-[20px] max-[520px]:[padding:14px_18px] max-[520px]:gap-[12px] max-[520px]:top-[19px] max-[520px]:right-[-10px]">
          <strong className="[font-family:var(--display)] text-[46px] font-medium tracking-[-2px] max-[520px]:text-[38px]">25<span className="text-[31px] text-[#dba34b]">+</span></strong>
          <span className="text-[11px] tracking-[1px] leading-[1.8] max-[520px]:text-[10px]">YEARS OF<br />LOOKING AHEAD.</span>
        </div>
      </div>
      <div data-reveal data-revealed={!motion || undefined} className={reveal}>
        <span className={`${EYEBROW} mb-[22px] text-[#7e8579]`}>03 / A LEGACY THAT LOOKS FORWARD</span>
        <h2 className="text-[38px] tracking-[-1.7px] mb-[23px] max-[800px]:text-[39px] max-[520px]:text-[32px]">New possibilities.<br /><span className="text-[#868c86]">The same strong roots.</span></h2>
        <p className="text-[14px] leading-[1.95] text-[#7e857e] mb-[13px] max-[800px]:text-[15px] max-[520px]:text-[14px]">For over 25 years, we’ve helped children discover what their minds can do. From our roots in Chennai to 150+ centres across India, our belief has never changed: the right foundation changes everything.</p>
        <p className="text-[14px] leading-[1.95] text-[#7e857e] mb-[13px] max-[800px]:text-[15px] max-[520px]:text-[14px]">Now, we’re bringing that experience online. The same considered approach. The same commitment to quality. A whole new way to reach your child.</p>
        <div className="[margin:26px_0]">
          <div className="flex gap-[17px] mb-[20px]">
            <span className="text-[12px] text-[#9c9d88] border border-[#d7dccf] rounded-full h-[24px] w-[24px] shrink-0 grid place-items-center">01</span>
            <div><h4 className="text-[13px] font-[550] [margin:3px_0_7px] max-[800px]:text-[14px]">Established. Experienced. Here for the long run.</h4><p className="text-[12px] leading-[1.7] text-[#82877e] max-[800px]:text-[13px]">A learning network built over decades, not overnight.</p></div>
          </div>
          <div className="flex gap-[17px] mb-[20px]">
            <span className="text-[12px] text-[#9c9d88] border border-[#d7dccf] rounded-full h-[24px] w-[24px] shrink-0 grid place-items-center">02</span>
            <div><h4 className="text-[13px] font-[550] [margin:3px_0_7px] max-[800px]:text-[14px]">A standard you can trust.</h4><p className="text-[12px] leading-[1.7] text-[#82877e] max-[800px]:text-[13px]">ISO 9001:2015 certified quality, at the heart of our systems.</p></div>
          </div>
          <div className="flex gap-[17px] mb-[20px]">
            <span className="text-[12px] text-[#9c9d88] border border-[#d7dccf] rounded-full h-[24px] w-[24px] shrink-0 grid place-items-center">03</span>
            <div><h4 className="text-[13px] font-[550] [margin:3px_0_7px] max-[800px]:text-[14px]">A bigger stage for growing confidence.</h4><p className="text-[12px] leading-[1.7] text-[#82877e] max-[800px]:text-[13px]">From centre to district to state — competitions that celebrate progress.</p></div>
          </div>
        </div>
        <button className={TEXT_LINK} data-contact="our centres">Connect with our network <span className="text-[18px]">↗</span></button>
      </div>
    </section>
    <section className={`${SHELL} ${SPACE} grid [grid-template-columns:.85fr_1.15fr] gap-[8%] items-center bg-[#192e4e] text-[#f7f3ea] max-[800px]:[grid-template-columns:1fr] max-[800px]:gap-[40px]`} id="founder">
      <div data-reveal data-revealed={!motion || undefined} className={`relative ${reveal}`}>
        <div className="[aspect-ratio:3/4] rounded-[14px] [background:linear-gradient(155deg,#223f63,#101f35)] flex items-center justify-center overflow-hidden border border-[rgba(247,243,234,.14)] max-[800px]:max-w-[320px] max-[800px]:mx-auto"><img src="/images/founder/chinnaraj.png" alt="Mr. Chinnaraj, Co-Founder of Xtragenius" className="w-full h-full object-cover block" /></div>
        <div className="absolute bottom-[-18px] left-[-18px] bg-[#dba34b] text-[#192e4e] rounded-[11px] [padding:14px_18px] [font-family:var(--display)] font-extrabold leading-[1.15] shadow-[0_14px_30px_#0003] max-[800px]:left-1/2 max-[800px]:-translate-x-1/2">25<span className="block text-[12px] font-semibold tracking-[1.2px] [font-family:var(--font)]">+ YEARS<br />BUILDING XTRAGENIUS</span></div>
      </div>
      <div data-reveal data-revealed={!motion || undefined} className={reveal}>
        <span className={`${EYEBROW} mb-[14px] text-[#e3b876]`}>04 / THE PERSON BEHIND THE POTENTIAL</span>
        <p className="[font-family:var(--display)] text-[26px] font-bold leading-[1.35] [margin:0_0_20px]">“Every extraordinary idea started as someone willing to try something new.”</p>
        <p className="text-[16px] leading-[1.8] opacity-90 max-w-[520px] [margin:0_0_24px]">From a statistical assistant running a computer centre in 2000, to building a statewide training franchise, to founding Xtragenius — Mr. Chinnaraj’s journey is one of constantly trying something new.</p>
        <a className={TEXT_LINK} href="/founder">Read the full story <span className="text-[18px]">↗</span></a>
      </div>
    </section>
    <section className={`${SHELL} ${SPACE}`} id="outcomes">
      <div data-reveal data-revealed={!motion || undefined} className={`flex items-end justify-between gap-[30px] mb-[44px] max-[800px]:gap-[25px] max-[800px]:items-start max-[800px]:flex-col max-[800px]:mb-[33px] ${reveal}`}>
        <div>
          <span className={`${EYEBROW} mb-[24px] text-[#778078] max-[800px]:mb-[17px]`}>05 / PROGRESS THAT GOES BEYOND MARKS</span>
          <h2 className={SECTION_HEADING_H2}>Little shifts.<br /><span className="text-[#868c86]">Life-changing confidence.</span></h2>
        </div>
        <p className="text-[14px] leading-[1.9] text-[#7b8180] pb-[3px] min-w-[285px] max-[1100px]:min-w-[240px] max-[1100px]:text-[13px] max-[800px]:min-w-0 max-[800px]:text-[14px] max-[520px]:text-[13px]">The outcomes our programmes work towards.<br />Because the best kind of progress shows up<br className="max-[520px]:hidden" /> in everyday life.</p>
      </div>
      <div className="grid grid-cols-3 gap-[35px] max-[800px]:gap-[20px] max-[520px]:grid-cols-1 max-[520px]:gap-[30px]">
        <article data-reveal data-revealed={!motion || undefined} className={`border-t border-[#dcded6] [padding:28px_7px_0_0] max-[520px]:relative max-[520px]:pl-[54px] max-[520px]:pt-[24px] ${reveal}`}>
          <span className="text-[36px] block text-[#a08b60] mb-[27px] max-[520px]:absolute max-[520px]:top-[21px] max-[520px]:left-[2px] max-[520px]:text-[31px]">◎</span>
          <span className={`${EYEBROW} text-[#8a9186] max-[800px]:text-[10px] max-[520px]:text-[11px]`}>CONCENTRATION</span>
          <h3 className="[font-family:var(--display)] text-[23px] leading-[1.5] font-medium tracking-[-.5px] mt-[17px] max-[800px]:text-[19px] max-[520px]:text-[23px] max-[520px]:mt-[12px]">Staying with a challenge.<br />And enjoying the discovery.</h3>
          <p className="text-[13px] leading-[1.85] text-[#858b82] mt-[15px] max-w-[310px] max-[800px]:text-[13px] max-[520px]:mt-[11px]">Building the focus to approach a task patiently and give new ideas room to grow.</p>
        </article>
        <article data-reveal data-revealed={!motion || undefined} className={`border-t border-[#dcded6] [padding:28px_7px_0_0] delay-[80ms] max-[520px]:relative max-[520px]:pl-[54px] max-[520px]:pt-[24px] ${reveal}`}>
          <span className="text-[36px] block text-[#a08b60] mb-[27px] max-[520px]:absolute max-[520px]:top-[21px] max-[520px]:left-[2px] max-[520px]:text-[31px]">↗</span>
          <span className={`${EYEBROW} text-[#8a9186] max-[800px]:text-[10px] max-[520px]:text-[11px]`}>SPEED & CONFIDENCE</span>
          <h3 className="[font-family:var(--display)] text-[23px] leading-[1.5] font-medium tracking-[-.5px] mt-[17px] max-[800px]:text-[19px] max-[520px]:text-[23px] max-[520px]:mt-[12px]">A hand that goes up.<br />A mind that backs itself.</h3>
          <p className="text-[13px] leading-[1.85] text-[#858b82] mt-[15px] max-w-[310px] max-[800px]:text-[13px] max-[520px]:mt-[11px]">Practising mental mathematics to develop accuracy and the confidence to participate.</p>
        </article>
        <article data-reveal data-revealed={!motion || undefined} className={`border-t border-[#dcded6] [padding:28px_7px_0_0] delay-[160ms] max-[520px]:relative max-[520px]:pl-[54px] max-[520px]:pt-[24px] ${reveal}`}>
          <span className="text-[36px] block text-[#a08b60] mb-[27px] max-[520px]:absolute max-[520px]:top-[21px] max-[520px]:left-[2px] max-[520px]:text-[31px]">✳</span>
          <span className={`${EYEBROW} text-[#8a9186] max-[800px]:text-[10px] max-[520px]:text-[11px]`}>MEMORY & VISUALIZATION</span>
          <h3 className="[font-family:var(--display)] text-[23px] leading-[1.5] font-medium tracking-[-.5px] mt-[17px] max-[800px]:text-[19px] max-[520px]:text-[23px] max-[520px]:mt-[12px]">Connecting the dots.<br />Seeing a bigger picture.</h3>
          <p className="text-[13px] leading-[1.85] text-[#858b82] mt-[15px] max-w-[310px] max-[800px]:text-[13px] max-[520px]:mt-[11px]">Strengthening recall and mental imagery to make learning feel more connected.</p>
        </article>
      </div>
    </section>
    <section className={`${SHELL} ${SPACE} bg-[#f4ead6]`} id="press" aria-labelledby="press-heading">
      <div className="grid [grid-template-columns:.8fr_1.2fr] gap-[9%] items-center max-[900px]:[grid-template-columns:1fr] max-[900px]:gap-[34px]">
        <div data-reveal data-revealed={!motion || undefined} className={reveal}>
          <span className={`${EYEBROW} mb-[24px] text-[#778078]`}>06 / AS SEEN ON</span>
          <h2 id="press-heading" className={SECTION_HEADING_H2}>Recognised beyond<br /><span className="text-[#868c86]">the classroom.</span></h2>
          <p className="text-[16px] leading-[1.8] opacity-85 [margin:18px_0_26px] max-w-[420px]">Our work in cognitive learning has reached beyond our centres — including a feature on Vijay TV, Tamil Nadu’s leading television network.</p>
          <div className="flex flex-wrap gap-[12px]">
            <span className="inline-flex items-center gap-[10px] border border-[#e3d6b8] rounded-full [padding:11px_20px] text-[13px] font-semibold tracking-[.2px]"><span className="w-[7px] h-[7px] rounded-full bg-[#dba34b] shrink-0" aria-hidden="true"></span>ISO 9001:2015 Certified</span>
            <span className="inline-flex items-center gap-[10px] border border-[#e3d6b8] rounded-full [padding:11px_20px] text-[13px] font-semibold tracking-[.2px]"><span className="w-[7px] h-[7px] rounded-full bg-[#dba34b] shrink-0" aria-hidden="true"></span>150+ Centres Nationwide</span>
          </div>
        </div>
        <div data-reveal data-revealed={!motion || undefined} className={reveal}>
          <span className="block text-[12px] font-bold tracking-[1.4px] text-[#dba34b] mb-[12px]">FEATURED ON VIJAY TV</span>
          <div className="relative [aspect-ratio:16/9] rounded-[14px] overflow-hidden shadow-[0_20px_50px_#15283330] border border-[#e3d6b8]">
            <iframe
              className="absolute inset-0 w-full h-full border-0"
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
    <section className=" max-[800px]:px-[6%] min-[1600px]:[padding-left:max(5.5%,calc((100vw_-_1420px)/2))] min-[1600px]:[padding-right:max(5.5%,calc((100vw_-_1420px)/2))]" id="partners">
      <div className="bg-[#192e4e] text-[#f7f7f0] grid [grid-template-columns:.8fr_1fr] items-center gap-[9%] min-h-[415px] [padding:58px_7%] overflow-hidden max-[1100px]:gap-[7%] max-[1100px]:p-[50px_6%] max-[800px]:[grid-template-columns:1fr] max-[800px]:p-[40px] max-[800px]:gap-[35px] max-[520px]:p-[35px_25px] max-[520px]:gap-[28px]">
        <div className="grid grid-cols-2 w-[240px] gap-[7px] [transform:rotate(-12deg)] text-[#e3b364] max-[1100px]:w-[200px] max-[800px]:w-[140px] max-[800px]:gap-[6px] max-[800px]:[grid-template-columns:repeat(4,1fr)] max-[800px]:[transform:rotate(0)]" aria-hidden="true">
          <span className="text-[134px] leading-[.95] text-center [font-family:Arial,sans-serif] max-[1100px]:text-[110px] max-[800px]:text-[60px] max-[520px]:text-[49px]" style={motion ? {animation:'star-turn 50s linear infinite'} : undefined}>✳</span>
          <span className="text-[134px] leading-[.95] text-center [font-family:Arial,sans-serif] text-[#718098] max-[1100px]:text-[110px] max-[800px]:text-[60px] max-[520px]:text-[49px]" style={motion ? {animation:'star-turn 50s linear infinite reverse'} : undefined}>✳</span>
          <span className="text-[134px] leading-[.95] text-center [font-family:Arial,sans-serif] text-[#718098] max-[1100px]:text-[110px] max-[800px]:text-[60px] max-[520px]:text-[49px]" style={motion ? {animation:'star-turn 50s linear infinite reverse'} : undefined}>✳</span>
          <span className="text-[134px] leading-[.95] text-center [font-family:Arial,sans-serif] max-[1100px]:text-[110px] max-[800px]:text-[60px] max-[520px]:text-[49px]" style={motion ? {animation:'star-turn 50s linear infinite'} : undefined}>✳</span>
        </div>
        <div data-reveal data-revealed={!motion || undefined} className={reveal}>
          <span className="text-[11px] text-[#a8b3bf] mb-[22px] block tracking-[1.65px] font-[550] max-[1100px]:text-[10px] max-[800px]:text-[10px]">FOR EDUCATORS, ACADEMIES & INSTITUTES</span>
          <h2 className="text-[40px] tracking-[-1.6px] max-[1100px]:text-[36px] max-[800px]:text-[39px] max-[520px]:text-[32px]">Great educators.<br /><span className="text-[#aab3bd]">Greater possibilities.</span></h2>
          <p className="text-[#b8c0c7] text-[14px] leading-[1.9] max-w-[410px] [margin:21px_0_25px] max-[800px]:max-w-full max-[520px]:text-[13px]">Bring your expertise to India’s trusted cognitive learning network. Join an established ecosystem of educators, and help shape the next generation of confident learners.</p>
          <div className="flex gap-[20px] items-center max-[520px]:gap-[17px]">
            <button className="inline-flex items-center justify-between gap-[30px] bg-[#e6b967] text-[#192e4e] border border-[#e6b967] rounded-[4px] py-[19px] px-[24px] text-[14px] font-medium transition-[background,transform,box-shadow] duration-[250ms] hover:bg-[#f3cb85] hover:-translate-y-[2px] hover:shadow-[0_7px_16px_#172d4c13] max-[800px]:text-[12px] max-[800px]:p-[15px_16px] max-[800px]:gap-[20px] max-[800px]:shrink-0" data-contact="partnership">Become a partner <span className="text-[19px] leading-[1]">↗</span></button>
            <span className="text-[10px] tracking-[1px] text-[#a4b0bc] max-w-[100px] leading-[1.7] max-[800px]:max-w-none max-[800px]:text-[9px] max-[800px]:max-w-[92px]">YOUR EXPERTISE. OUR SHARED PURPOSE.</span>
          </div>
        </div>
      </div>
    </section>
    <section data-reveal data-revealed={!motion || undefined} className={`${SHELL} [padding-top:111px] [padding-bottom:108px] text-center border-t border-[rgba(32,49,75,.18)] bg-[#dba34b] text-[#20314b] max-[800px]:pt-[75px] max-[800px]:pb-[75px] max-[520px]:pt-[65px] max-[520px]:pb-[65px] max-[360px]:pt-[55px] ${reveal}`}>
      <span className="text-[11px] text-[#5a3f16] mb-[23px] block tracking-[1.65px] font-[550] max-[520px]:text-[9px] max-[520px]:tracking-[1px]">THE NEXT CHAPTER STARTS WITH CURIOSITY.</span>
      <h2 className="text-[54px] leading-[1.23] tracking-[-2.5px] relative inline-block max-[800px]:text-[43px] max-[520px]:text-[33px] max-[520px]:tracking-[-1.6px] max-[360px]:text-[28px]">Learn more. Think better.<br /><span className="text-[#6b5327]">Grow confidently.</span><span className="text-[#dba34b] text-[55px] absolute bottom-[3px] right-[-65px] max-[800px]:text-[40px] max-[800px]:right-[-48px] max-[520px]:text-[26px] max-[520px]:right-[-19px] max-[520px]:bottom-[5px] max-[360px]:text-[22px] max-[360px]:right-[-15px]" style={motion ? {animation:'star-turn 30s linear infinite'} : undefined}>✳</span></h2>
      <a className="inline-flex items-center justify-between gap-[30px] bg-[#20314b] text-[#dba34b] border border-[#20314b] rounded-[4px] py-[19px] px-[24px] text-[14px] font-medium transition-[background,transform,box-shadow] duration-[250ms] hover:bg-[#2c4064] hover:-translate-y-[2px] hover:shadow-[0_7px_16px_#172d4c13] flex w-fit whitespace-nowrap [margin:29px_auto_0] max-[800px]:text-[12px] max-[800px]:p-[17px_18px]" href="#programmes">Find their programme <span className="text-[19px] leading-[1]">↗</span></a>
    </section>
    <section className={`${SHELL} ${SPACE}`} id="testimonials" aria-labelledby="testimonials-heading">
      <div data-reveal data-revealed={!motion || undefined} className={`flex items-end justify-between gap-[30px] mb-[44px] max-[800px]:gap-[25px] max-[800px]:items-start max-[800px]:flex-col max-[800px]:mb-[33px] ${reveal}`}>
        <div>
          <span className={`${EYEBROW} mb-[24px] text-[#778078] max-[800px]:mb-[17px]`}>07 / IN THEIR OWN WORDS</span>
          <h2 id="testimonials-heading" className={SECTION_HEADING_H2}>Families and partners.<br /><span className="text-[#868c86]">Telling it like it is.</span></h2>
        </div>
      </div>
      <Testimonials motion={motion} />
    </section>
    <section className={`${SHELL} ${SPACE}`} id="faq" aria-labelledby="faq-heading">
      <div data-reveal data-revealed={!motion || undefined} className={`flex items-end justify-between gap-[30px] mb-[44px] max-[800px]:gap-[25px] max-[800px]:items-start max-[800px]:flex-col max-[800px]:mb-[33px] ${reveal}`}>
        <div>
          <span className={`${EYEBROW} mb-[24px] text-[#778078] max-[800px]:mb-[17px]`}>08 / YOUR QUESTIONS</span>
          <h2 id="faq-heading" className={SECTION_HEADING_H2}>Good questions.<br /><span className="text-[#868c86]">Clear answers.</span></h2>
        </div>
      </div>
      <div className="max-w-[860px] [margin:0_auto]">
        {faqs.map((item, i) => <div key={item.q} data-reveal data-revealed={!motion || undefined} className={`group border-b border-[#dcded6] last:border-b-0 ${reveal}`} data-open={openFaq === i}>
          <button type="button" className="flex items-center justify-between gap-[20px] w-full [padding:22px_2px] text-left [font-family:var(--display)] text-[18px] font-bold max-[800px]:text-[16px]" data-faq={i} aria-expanded={openFaq === i}>
            <span>{item.q}</span>
            <span className="shrink-0 w-[22px] h-[22px] flex items-center justify-center transition-transform duration-300 text-[#dba34b] group-data-[open=true]:rotate-45" aria-hidden="true">+</span>
          </button>
          <div className="grid [grid-template-rows:0fr] transition-[grid-template-rows] duration-300 ease-in-out group-data-[open=true]:[grid-template-rows:1fr]"><div className="overflow-hidden"><p className="[margin:0_2px_22px] text-[16px] leading-[1.7] opacity-80 max-w-[720px]">{item.a}</p></div></div>
        </div>)}
      </div>
    </section>
  </main>
  <footer className={`${SHELL} border-t border-[rgba(247,243,234,.16)] pt-[51px] bg-[#192e4e] text-[#f7f3ea]`} id="contact">
    <div className="grid [grid-template-columns:2fr_1fr_1fr_1.3fr] gap-[35px] pb-[45px] max-[1100px]:gap-[24px] max-[800px]:[grid-template-columns:1.5fr_1fr_1fr] max-[520px]:[grid-template-columns:1fr_1fr] max-[520px]:gap-[33px]">
      <div className="max-[520px]:col-span-full">
        <a className="inline-flex items-center gap-[10px] bg-white rounded-[8px] [padding:10px_14px] w-fit" href="/"><img src="/images/logo.png" alt="Xtragenius — multiplying intelligence" className="h-[34px] w-auto block max-[800px]:h-[28px]" /></a>
        <p className="text-[12px] text-[#7d877d] mt-[21px] max-[520px]:mt-[15px]">Extra potential. Extraordinary possibilities.</p>
        <span className="text-[12px] text-[#91968c] leading-[1.9] block mt-[20px] max-[520px]:mt-[13px]">Chennai, Tamil Nadu, India<br />A nationwide network. A shared purpose.</span>
        <div className="flex gap-[10px] mt-[18px]" aria-label="Xtragenius on social media">
          <a className="w-[36px] h-[36px] rounded-full border border-[rgba(247,243,234,.16)] flex items-center justify-center transition-[border-color,color] duration-200 hover:border-[#dba34b] hover:text-[#dba34b]" href="https://www.instagram.com/xtragenius_abacus/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
          <a className="w-[36px] h-[36px] rounded-full border border-[rgba(247,243,234,.16)] flex items-center justify-center transition-[border-color,color] duration-200 hover:border-[#dba34b] hover:text-[#dba34b]" href="https://www.facebook.com/learning.xtragenius/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 9h3V5h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1Z"/></svg></a>
          <a className="w-[36px] h-[36px] rounded-full border border-[rgba(247,243,234,.16)] flex items-center justify-center transition-[border-color,color] duration-200 hover:border-[#dba34b] hover:text-[#dba34b]" href="https://in.linkedin.com/company/learning-xtragenius" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8.5" r="1" fill="currentColor" stroke="none"/><path d="M8 11v6M12 11v6M12 13.5c0-1.4 1-2.5 2.5-2.5S17 12.1 17 13.5V17"/></svg></a>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[12px]">
        <h4 className="font-[550] text-[12px] [margin:0_0_9px]">Explore</h4>
        <a className="text-[12px] text-[#818a7e] p-0 hover:text-[#f7f3ea]" href="#approach">Our approach</a>
        <a className="text-[12px] text-[#818a7e] p-0 hover:text-[#f7f3ea]" href="#programmes">Our programmes</a>
        <a className="text-[12px] text-[#818a7e] p-0 hover:text-[#f7f3ea]" href="#legacy">Our legacy</a>
        <button className="text-[12px] text-[#818a7e] p-0 hover:text-[#f7f3ea]" data-contact="competition">Competitions</button>
      </div>
      <div className="flex flex-col items-start gap-[12px]">
        <h4 className="font-[550] text-[12px] [margin:0_0_9px]">Grow with us</h4>
        <a className="text-[12px] text-[#818a7e] p-0 hover:text-[#f7f3ea]" href="#partners">Become a partner</a>
        <button className="text-[12px] text-[#818a7e] p-0 hover:text-[#f7f3ea]" data-contact="our centres">Find a centre</button>
        <button className="text-[12px] text-[#818a7e] p-0 hover:text-[#f7f3ea]" data-contact="educator enquiry">Educator enquiries</button>
        <button className="text-[12px] text-[#818a7e] p-0 hover:text-[#f7f3ea]" data-contact="consultation">Contact us ↗</button>
      </div>
      <div className="flex items-center gap-[18px] self-start max-[520px]:col-span-full max-[520px]:pt-[5px]">
        <span className="h-[36px] w-[36px] text-[32px] text-[#8a907d] border border-[#a3a791] outline outline-1 outline-[#a3a791] outline-offset-[3px] rounded-full flex items-center justify-center">✧</span>
        <span className="text-[10px] tracking-[.8px] leading-[2.2] text-[#798374]">25+ YEARS OF TRUST<br />ISO 9001:2015 CERTIFIED<br />150+ CENTRES ACROSS INDIA</span>
      </div>
    </div>
    <div className="border-t border-[rgba(247,243,234,.16)] py-[22px] flex items-center justify-between gap-[20px] text-[11px] text-[#90968b] max-[800px]:[&>span:nth-child(2)]:hidden max-[520px]:flex-wrap max-[520px]:[row-gap:16px] max-[520px]:[&>span]:w-full max-[520px]:[&>span]:text-[12px] max-[520px]:[&_a]:text-[12px] max-[520px]:[&_button]:text-[12px]">
      <span>© <span>{new Date().getFullYear()}</span> Xtragenius Learning Systems.</span>
      <span>Designed for a lifetime of learning.</span>
      <button className="text-[11px] border-0 p-0 inline-flex items-center gap-[18px] font-[550] leading-[1.5] transition-colors duration-200 hover:text-[#b78338]" id="privacy-button">Privacy notice ↗</button>
      <a href="#">Back to top ↑</a>
    </div>
  </footer>
  <DetailDialog view={view} setView={setView} onClose={() => setView(null)} />


</div>;
}
