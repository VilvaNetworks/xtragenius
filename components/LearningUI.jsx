'use client';

import { useEffect, useRef, useState } from 'react';
import { courses, banners, skillDetails, testimonials } from '../lib/content';

const EYEBROW = "text-[10px] tracking-[1.65px] font-[550] block";
const TEXT_LINK = "inline-flex items-center gap-[18px] text-[11px] font-[550] pb-[6px] border-b border-[#aab1b6] leading-[1.5] transition-colors duration-200 hover:text-[#b78338]";
const BUTTON = "inline-flex items-center justify-between gap-[30px] bg-[#192e4e] text-white text-[12px] font-medium py-[19px] px-[24px] border border-[#192e4e] rounded-[4px] transition-[background,transform,box-shadow] duration-[250ms] hover:bg-[#2a456d] hover:-translate-y-[2px] hover:shadow-[0_7px_16px_#172d4c13]";

export function CourseGrid({ filter }) {
  return <div className="grid grid-cols-3 gap-x-[24px] gap-y-[30px] min-h-[300px] max-[800px]:grid-cols-2 max-[800px]:gap-x-[16px] max-[800px]:gap-y-[22px] max-[520px]:grid-cols-1 max-[520px]:gap-[25px]" id="course-grid">
    {courses.filter(c => filter === 'all' || c.category === filter).map(c => {
      const artBoxClass = c.art === 'chess' ? "h-full flex justify-center items-center bg-[#dedbcc]"
        : c.art === 'robotics' ? "h-full flex justify-center items-center bg-[#dce5e2]"
        : c.art === 'entrepreneur' ? "h-full flex justify-center items-center bg-[#e9dfcd]"
        : "h-full flex justify-center items-center bg-[#e1e4d9]";
      const artSpanClass = c.art === 'chess' ? "[font-family:Georgia,serif] text-[110px] text-[#536757] [text-shadow:5px_10px_0_#bbbfab] [transform:rotate(-10deg)]"
        : c.art === 'robotics' ? "[font-family:monospace] text-[100px] text-[#334f61] [text-shadow:5px_10px_0_#bbbfab] [transform:rotate(-10deg)]"
        : "[font-family:Georgia,serif] text-[110px] text-[#334f61] [text-shadow:5px_10px_0_#bbbfab] [transform:rotate(-10deg)]";
      return <button className="course-card min-w-0 bg-transparent border border-[rgba(247,243,234,.16)] cursor-pointer transition-[transform,box-shadow] duration-300 text-left p-0 flex flex-col hover:-translate-y-[6px] hover:shadow-[0_12px_30px_#152d500a] group" key={c.id} data-course={c.id} aria-label={`Explore ${c.title}`}>
        <div className="h-[213px] relative overflow-hidden bg-[#d8dbcd] max-[1100px]:h-[190px] max-[800px]:h-[190px] max-[520px]:h-[235px]">
          {c.image ? <img className="w-full h-full object-cover transition-transform duration-700 [filter:saturate(.65)] group-hover:scale-105" src={c.image} alt={c.alt} loading="lazy" /> : <div className={artBoxClass} aria-hidden="true"><span className={artSpanClass}>{c.symbol}</span></div>}
          <div className="absolute inset-0 [background:linear-gradient(0deg,#16283330,transparent_50%)]"></div>
          <span className="absolute top-[14px] left-[14px] z-[1] bg-[#f7f7f0e8] text-[#192e4e] py-[7px] px-[10px] text-[7px] tracking-[1px] max-[520px]:text-[8px] max-[520px]:p-[8px_11px]">{c.badge}</span>
        </div>
        <div className="min-w-0 [padding:23px_22px_0] flex-1 flex flex-col max-[1100px]:p-[20px_18px_0] max-[800px]:p-[20px_18px_0] max-[520px]:p-[24px_22px_0]">
          <div className="flex justify-between text-[8px] tracking-[1px] text-[#8b9188] mb-[12px] max-[520px]:text-[9px]"><span>{c.age.toUpperCase()}</span><span>{c.provider.includes('Coming') ? 'COMING SOON' : 'GUIDED LEARNING'}</span></div>
          <h3 className="text-[22px] tracking-[-.8px] font-medium [font-family:var(--display)] max-[1100px]:text-[20px] max-[800px]:text-[20px] max-[520px]:text-[25px]">{c.title}</h3>
          <p className="text-[11px] leading-[1.7] text-[#808681] mt-[10px] min-h-[38px] max-[520px]:text-[12px] max-[520px]:min-h-0">{c.description}</p>
          <div className="flex gap-[6px] mt-[21px] flex-wrap">{c.skills.slice(0,3).map(s => <span key={s} className="text-[8px] py-[5px] px-[8px] border rounded-[2px] bg-white border-white text-[#192e4e] max-[520px]:text-[9px]">{s}</span>)}</div>
          <div className="border-t border-[rgba(247,243,234,.16)] flex items-center justify-between text-[10px] mt-[24px] py-[17px] max-[520px]:text-[11px] max-[520px]:py-[19px]"><span>Explore the programme</span><span className="text-[17px]">↗</span></div>
        </div>
      </button>;
    })}
  </div>;
}

