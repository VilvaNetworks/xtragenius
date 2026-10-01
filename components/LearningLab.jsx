'use client';

import { useEffect, useId, useRef, useState } from 'react';

const activities = [
  { title: 'A little focus. A new possibility.', label: 'CONCENTRATION', instruction: 'Move a bead. See a number take shape.' },
  { title: 'From seeing to solving.', label: 'SPEED', instruction: 'Follow the beads. Find the answer.' },
  { title: 'See it. Remember it. Recall it.', label: 'MEMORY', instruction: 'Take a mental picture of the number.' },
  { title: 'One number. A different perspective.', label: 'VISUALIZATION', instruction: 'See how tens and ones make a whole.' },
];
const challenges = [[23,14], [12,26], [34,15], [21,32]];

function Bead({ x, y, active, upper, label, onSelect, gradient, disabled }) {
  return <g className={`abacus-bead ${active ? 'engaged' : ''}`} transform={`translate(${x} ${y})`} role={disabled ? undefined : 'button'} tabIndex={disabled ? undefined : 0} aria-label={disabled ? undefined : label} aria-pressed={disabled ? undefined : active} onClick={disabled ? undefined : onSelect} onKeyDown={disabled ? undefined : event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onSelect(); } }}>
    <title>{label}</title>
    <ellipse cx="0" cy="8" rx="25" ry="8" fill="#10253b" opacity=".12" />
    <path d="M-25 0 Q-22-8-6-11 Q0-12 6-11 Q22-8 25 0 Q22 9 6 11 Q0 12-6 11 Q-22 9-25 0Z" fill={`url(#${gradient})`} stroke={active ? '#b7863f' : '#142f4e'} strokeWidth=".7" />
    <path d="M-19-3 Q0-13 19-3" fill="none" stroke={active ? '#ffe6ae' : '#8ca4bc'} strokeWidth="1" opacity=".7" />
    <path d="M-20 4 Q0 12 20 4" fill="none" stroke={active ? '#875722' : '#0a2036'} strokeWidth="1" opacity=".45" />
    <ellipse cy="-8.5" rx="3" ry="1.3" fill={upper ? '#dbcda6' : '#a1b0b6'} opacity=".8" />
  </g>;
}

