'use client';

import { useEffect, useRef, useState } from 'react';
import { courses, banners, skillDetails } from '../lib/content';

export function CourseGrid({ filter }) {
  return <div className="course-grid" id="course-grid">
    {courses.filter(c => filter === 'all' || c.category === filter).map(c => <button className="course-card" key={c.id} data-course={c.id} aria-label={`Explore ${c.title}`}>
      <div className="course-image">
        {c.image ? <img src={c.image} alt={c.alt} loading="lazy" /> : <div className={`course-art ${c.art}`} aria-hidden="true"><span>{c.symbol}</span></div>}
        <span className="course-badge">{c.badge}</span>
      </div>
      <div className="course-content">
        <div className="course-meta"><span>{c.age.toUpperCase()}</span><span>{c.provider.includes('Coming') ? 'COMING SOON' : 'GUIDED LEARNING'}</span></div>
        <h3>{c.title}</h3><p>{c.description}</p>
        <div className="skill-pills">{c.skills.slice(0,3).map(s => <span key={s}>{s}</span>)}</div>
        <div className="course-bottom"><span>Explore the programme</span><span>↗</span></div>
      </div>
    </button>)}
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
  return <section className="announcement-section section-shell" aria-roledescription="carousel" aria-label="Xtragenius announcements" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocus={() => setFocused(true)} onBlur={event => { if(!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
    <div className="announcement-card" id="banner-content" aria-live={disabled ? 'polite' : 'off'}>
      <div key={index} className="banner-copy"><span className="eyebrow">{b.eyebrow}</span><h3>{b.title.split('<br>').map((line,i) => <span key={line}>{i > 0 && <br />}{line}</span>)}</h3><p>{b.description}</p>
        {b.href ? <a className="text-link" href={b.href}>{b.action}<span>↗</span></a> : <button className="text-link" id="banner-action" data-contact={b.topic}>{b.action}<span>↗</span></button>}
      </div><span className="banner-art" aria-hidden="true">{b.symbol}</span>
    </div>
    <div className="banner-controls"><span id="banner-number">0{index+1} / 04</span><div className="banner-dots" role="group" aria-label="Choose announcement">{banners.map((_,i) => <button key={i} className={index===i ? 'active' : ''} onClick={() => setIndex(i)} aria-label={`Announcement ${i+1}`} aria-pressed={index===i} />)}</div>
      <div className="banner-arrows"><button id="banner-pause" onClick={() => setPaused(p=>!p)} aria-label={disabled ? 'Resume announcement rotation' : 'Pause announcement rotation'} disabled={!motion}>{disabled ? '▷' : 'Ⅱ'}</button><button id="banner-prev" aria-label="Previous announcement" onClick={() => setIndex(i=>(i+banners.length-1)%banners.length)}>←</button><button id="banner-next" aria-label="Next announcement" onClick={() => setIndex(i=>(i+1)%banners.length)}>→</button></div>
    </div>
  </section>;
}

function CourseDetails({ id }) {
  const c = courses.find(course=>course.id===id);
  if(!c) return null;
  return <><span className="eyebrow">A STRONGER FOUNDATION FOR LEARNING</span><h2 id="dialog-title">{c.title}</h2><div className="detail-meta"><span>AGES {c.age.toUpperCase()}</span><span>{c.provider.toUpperCase()}</span></div><p style={{marginTop:22}}>{c.description}</p><h3>The abilities we build</h3><div className="skill-pills">{c.skills.map(s=><span key={s}>{s}</span>)}</div><div className="instructor-box"><strong>Your educator matters.</strong>{c.credential}</div><h3>A look inside the learning journey</h3><ol>{c.curriculum.map(step=><li key={step}>{step}</li>)}</ol><p className="form-note">An indicative learning pathway. Levels, format, schedule and fees are confirmed with your learning adviser.</p><button className="button" style={{marginTop:23}} data-contact={c.title}>{c.provider.includes('Coming') ? 'Register your interest' : 'Explore enrolment'}<span>↗</span></button></>;
}

function SkillDetails({ index }) {
  const [name,title,body] = skillDetails[index];
  return <><span className="eyebrow">THE FOUR FOUNDATIONS / {name.toUpperCase()}</span><h2 id="dialog-title">{title}</h2><p>{body}</p><h3>Explore this ability through</h3>{courses.filter(c=>c.skills.includes(name)).map(c=><button key={c.id} className="text-link" style={{display:'flex',margin:'18px 0'}} data-course={c.id}>{c.title}<span>↗</span></button>)}</>;
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
  if(download) return <div className="form-success"><span className="form-success-icon">✓</span><h2 id="dialog-title" tabIndex={-1} ref={el=>el?.focus()}>Your enquiry is ready.</h2><p>Download your summary and keep it for your conversation with Xtragenius. Your details have not been sent or stored.</p><a className="button download-link" href={download} download="xtragenius-enquiry.txt">Download enquiry summary<span>↓</span></a><p className="form-note">This preview is awaiting the official contact details and live enquiry integration.</p></div>;
  return <><span className="eyebrow">{partner ? 'GROW WITH AN ESTABLISHED LEARNING NETWORK' : 'EVERY EXTRAORDINARY JOURNEY STARTS SOMEWHERE'}</span><h2 id="dialog-title">{partner ? 'Let’s shape what’s next.' : 'Find their next discovery.'}</h2><p>{partner ? 'Tell us a little about your teaching experience or institute and your interest in the Xtragenius network.' : 'Share a few details to prepare a conversation about the right next step for your child.'}</p><form className="enquiry-form" onSubmit={submit}><label>Your name<input name="name" autoComplete="name" required maxLength={100} placeholder="Full name" /></label><label>Email address<input type="email" name="email" autoComplete="email" required maxLength={200} placeholder="you@example.com" /></label><label>{partner ? 'Institute / teaching specialism' : 'Child’s age'}{partner ? <input name="institute" required maxLength={150} placeholder="Institute or area of expertise" /> : <select name="age" required defaultValue=""><option value="">Select age group</option><option>4–6 years</option><option>7–9 years</option><option>10–12 years</option><option>13–14 years</option></select>}</label><label>Interested in<select name="interest" required defaultValue={topic}>{[topic,...courses.map(c=>c.title),'programme guidance','partnership','competition'].filter((s,i,a)=>a.indexOf(s)===i).map(s=><option key={s}>{s}</option>)}</select></label><p className="form-note full">Website preview: this form creates a downloadable enquiry summary. It does not send your details to Xtragenius. Live contact and registration will be connected before launch.</p><button className="button full" type="submit">Prepare my enquiry<span>↗</span></button></form></>;
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
  return <dialog ref={dialogRef} id="detail-dialog" className="detail-dialog" aria-labelledby="dialog-title" onCancel={close} onClick={backdrop} onClose={close}><button className="dialog-close" aria-label="Close dialog" onClick={close}>×</button><div id="dialog-content">
    {view?.type==='course' && <CourseDetails id={view.id} />}
    {view?.type==='skill' && <SkillDetails index={view.index} />}
    {view?.type==='contact' && <EnquiryForm key={view.topic} topic={view.topic} />}
    {view?.type==='privacy' && <><span className="eyebrow">WEBSITE PREVIEW</span><h2 id="dialog-title">Your privacy matters.</h2><p>This preview does not use analytics, advertising cookies or an enquiry database. Form details remain in your browser memory until you close the form and are only included in a file if you choose to download one.</p><p>Fonts and illustrative photographs are served locally. Your browser does not contact font or photography providers to display this page.</p><p>The final website’s privacy policy, official contact information and consent process will be published before live enrolment opens.</p></>}
  </div></dialog>;
}