export function Announcements({ motion }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const disabled = paused || !motion;
  useEffect(() => {
    if(disabled || hovered || focused) return;
    const timer = setInterval(() => { if(!document.hidden && !document.querySelector('dialog[open]')) setIndex(i => (i+1)%banners.length); },7000);
    return () => clearInterval(timer);
  }, [disabled,hovered,focused]);
  const b = banners[index];
  return <section className="pb-[10px] px-[5.5%] max-[800px]:px-[6%] min-[1600px]:[padding-left:max(5.5%,calc((100vw_-_1420px)/2))] min-[1600px]:[padding-right:max(5.5%,calc((100vw_-_1420px)/2))]" aria-roledescription="carousel" aria-label="Xtragenius announcements" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocus={() => setFocused(true)} onBlur={event => { if(!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
    <div className="min-h-[258px] bg-[#e9edde] relative [padding:42px_48px] overflow-hidden flex items-center justify-between gap-[30px] max-[800px]:p-[32px] max-[800px]:min-h-[240px] max-[520px]:p-[28px_23px] max-[520px]:min-h-[280px] max-[520px]:items-start" id="banner-content" aria-live={disabled ? 'polite' : 'off'}>
      <div key={index} className="z-[2] max-w-[620px]" style={motion ? {animation:'banner-in .6s both'} : undefined}>
        <span className={`${EYEBROW} text-[#75816e] mb-[17px] max-[800px]:text-[7px] max-[800px]:tracking-[1px]`}>{b.eyebrow}</span>
        <h3 className="text-[32px] leading-[1.25] [font-family:var(--display)] tracking-[-1.2px] font-medium max-[800px]:text-[27px] max-[520px]:text-[26px] max-[520px]:max-w-[260px]">{b.title.split('<br>').map((line,i) => <span key={line}>{i > 0 && <br />}{line}</span>)}</h3>
        <p className="text-[12px] text-[#7a8376] [margin:13px_0_23px] max-[520px]:text-[11px] max-[520px]:max-w-[220px]">{b.description}</p>
        {b.href ? <a className={TEXT_LINK} href={b.href}>{b.action}<span className="text-[16px]">↗</span></a> : <button className={TEXT_LINK} id="banner-action" data-contact={b.topic}>{b.action}<span className="text-[16px]">↗</span></button>}
      </div>
      <span className="text-[142px] text-[#b1ba92] leading-[1] mr-[55px] [transform:rotate(-15deg)] [font-family:Georgia,serif] max-[800px]:text-[90px] max-[800px]:mr-0 max-[520px]:absolute max-[520px]:right-[15px] max-[520px]:bottom-[22px] max-[520px]:text-[65px] max-[520px]:opacity-60" aria-hidden="true" style={motion ? {animation:'banner-in .8s both'} : undefined}>{b.symbol}</span>
    </div>
    <div className="flex items-center justify-between py-[18px] text-[#7d857c] text-[9px] tracking-[1px] max-[520px]:pt-[12px]">
      <span id="banner-number">0{index+1} / 04</span>
      <div className="flex gap-[6px]" role="group" aria-label="Choose announcement">{banners.map((_,i) => <button key={i} className={`h-[20px] w-[23px] relative before:content-[''] before:w-[18px] before:h-[2px] before:absolute before:left-0 before:top-[9px] ${index===i ? 'before:bg-[#192e4e]' : 'before:bg-[#d2d6cc]'}`} onClick={() => setIndex(i)} aria-label={`Announcement ${i+1}`} aria-pressed={index===i} />)}</div>
      <div className="flex gap-[12px] items-center">
        <button className="text-[11px] text-[#7b8177]" id="banner-pause" onClick={() => setPaused(p=>!p)} aria-label={disabled ? 'Resume announcement rotation' : 'Pause announcement rotation'} disabled={!motion}>{disabled ? '▷' : 'Ⅱ'}</button>
        <button className="text-[16px] py-[4px] px-[8px]" id="banner-prev" aria-label="Previous announcement" onClick={() => setIndex(i=>(i+banners.length-1)%banners.length)}>←</button>
        <button className="text-[16px] py-[4px] px-[8px]" id="banner-next" aria-label="Next announcement" onClick={() => setIndex(i=>(i+1)%banners.length)}>→</button>
      </div>
    </div>
  </section>;
}

export function Testimonials({ motion }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const disabled = paused || !motion;
  const n = testimonials.length;
  useEffect(() => {
    if (disabled || hovered || focused) return;
    const timer = setInterval(() => { if (!document.hidden) setIndex(i => (i + 1) % n); }, 6000);
    return () => clearInterval(timer);
  }, [disabled, hovered, focused, n]);
  // Desktop shows a sliding 3-up window starting at `index`; mobile shows only the first of the three.
  const visible = [0, 1, 2].map(offset => ({ ...testimonials[(index + offset) % n], slot: offset }));
  return <div aria-roledescription="carousel" aria-label="What families and partners say" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocus={() => setFocused(true)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
    <div className="border-t border-b border-[#dcded6] [padding:48px_0]" aria-live={disabled ? 'polite' : 'off'}>
      <div key={index} className="grid grid-cols-3 gap-[35px] max-[800px]:grid-cols-1" style={motion ? { animation: 'banner-in .6s both' } : undefined}>
        {visible.map(t => <div key={t.name} className={`text-center ${t.slot > 0 ? 'max-[800px]:hidden' : ''}`}>
          <span className="text-[36px] block text-[#a08b60] leading-[1] mb-[14px]">“</span>
          <p className="text-[14px] leading-[1.7] text-[#3f453f] max-w-[310px] [margin:0_auto]">{t.quote}</p>
          <div className="flex items-center justify-center gap-[12px] mt-[22px]">
            <span className="w-[38px] h-[38px] rounded-full flex items-center justify-center text-[11px] font-semibold text-white shrink-0" style={{ background: t.bg }} aria-hidden="true">{t.initials}</span>
            <div className="text-left">
              <strong className="block text-[12px] font-semibold text-[#192e4e]">{t.name}</strong>
              <span className="block text-[10px] text-[#858b82] mt-[2px]">{t.role}</span>
            </div>
          </div>
        </div>)}
      </div>
    </div>
    <div className="flex items-center justify-center gap-[12px] pt-[22px]">
      <div className="flex gap-[6px]" role="group" aria-label="Choose testimonial">{testimonials.map((_, i) => <button key={i} className={`h-[20px] w-[23px] relative before:content-[''] before:w-[18px] before:h-[2px] before:absolute before:left-0 before:top-[9px] ${index === i ? 'before:bg-[#192e4e]' : 'before:bg-[#d2d6cc]'}`} onClick={() => setIndex(i)} aria-label={`Testimonial ${i + 1}`} aria-pressed={index === i} />)}</div>
      <button className="text-[11px] text-[#7b8177]" onClick={() => setPaused(p => !p)} aria-label={disabled ? 'Resume testimonial rotation' : 'Pause testimonial rotation'} disabled={!motion}>{disabled ? '▷' : 'Ⅱ'}</button>
    </div>
  </div>;
}

function CourseDetails({ id }) {
  const c = courses.find(course=>course.id===id);
  if(!c) return null;
  return <><span className={`${EYEBROW} text-[#8c947f]`}>A STRONGER FOUNDATION FOR LEARNING</span><h2 id="dialog-title" className="text-[38px] [margin:20px_0] max-[520px]:text-[29px] max-[520px]:tracking-[-1px]">{c.title}</h2><div className="flex gap-[18px] pb-[20px] border-b border-[#dcded6] text-[10px] text-[#7d8875] max-[520px]:gap-[10px] max-[520px]:text-[8px]"><span>AGES {c.age.toUpperCase()}</span><span>{c.provider.toUpperCase()}</span></div><p className="text-[13px] leading-[1.9] text-[#788174] mb-[17px]" style={{marginTop:22}}>{c.description}</p><h3 className="text-[17px] [margin:28px_0_12px] font-[550]">The abilities we build</h3><div className="flex gap-[6px] flex-wrap mb-[25px]">{c.skills.map(s=><span key={s} className="text-[10px] py-[5px] px-[8px] border border-[#dbe0d5] rounded-[2px] text-[#637466]">{s}</span>)}</div><div className="p-[20px] bg-[#eeefe5] border-l-2 border-[#dba34b] text-[12px] leading-[1.9]"><strong className="block mb-[3px]">Your educator matters.</strong>{c.credential}</div><h3 className="text-[17px] [margin:28px_0_12px] font-[550]">A look inside the learning journey</h3><ol className="pl-[22px] [margin:14px_0_30px]">{c.curriculum.map(step=><li key={step} className="text-[12px] leading-[1.8] mb-[13px] text-[#68756b] pl-[8px]">{step}</li>)}</ol><p className="text-[10px] mt-0">An indicative learning pathway. Levels, format, schedule and fees are confirmed with your learning adviser.</p><button className={BUTTON} style={{marginTop:23}} data-contact={c.title}>{c.provider.includes('Coming') ? 'Register your interest' : 'Explore enrolment'}<span className="text-[17px] leading-[1]">↗</span></button></>;
}

function SkillDetails({ index }) {
  const [name,title,body] = skillDetails[index];
  return <><span className={EYEBROW}>THE FOUR FOUNDATIONS / {name.toUpperCase()}</span><h2 id="dialog-title" className="text-[38px] [margin:20px_0] max-[520px]:text-[29px] max-[520px]:tracking-[-1px]">{title}</h2><p className="text-[13px] leading-[1.9] text-[#788174] mb-[17px]">{body}</p><h3 className="text-[17px] [margin:28px_0_12px] font-[550]">Explore this ability through</h3>{courses.filter(c=>c.skills.includes(name)).map(c=><button key={c.id} className={TEXT_LINK} style={{display:'flex',margin:'18px 0'}} data-course={c.id}>{c.title}<span className="text-[16px]">↗</span></button>)}</>;
}

function EnquiryForm({ topic }) {
  const [download, setDownload] = useState(null);
  const partner = /partner|educator/.test(topic);
  useEffect(() => () => { if(download) URL.revokeObjectURL(download); },[download]);
  function submit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const summary = `XTRAGENIUS LEARNING SYSTEMS — ENQUIRY SUMMARY\n\n${Object.entries(data).map(([key,value])=>`${key.charAt(0).toUpperCase()+key.slice(1)}: ${value}`).join('\n')}\n\nPrepared ${new Date().toLocaleDateString('en-IN')}.\nThis is a local preview summary; no enquiry has been submitted.\n`;
    setDownload(URL.createObjectURL(new Blob([summary],{type:'text/plain'})));
  }
  if(download) return <div className="py-[25px]"><span className="text-[45px] text-[#8b9c6d]">✓</span><h2 id="dialog-title" tabIndex={-1} ref={el=>el?.focus()} className="text-[38px] [margin:20px_0] max-[520px]:text-[29px] max-[520px]:tracking-[-1px]">Your enquiry is ready.</h2><p className="text-[13px] leading-[1.9] text-[#788174] mb-[17px]">Download your summary and keep it for your conversation with Xtragenius. Your details have not been sent or stored.</p><a className={`${BUTTON} inline-block [margin:20px_0]`} href={download} download="xtragenius-enquiry.txt">Download enquiry summary<span className="text-[17px] leading-[1]">↓</span></a><p className="text-[10px] mt-0">This preview is awaiting the official contact details and live enquiry integration.</p></div>;
  return <><span className={EYEBROW}>{partner ? 'GROW WITH AN ESTABLISHED LEARNING NETWORK' : 'EVERY EXTRAORDINARY JOURNEY STARTS SOMEWHERE'}</span><h2 id="dialog-title" className="text-[38px] [margin:20px_0] max-[520px]:text-[29px] max-[520px]:tracking-[-1px]">{partner ? 'Let’s shape what’s next.' : 'Find their next discovery.'}</h2><p className="text-[13px] leading-[1.9] text-[#788174] mb-[17px]">{partner ? 'Tell us a little about your teaching experience or institute and your interest in the Xtragenius network.' : 'Share a few details to prepare a conversation about the right next step for your child.'}</p><form className="grid grid-cols-2 gap-[20px] mt-[25px] max-[520px]:grid-cols-1" onSubmit={submit}><label className="text-[11px] flex flex-col gap-[9px]">Your name<input className="w-full p-[13px] border border-[#d5dacd] rounded-[2px] bg-[#fbfbf6] text-[#192e4e] min-h-[44px]" name="name" autoComplete="name" required maxLength={100} placeholder="Full name" /></label><label className="text-[11px] flex flex-col gap-[9px]">Email address<input className="w-full p-[13px] border border-[#d5dacd] rounded-[2px] bg-[#fbfbf6] text-[#192e4e] min-h-[44px]" type="email" name="email" autoComplete="email" required maxLength={200} placeholder="you@example.com" /></label><label className="text-[11px] flex flex-col gap-[9px]">{partner ? 'Institute / teaching specialism' : 'Child’s age'}{partner ? <input className="w-full p-[13px] border border-[#d5dacd] rounded-[2px] bg-[#fbfbf6] text-[#192e4e] min-h-[44px]" name="institute" required maxLength={150} placeholder="Institute or area of expertise" /> : <select className="w-full p-[13px] border border-[#d5dacd] rounded-[2px] bg-[#fbfbf6] text-[#192e4e] min-h-[44px]" name="age" required defaultValue=""><option value="">Select age group</option><option>4–6 years</option><option>7–9 years</option><option>10–12 years</option><option>13–14 years</option></select>}</label><label className="text-[11px] flex flex-col gap-[9px]">Interested in<select className="w-full p-[13px] border border-[#d5dacd] rounded-[2px] bg-[#fbfbf6] text-[#192e4e] min-h-[44px]" name="interest" required defaultValue={topic}>{[topic,...courses.map(c=>c.title),'programme guidance','partnership','competition'].filter((s,i,a)=>a.indexOf(s)===i).map(s=><option key={s}>{s}</option>)}</select></label><p className="text-[10px] mt-0 col-span-full">Website preview: this form creates a downloadable enquiry summary. It does not send your details to Xtragenius. Live contact and registration will be connected before launch.</p><button className={`${BUTTON} col-span-full`} type="submit">Prepare my enquiry<span className="text-[17px] leading-[1]">↗</span></button></form></>;
}

export function DetailDialog({ view, onClose }) {
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if(view && !dialog.open) { triggerRef.current = document.activeElement; dialog.showModal(); }
    if(!view && dialog.open) dialog.close();
    if(view) { dialog.scrollTop = 0; dialog.querySelector('.dialog-close')?.focus(); }
  },[view]);
  function close() { onClose(); triggerRef.current?.focus(); }
  function backdrop(event) {
    if(event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if(event.clientX<rect.left || event.clientX>rect.right || event.clientY<rect.top || event.clientY>rect.bottom) close();
  }
  return <dialog ref={dialogRef} id="detail-dialog" className="max-w-[760px] w-[calc(100%-32px)] max-h-[88dvh] overflow-auto border border-[#d7dace] bg-[#f7f7f0] text-[#192e4e] p-[48px] rounded-[4px] shadow-[0_35px_100px_#07122455] m-auto max-[520px]:p-[30px_23px] [&::backdrop]:bg-[#101f36aa] [&::backdrop]:backdrop-blur-[5px]" aria-labelledby="dialog-title" onCancel={close} onClick={backdrop} onClose={close}><button className="dialog-close sticky float-right top-[-24px] right-0 w-[32px] h-[32px] border border-[#dcded6] rounded-full text-[23px] bg-[#f7f7f0] z-[2] max-[520px]:top-[-15px]" aria-label="Close dialog" onClick={close}>×</button><div id="dialog-content">
    {view?.type==='course' && <CourseDetails id={view.id} />}
    {view?.type==='skill' && <SkillDetails index={view.index} />}
    {view?.type==='contact' && <EnquiryForm key={view.topic} topic={view.topic} />}
    {view?.type==='privacy' && <><span className={EYEBROW}>WEBSITE PREVIEW</span><h2 id="dialog-title" className="text-[38px] [margin:20px_0] max-[520px]:text-[29px] max-[520px]:tracking-[-1px]">Your privacy matters.</h2><p className="text-[13px] leading-[1.9] text-[#788174] mb-[17px]">This preview does not use analytics, advertising cookies or an enquiry database. Form details remain in your browser memory until you close the form and are only included in a file if you choose to download one.</p><p className="text-[13px] leading-[1.9] text-[#788174] mb-[17px]">Fonts and illustrative photographs are served locally. Your browser does not contact font or photography providers to display this page.</p><p className="text-[13px] leading-[1.9] text-[#788174] mb-[17px]">The final website’s privacy policy, official contact information and consent process will be published before live enrolment opens.</p></>}
  </div></dialog>;
}