function Abacus({ value, setValue, hidden, disabled, visualizing }) {
  const id = useId().replaceAll(':','');
  const columns = [0, Math.floor(value / 10), value % 10];
  const places = ['hundreds','tens','ones'];
  function select(column, digit) {
    if(column === 0) return;
    setValue(column === 1 ? digit * 10 + value % 10 : Math.floor(value / 10) * 10 + digit);
  }
  return <svg className={`abacus-illustration ${hidden ? 'is-hidden' : ''} ${visualizing ? 'is-visualizing' : ''}`} viewBox="0 0 560 410" aria-label={hidden ? 'Abacus hidden for the memory challenge' : `Interactive abacus showing ${value}`}>
    <defs>
      <linearGradient id={`${id}-frame`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#42617c"/><stop offset=".35" stopColor="#203c58"/><stop offset="1" stopColor="#10273e"/></linearGradient>
      <linearGradient id={`${id}-bead`} x1="0" y1="0" x2=".3" y2="1"><stop stopColor="#69849e"/><stop offset=".28" stopColor="#3d5f7e"/><stop offset=".55" stopColor="#294764"/><stop offset="1" stopColor="#142f49"/></linearGradient>
      <linearGradient id={`${id}-gold`} x1="0" y1="0" x2=".4" y2="1"><stop stopColor="#ffe4a2"/><stop offset=".3" stopColor="#e8ba68"/><stop offset=".7" stopColor="#c89647"/><stop offset="1" stopColor="#9c6c30"/></linearGradient>
      <linearGradient id={`${id}-rod`}><stop stopColor="#afb2a0"/><stop offset=".45" stopColor="#f6f0d9"/><stop offset="1" stopColor="#babaa4"/></linearGradient>
      <linearGradient id={`${id}-paper`} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#f3f2e8"/><stop offset="1" stopColor="#e5e5d8"/></linearGradient>
      <filter id={`${id}-shadow`} x="-30%" y="-20%" width="170%" height="180%"><feGaussianBlur stdDeviation="13"/></filter>
    </defs>
    <ellipse cx="291" cy="365" rx="174" ry="19" fill="#183048" opacity=".12" filter={`url(#${id}-shadow)`}/>
    <g className="abacus-body">
      <rect x="112" y="59" width="342" height="302" rx="19" fill="#0e243b" />
      <rect x="103" y="49" width="342" height="302" rx="17" fill={`url(#${id}-frame)`}/>
      <rect x="110" y="56" width="328" height="288" rx="12" fill="none" stroke="#90a1ad" strokeOpacity=".32"/>
      <rect x="123" y="72" width="302" height="253" rx="5" fill={`url(#${id}-paper)`}/>
      <path d="M126 75H422" stroke="#132c44" strokeOpacity=".3" strokeWidth="3"/>
      {[174,274,374].map((x,i) => <g key={x} className={`abacus-column column-${i}`}>
        <rect x={x-2.7} y="77" width="5.4" height="244" rx="2.7" fill={`url(#${id}-rod)`}/>
        <Bead x={x} y={columns[i]>=5 ? 133 : 95} active={columns[i]>=5} upper label={`Toggle five on ${places[i]} rod`} gradient={`${id}-${columns[i]>=5 ? 'gold' : 'bead'}`} disabled={disabled || i===0} onSelect={()=>select(i, columns[i]>=5 ? columns[i]-5 : columns[i]+5)}/>
        {[0,1,2,3].map(j => {
          const active = j < columns[i]%5;
          return <Bead key={j} x={x} y={active ? 177+j*27 : 224+j*27} active={active} label={`${j+1} unit bead on ${places[i]} rod`} gradient={`${id}-${active ? 'gold' : 'bead'}`} disabled={disabled || i===0} onSelect={()=>select(i,(columns[i]>=5?5:0)+(active?j:j+1))}/>;
        })}
      </g>)}
      <rect x="119" y="150" width="310" height="12" rx="2" fill="#203a52"/>
      <path d="M122 151H426" stroke="#8095a5" strokeOpacity=".55"/>
      {[174,274,374].map(x=><circle key={x} cx={x} cy="156" r="1.7" fill="#e2bd77"/>)}
      {[[115,61],[432,61],[115,338],[432,338]].map(([x,y])=><g key={`${x}-${y}`}><circle cx={x} cy={y} r="3" fill={`url(#${id}-gold)`}/><path d={`M${x-1.6} ${y}h3.2`} stroke="#876631" strokeWidth=".6"/></g>)}
      <text x="274" y="341" textAnchor="middle" className="abacus-engraving">X T R A G E N I U S</text>
    </g>
    <g className="abacus-place-labels" aria-hidden="true"><text x="174" y="385" textAnchor="middle">HUNDREDS</text><text x="274" y="385" textAnchor="middle">TENS</text><text x="374" y="385" textAnchor="middle">ONES</text></g>
  </svg>;
}

export default function LearningLab({ skill, motion }) {
  const [value,setValue] = useState(37);
  const [touched,setTouched] = useState(false);
  const [step,setStep] = useState(0);
  const [challenge,setChallenge] = useState(0);
  const [remembering,setRemembering] = useState(false);
  const [answer,setAnswer] = useState(null);
  const [visible,setVisible] = useState(true);
  const [pageVisible,setPageVisible] = useState(true);
  const root = useRef(null);
  const [a,b] = challenges[challenge];
  const displayed = skill===1 ? (step ? a+b : a) : value;
  const activity = activities[skill];
  const tens = Math.floor(displayed/10), ones = displayed%10;

  useEffect(()=>{
    const observer=new IntersectionObserver(entries=>setVisible(entries[0].isIntersecting),{threshold:.15});
    observer.observe(root.current);
    const onVisibility=()=>setPageVisible(!document.hidden);
    document.addEventListener('visibilitychange',onVisibility);
    return ()=>{observer.disconnect();document.removeEventListener('visibilitychange',onVisibility);};
  },[]);

  // A quiet demonstration runs until the visitor takes control. No timer is used for recall.
  // Cycles forward through a sequence of values (rather than flipping between two) so the
  // beads keep moving in one direction and never visibly "reset".
  useEffect(()=>{
    if(!motion || !visible || !pageVisible || touched || skill===2 || skill===3) return;
    const sequence=[12,23,37,48,56,29];
    let i=sequence.indexOf(37);
    const timer=setInterval(()=>{
      if(skill===0){ i=(i+1)%sequence.length; setValue(sequence[i]); }
      if(skill===1) setStep(s=>1-s);
    },4400);
    return ()=>clearInterval(timer);
  },[motion,visible,pageVisible,touched,skill]);

  function chooseValue(next) { setTouched(true);setValue(next); }
  function nextChallenge() {setTouched(true);setStep(0);setChallenge(c=>(c+1)%challenges.length);}
  const choices=[value, (value+11)%100, (value+24)%100].sort((x,y)=>x-y);
  const concealed=skill===2 && remembering && answer===null;

  return <div ref={root} className={`learning-lab mode-${skill} ${motion?'lab-animated':''}`} data-testid="learning-lab">
    <div className="lab-scene">
      <div className="lab-orbit orbit-one" aria-hidden="true"/><div className="lab-orbit orbit-two" aria-hidden="true"/>
      <div className="lab-coordinate coordinate-top" aria-hidden="true">+</div><div className="lab-coordinate coordinate-bottom" aria-hidden="true">+</div>
      <div className="lab-whisper">A SMALL DISCOVERY.<br/><span>A STRONGER MIND.</span></div>
      <div className="lab-number-ghost" aria-hidden="true">{concealed?'?':displayed}</div>
      <div className="lab-instrument"><Abacus value={displayed} setValue={chooseValue} hidden={concealed} disabled={skill===1 || skill===2 || skill===3} visualizing={skill===3}/></div>

      <div className={`number-note ${concealed?'concealed':''}`}>
        <span className="note-eyebrow">{skill===1?'A LITTLE MENTAL MATHS':skill===2?'YOUR MENTAL PICTURE':'A NUMBER YOU CAN SEE'}</span>
        <div className="note-equation">{skill===1 ? <><span>{a}</span><i>+</i><span>{b}</span><i>=</i><strong>{step?a+b:'?'}</strong></> : <><strong>{concealed?'?':displayed}</strong><span className="note-decomposition">{concealed?'Picture the beads.':<>{tens} tens<br/>+ {ones} ones</>}</span></>}</div>
        <span className="note-foot"><span/>{concealed?'The answer is in your mind.':'Understanding comes before speed.'}</span>
      </div>

      {skill===3 && <div className="visualization-grid" aria-label={`${displayed} dots arranged as ${tens} groups of ten and ${ones} ones`}>
        <span>FROM BEADS TO A MENTAL PICTURE</span>
        <div className="number-dots">{Array.from({length:Math.max((tens+1)*10,10)},(_,i)=><i key={i} className={i<displayed?'filled':''} style={{'--dot-delay':`${i*14}ms`}}/>)}</div>
        <strong>{tens*10} <em>+</em> {ones} <em>=</em> {displayed}</strong>
      </div>}
      {concealed && <div className="recall-veil"><span>✧</span><p>Close your eyes for a moment.<br/>Can you still see the number?</p></div>}

      <div className="lab-path" aria-hidden="true"><span className="path-start"/> <svg viewBox="0 0 150 35"><path d="M1 30C48 30 72 4 142 4"/><path d="m134 0 9 4-8 5"/></svg><span>Small steps. Lasting connections.</span></div>
    </div>

    <div className="lab-activity" aria-label={`${activity.label.toLowerCase()} activity`}>
      <div className="activity-heading"><span className="activity-spark">✳</span><div><strong>{activity.title}</strong><p>{activity.instruction}</p></div><span className="activity-live"><i/> TRY IT</span></div>
      {skill===0 && <div className="number-explorer"><label htmlFor="explore-number">Explore a number</label><input id="explore-number" type="range" min="0" max="99" value={value} onChange={e=>chooseValue(Number(e.target.value))}/><output htmlFor="explore-number" aria-live="off">{value.toString().padStart(2,'0')}</output></div>}
      {skill===1 && <div className="activity-actions"><span>{step ? `${a} + ${b} = ${a+b}. See how the beads moved?` : 'Make a prediction, then see it on the abacus.'}</span><button type="button" onClick={()=>{setTouched(true);if(step)nextChallenge();else setStep(1);}}>{step?'Try another':'See the answer'} <span>↗</span></button></div>}
      {skill===2 && <div className="activity-actions memory-actions">{!remembering ? <><span>No rush. Remember the pattern.</span><button type="button" onClick={()=>{setTouched(true);setRemembering(true);setAnswer(null);}}>I’ve got it <span>↗</span></button></> : <><span role="status">{answer===null?'Which number did you see?':answer===value?'Exactly. You held the picture in your mind.':'Good try. Look at the beads and try again.'}</span>{answer===null?<div className="recall-choices">{choices.map(choice=><button key={choice} type="button" aria-label={`Remembered number ${choice}`} onClick={()=>setAnswer(choice)}>{choice}</button>)}</div>:<button type="button" onClick={()=>{setRemembering(false);setAnswer(null);setValue(v=>(v+17)%90+5);}}>Try again <span>↗</span></button>}</>}</div>}
      {skill===3 && <div className="number-explorer"><label htmlFor="visualize-number">Picture a number</label><input id="visualize-number" type="range" min="1" max="49" value={Math.min(value,49)} onChange={e=>chooseValue(Number(e.target.value))}/><output htmlFor="visualize-number">{value}</output></div>}
    </div>
  </div>;
}
