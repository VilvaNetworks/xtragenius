'use client';

import { useEffect, useId, useRef, useState } from 'react';

const activities = [
  { title: 'A little focus. A new possibility.', label: 'CONCENTRATION', instruction: 'Move a bead. See a number take shape.' },
  { title: 'From seeing to solving.', label: 'SPEED', instruction: 'Follow the beads. Find the answer.' },
  { title: 'See it. Remember it. Recall it.', label: 'MEMORY', instruction: 'Take a mental picture of the number.' },
  { title: 'One number. A different perspective.', label: 'VISUALIZATION', instruction: 'See how tens and ones make a whole.' },
];
const challenges = [[23,14], [12,26], [34,15], [21,32]];

function Bead({ x, y, active, upper, label, onSelect, gradient, disabled, motion }) {
  return <g className={`abacus-bead group ${active ? 'engaged' : ''} outline-none ${motion ? 'transition-transform duration-[1.1s] ease-[cubic-bezier(.22,.75,.18,1)]' : 'transition-none'} ${disabled ? '' : 'cursor-pointer'}`} transform={`translate(${x} ${y})`} role={disabled ? undefined : 'button'} tabIndex={disabled ? undefined : 0} aria-label={disabled ? undefined : label} aria-pressed={disabled ? undefined : active} onClick={disabled ? undefined : onSelect} onKeyDown={disabled ? undefined : event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onSelect(); } }}>
    <title>{label}</title>
    <ellipse cx="0" cy="8" rx="25" ry="8" fill="#10253b" opacity=".12" />
    <path className="group-hover:[filter:brightness(1.15)] group-focus-visible:[stroke:#bd7422] group-focus-visible:[stroke-width:3px]" d="M-25 0 Q-22-8-6-11 Q0-12 6-11 Q22-8 25 0 Q22 9 6 11 Q0 12-6 11 Q-22 9-25 0Z" fill={`url(#${gradient})`} stroke={active ? '#b7863f' : '#142f4e'} strokeWidth=".7" />
    <path d="M-19-3 Q0-13 19-3" fill="none" stroke={active ? '#ffe6ae' : '#8ca4bc'} strokeWidth="1" opacity=".7" />
    <path d="M-20 4 Q0 12 20 4" fill="none" stroke={active ? '#875722' : '#0a2036'} strokeWidth="1" opacity=".45" />
    <ellipse cy="-8.5" rx="3" ry="1.3" fill={upper ? '#dbcda6' : '#a1b0b6'} opacity=".8" />
  </g>;
}

function Abacus({ value, setValue, hidden, disabled, visualizing, motion }) {
  const id = useId().replaceAll(':','');
  const columns = [0, Math.floor(value / 10), value % 10];
  const places = ['hundreds','tens','ones'];
  function select(column, digit) {
    if(column === 0) return;
    setValue(column === 1 ? digit * 10 + value % 10 : Math.floor(value / 10) * 10 + digit);
  }
  const bodyFade = hidden ? 'opacity-[.08] blur-[6px] pointer-events-none' : visualizing ? 'opacity-[.12]' : '';
  const labelsFade = hidden ? 'opacity-[.15]' : visualizing ? 'opacity-30' : '';
  return <svg className="w-full block overflow-visible" viewBox="0 0 560 410" aria-label={hidden ? 'Abacus hidden for the memory challenge' : `Interactive abacus showing ${value}`}>
    <defs>
      <linearGradient id={`${id}-frame`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#42617c"/><stop offset=".35" stopColor="#203c58"/><stop offset="1" stopColor="#10273e"/></linearGradient>
      <linearGradient id={`${id}-bead`} x1="0" y1="0" x2=".3" y2="1"><stop stopColor="#69849e"/><stop offset=".28" stopColor="#3d5f7e"/><stop offset=".55" stopColor="#294764"/><stop offset="1" stopColor="#142f49"/></linearGradient>
      <linearGradient id={`${id}-gold`} x1="0" y1="0" x2=".4" y2="1"><stop stopColor="#ffe4a2"/><stop offset=".3" stopColor="#e8ba68"/><stop offset=".7" stopColor="#c89647"/><stop offset="1" stopColor="#9c6c30"/></linearGradient>
      <linearGradient id={`${id}-rod`}><stop stopColor="#afb2a0"/><stop offset=".45" stopColor="#f6f0d9"/><stop offset="1" stopColor="#babaa4"/></linearGradient>
      <linearGradient id={`${id}-paper`} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#f3f2e8"/><stop offset="1" stopColor="#e5e5d8"/></linearGradient>
      <filter id={`${id}-shadow`} x="-30%" y="-20%" width="170%" height="180%"><feGaussianBlur stdDeviation="13"/></filter>
    </defs>
    <ellipse cx="291" cy="365" rx="174" ry="19" fill="#183048" opacity=".12" filter={`url(#${id}-shadow)`}/>
    <g className={`abacus-body transition-[opacity,filter] duration-700 ${bodyFade}`}>
      <rect x="112" y="59" width="342" height="302" rx="19" fill="#0e243b" />
      <rect x="103" y="49" width="342" height="302" rx="17" fill={`url(#${id}-frame)`}/>
      <rect x="110" y="56" width="328" height="288" rx="12" fill="none" stroke="#90a1ad" strokeOpacity=".32"/>
      <rect x="123" y="72" width="302" height="253" rx="5" fill={`url(#${id}-paper)`}/>
      <path d="M126 75H422" stroke="#132c44" strokeOpacity=".3" strokeWidth="3"/>
      {[174,274,374].map((x,i) => <g key={x} className={`abacus-column column-${i}`}>
        <rect x={x-2.7} y="77" width="5.4" height="244" rx="2.7" fill={`url(#${id}-rod)`}/>
        <Bead x={x} y={columns[i]>=5 ? 133 : 95} active={columns[i]>=5} upper label={`Toggle five on ${places[i]} rod`} gradient={`${id}-${columns[i]>=5 ? 'gold' : 'bead'}`} disabled={disabled || i===0} motion={motion} onSelect={()=>select(i, columns[i]>=5 ? columns[i]-5 : columns[i]+5)}/>
        {[0,1,2,3].map(j => {
          const active = j < columns[i]%5;
          return <Bead key={j} x={x} y={active ? 177+j*27 : 224+j*27} active={active} label={`${j+1} unit bead on ${places[i]} rod`} gradient={`${id}-${active ? 'gold' : 'bead'}`} disabled={disabled || i===0} motion={motion} onSelect={()=>select(i,(columns[i]>=5?5:0)+(active?j:j+1))}/>;
        })}
      </g>)}
      <rect x="119" y="150" width="310" height="12" rx="2" fill="#203a52"/>
      <path d="M122 151H426" stroke="#8095a5" strokeOpacity=".55"/>
      {[174,274,374].map(x=><circle key={x} cx={x} cy="156" r="1.7" fill="#e2bd77"/>)}
      {[[115,61],[432,61],[115,338],[432,338]].map(([x,y])=><g key={`${x}-${y}`}><circle cx={x} cy={y} r="3" fill={`url(#${id}-gold)`}/><path d={`M${x-1.6} ${y}h3.2`} stroke="#876631" strokeWidth=".6"/></g>)}
      <text x="274" y="341" textAnchor="middle" className="[font-family:var(--font)] text-[5px] fill-[#bbc3c8]">X T R A G E N I U S</text>
    </g>
    <g className={`abacus-place-labels fill-[#839080] [font-family:var(--font)] text-[6px] tracking-[1.4px] ${labelsFade}`} aria-hidden="true"><text x="174" y="385" textAnchor="middle">HUNDREDS</text><text x="274" y="385" textAnchor="middle">TENS</text><text x="374" y="385" textAnchor="middle">ONES</text></g>
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

  return <div ref={root} className="pt-[24px] max-[520px]:pt-[17px]" data-testid="learning-lab">
    <div className="h-[397px] relative [isolation:isolate] min-[1600px]:h-[450px] min-[801px]:max-[1100px]:h-[315px] max-[800px]:h-[397px] max-[520px]:h-[295px] max-[360px]:h-[261px]">
      <div className="absolute pointer-events-none border border-[#bfc7b333] rounded-full w-[83%] [aspect-ratio:1] left-[7%] top-[-6px]" aria-hidden="true"/>
      <div className="absolute pointer-events-none border border-dashed border-[#bfc7b336] rounded-full w-[65%] [aspect-ratio:1] left-[16%] top-[43px]" aria-hidden="true"/>
      <div className="absolute [font-family:monospace] text-[16px] text-[#a4b09d] top-[48px] left-[53%] min-[801px]:max-[1100px]:text-[6px] min-[801px]:max-[1100px]:top-[35px] max-[520px]:top-[23px]" aria-hidden="true">+</div>
      <div className="absolute [font-family:monospace] text-[16px] text-[#a4b09d] bottom-[52px] right-[11%] max-[520px]:bottom-[25px]" aria-hidden="true">+</div>
      <div className="absolute top-[38px] left-[5px] text-[7px] leading-[1.9] tracking-[1.25px] text-[#98a18e] min-[801px]:max-[1100px]:text-[6px] min-[801px]:max-[1100px]:top-[35px] max-[520px]:text-[5px] max-[520px]:top-[26px] max-[520px]:left-0 max-[520px]:tracking-[1px]">A SMALL DISCOVERY.<br/><span className="text-[#4c635b]">A STRONGER MIND.</span></div>
      <div className="absolute right-[15%] top-[11px] [font-family:var(--display)] text-[210px] font-normal tracking-[-18px] leading-[1] text-[#e9ebe0] -z-[1] select-none min-[801px]:max-[1100px]:text-[150px] max-[520px]:text-[155px] max-[520px]:tracking-[-12px] max-[520px]:top-[17px] max-[520px]:right-[16%]" aria-hidden="true">{concealed?'?':displayed}</div>
      <div className="w-[101%] absolute left-[-7%] top-[35px] [transform:perspective(1100px)_rotateY(-15deg)_rotateX(12deg)_rotateZ(-9deg)] [transform-origin:50%_65%] min-[1600px]:top-[40px] min-[801px]:max-[1100px]:w-[108%] min-[801px]:max-[1100px]:left-[-8%] min-[801px]:max-[1100px]:top-[36px] max-[800px]:top-[20px] max-[520px]:w-[109%] max-[520px]:left-[-9%] max-[520px]:top-[32px]"><Abacus value={displayed} setValue={chooseValue} hidden={concealed} disabled={skill===1 || skill===2 || skill===3} visualizing={skill===3} motion={motion}/></div>

      <div className={`absolute z-[3] right-[-1%] top-[62px] w-[175px] [padding:19px_17px_15px] [background:linear-gradient(125deg,#fffef8,#f4f1e5)] border border-white rounded-[6px] shadow-[0_18px_45px_-17px_#2d3f4933,0_0_0_1px_#d8ddce66] [transform:rotate(5deg)] before:content-[''] before:absolute before:w-[27px] before:h-[5px] before:left-[16px] before:top-[-3px] before:[background:#d1a553] before:rounded-[2px] min-[1600px]:top-[80px] min-[1600px]:right-0 min-[1600px]:w-[190px] min-[801px]:max-[1100px]:w-[145px] min-[801px]:max-[1100px]:[padding:14px_12px] min-[801px]:max-[1100px]:top-[49px] min-[801px]:max-[1100px]:right-[-3%] max-[800px]:right-[1%] max-[520px]:w-[137px] max-[520px]:right-0 max-[520px]:top-[39px] max-[520px]:[padding:13px_12px_12px] max-[520px]:rounded-[4px] max-[360px]:w-[119px] max-[360px]:[padding:11px_9px] ${skill===1 ? 'w-[203px] top-[63px] right-[-2%] min-[1600px]:top-[95px] min-[1600px]:right-[-1%] min-[801px]:max-[1100px]:w-[175px] max-[520px]:w-[160px] max-[520px]:right-[-1%] max-[520px]:top-[44px]' : ''}`} style={motion ? {animation:'learning-note-float 7s ease-in-out infinite'} : undefined}>
        <span className="text-[6px] tracking-[1px] text-[#909984] block min-[801px]:max-[1100px]:text-[5px] max-[520px]:text-[5px] max-[520px]:tracking-[.6px] max-[360px]:text-[4.5px]">{skill===1?'A LITTLE MENTAL MATHS':skill===2?'YOUR MENTAL PICTURE':'A NUMBER YOU CAN SEE'}</span>
        <div className={`flex items-center gap-[11px] min-h-[70px] text-[#324e61] min-[1600px]:min-h-[82px] min-[801px]:max-[1100px]:min-h-[59px] min-[801px]:max-[1100px]:gap-[9px] max-[520px]:min-h-[58px] max-[520px]:gap-[9px] max-[360px]:gap-[6px] max-[360px]:min-h-[48px] ${skill===1 ? 'gap-[7px] min-h-[61px]' : ''}`}>{skill===1 ? <><span className={`[font-family:var(--display)] text-[27px] tracking-[-1px] min-[801px]:max-[1100px]:text-[23px] max-[520px]:text-[22px]`}>{a}</span><i className="text-[16px] not-italic text-[#a5ad97]">+</i><span className="[font-family:var(--display)] text-[27px] tracking-[-1px] min-[801px]:max-[1100px]:text-[23px] max-[520px]:text-[22px]">{b}</span><i className="text-[16px] not-italic text-[#a5ad97]">=</i><strong className="[font-family:var(--display)] font-medium text-[31px] tracking-[-1px] max-[520px]:text-[26px]">{step?a+b:'?'}</strong></> : <><strong className="[font-family:var(--display)] text-[52px] font-medium tracking-[-3px] min-[1600px]:text-[60px] min-[801px]:max-[1100px]:text-[43px] max-[520px]:text-[40px] max-[520px]:tracking-[-2px] max-[360px]:text-[35px]">{concealed?'?':displayed}</strong><span className={`border-l border-[#d8dbcd] pl-[12px] text-[11px] leading-[1.8] text-[#88927d] min-[1600px]:text-[12px] min-[801px]:max-[1100px]:text-[9px] min-[801px]:max-[1100px]:pl-[8px] max-[520px]:text-[8px] max-[520px]:pl-[9px] max-[360px]:text-[7px] max-[360px]:pl-[7px] ${concealed ? 'text-[9px]' : ''}`}>{concealed?'Picture the beads.':<>{tens} tens<br/>+ {ones} ones</>}</span></>}</div>
        <span className="flex items-center gap-[5px] text-[6px] text-[#86917e] whitespace-nowrap min-[801px]:max-[1100px]:text-[5px] min-[801px]:max-[1100px]:gap-[3px] max-[520px]:text-[4.5px] max-[520px]:gap-[3px] max-[360px]:text-[4px]"><span className="w-[4px] h-[4px] rounded-full [background:#c79e56] shrink-0 max-[520px]:w-[3px] max-[520px]:h-[3px]"/>{concealed?'The answer is in your mind.':'Understanding comes before speed.'}</span>
      </div>

      {skill===3 && <div className="absolute top-[115px] left-[18%] w-[223px] [background:#f7f7eeeb] [padding:23px_20px_18px] border border-[#d8dfcb] rounded-[4px] shadow-[0_16px_35px_#3c50310a] [transform:rotate(-5deg)] min-[1600px]:top-[155px] min-[1600px]:w-[250px] min-[801px]:max-[1100px]:w-[196px] min-[801px]:max-[1100px]:[padding:17px_14px] min-[801px]:max-[1100px]:top-[100px] min-[801px]:max-[1100px]:left-[12%] max-[520px]:top-[104px] max-[520px]:left-[10%] max-[520px]:w-[185px] max-[520px]:[padding:16px_12px] max-[360px]:top-[95px] max-[360px]:left-[7%] max-[360px]:w-[170px]" aria-label={`${displayed} dots arranged as ${tens} groups of ten and ${ones} ones`} style={motion ? {animation:'learning-appear .65s ease both'} : undefined}>
        <span className="text-[6px] tracking-[1px] text-[#8a957c] min-[520px]:text-[5px] min-[520px]:tracking-[.7px]">FROM BEADS TO A MENTAL PICTURE</span>
        <div className="grid [grid-template-columns:repeat(10,1fr)] gap-[6px] [margin:18px_0] min-[1600px]:gap-[8px] min-[801px]:max-[1100px]:gap-[5px] max-[520px]:gap-[5px] max-[520px]:[margin:13px_0] max-[360px]:gap-[4px]">{Array.from({length:Math.max((tens+1)*10,10)},(_,i)=><i key={i} className={`w-[12px] h-[12px] rounded-full border [transition:background_.45s,transform_.45s] min-[1600px]:w-[13px] min-[1600px]:h-[13px] min-[801px]:max-[1100px]:w-[11px] min-[801px]:max-[1100px]:h-[11px] max-[520px]:w-[10px] max-[520px]:h-[10px] ${i<displayed ? `border-transparent ${i>=30 ? '[background:#d3a151]' : '[background:#3e5b67]'}` : 'border-[#d7decc] bg-transparent'}`} style={motion ? {animation:`learning-dot-in .5s ease both`, animationDelay:`${i*14}ms`} : undefined}/>)}</div>
        <strong className="[font-family:var(--display)] font-medium text-[19px] tracking-[-.5px] max-[520px]:text-[17px]">{tens*10} <em className="not-italic text-[14px] text-[#a0ac90] [padding:0_6px]">+</em> {ones} <em className="not-italic text-[14px] text-[#a0ac90] [padding:0_6px]">=</em> {displayed}</strong>
      </div>}
      {concealed && <div className="absolute left-[15%] top-[132px] w-[240px] text-center text-[#839174] min-[801px]:max-[1100px]:left-[5%] min-[801px]:max-[1100px]:top-[105px] max-[520px]:top-[98px] max-[520px]:left-[8%] max-[520px]:w-[185px]"><span className="text-[59px] leading-[1] text-[#b99b60] max-[520px]:text-[44px]">✧</span><p className="text-[12px] leading-[1.8] mt-[13px] max-[520px]:text-[9px] max-[520px]:mt-[10px]">Close your eyes for a moment.<br/>Can you still see the number?</p></div>}

      <div className="absolute bottom-[14px] right-[1px] flex items-center gap-[8px] text-[#939d8c] text-[8px] min-[1600px]:bottom-[26px] min-[801px]:max-[1100px]:text-[6px] min-[801px]:max-[1100px]:bottom-[4px] max-[800px]:bottom-[16px] max-[520px]:text-[6px] max-[520px]:right-0 max-[520px]:bottom-[4px] max-[520px]:gap-[4px] max-[360px]:text-[5px]" aria-hidden="true"><span className="w-[5px] h-[5px] rounded-full [background:#d4ac65]"/> <svg className="w-[85px] h-[25px] overflow-visible min-[801px]:max-[1100px]:w-[60px] max-[520px]:w-[48px]" viewBox="0 0 150 35"><path className="fill-none stroke-[#bfba9b] [stroke-width:.7px]" d="M1 30C48 30 72 4 142 4"/><path className="fill-none stroke-[#bfba9b] [stroke-width:.7px]" d="m134 0 9 4-8 5"/></svg><span>Small steps. Lasting connections.</span></div>
    </div>

    <div className="relative z-[4] [margin:4px_8px_0] border border-[#dce1d3] rounded-[5px] [padding:17px_18px_0] [background:#f8f9f2d9] backdrop-blur-[8px] min-[801px]:max-[1100px]:[padding:14px_12px_0] min-[801px]:max-[1100px]:ml-[4px] min-[801px]:max-[1100px]:mr-0 max-[520px]:[margin:7px_0_0] max-[520px]:[padding:14px_12px_0]" aria-label={`${activity.label.toLowerCase()} activity`}>
      <div className="flex items-center gap-[13px] min-[801px]:max-[1100px]:gap-[8px] max-[520px]:gap-[9px]">
        <span className="text-[#b99150] [font-family:Arial,sans-serif] text-[27px] leading-[1] min-[801px]:max-[1100px]:text-[22px] max-[520px]:text-[22px]">✳</span>
        <div><strong className="block text-[12px] font-medium tracking-[-.15px] min-[801px]:max-[1100px]:text-[10px] max-[520px]:text-[10px]">{activity.title}</strong><p className="mt-[4px] text-[9px] leading-[1.5] text-[#89927f] min-[801px]:max-[1100px]:text-[8px] max-[520px]:text-[8px]">{activity.instruction}</p></div>
        <span className="ml-auto shrink-0 text-[7px] tracking-[.9px] text-[#7b8873] flex gap-[5px] items-center min-[801px]:max-[1100px]:text-[6px] max-[520px]:text-[6px] max-[520px]:gap-[4px] max-[360px]:hidden"><i className="h-[4px] w-[4px] [background:#8d9e79] rounded-full" style={motion ? {animation:'learning-pulse 3s ease-in-out infinite'} : undefined}/> TRY IT</span>
      </div>
      {skill===0 && <div className="flex items-center gap-[15px] min-h-[49px] border-t border-[#e2e5d9] mt-[14px] max-[520px]:min-h-[45px] max-[520px]:gap-[12px] max-[520px]:mt-[12px]"><label className="text-[8px] text-[#788770] whitespace-nowrap max-[520px]:text-[7px]" htmlFor="explore-number">Explore a number</label><input className="[accent-color:#b38a48] w-full min-w-0 h-[3px] cursor-pointer m-0 appearance-none [background:#dfe3d6] rounded-[5px]" id="explore-number" type="range" min="0" max="99" value={value} onChange={e=>chooseValue(Number(e.target.value))}/><output className="[font-family:var(--display)] text-[18px] tracking-[-1px] min-w-[23px] text-right max-[520px]:text-[16px]" htmlFor="explore-number" aria-live="off">{value.toString().padStart(2,'0')}</output></div>}
      {skill===1 && <div className="flex items-center justify-between gap-[15px] min-h-[49px] border-t border-[#e2e5d9] mt-[14px] min-[801px]:max-[1100px]:gap-[6px]"><span className="text-[8px] text-[#84917a] leading-[1.55] max-w-[245px] min-[801px]:max-[1100px]:text-[7px] max-[520px]:text-[7px]">{step ? `${a} + ${b} = ${a+b}. See how the beads moved?` : 'Make a prediction, then see it on the abacus.'}</span><button className="text-[9px] whitespace-nowrap inline-flex items-center gap-[12px] [padding:9px_0_9px_8px] hover:text-[#ad7d30] min-[801px]:max-[1100px]:text-[8px] min-[801px]:max-[1100px]:gap-[6px] max-[520px]:text-[8px] max-[520px]:gap-[5px]" type="button" onClick={()=>{setTouched(true);if(step)nextChallenge();else setStep(1);}}>{step?'Try another':'See the answer'} <span>↗</span></button></div>}
      {skill===2 && <div className="flex items-center justify-between gap-[15px] min-h-[49px] border-t border-[#e2e5d9] mt-[14px]">{!remembering ? <><span className="text-[8px] text-[#84917a] leading-[1.55] max-w-[245px]">No rush. Remember the pattern.</span><button className="text-[9px] whitespace-nowrap inline-flex items-center gap-[12px] [padding:9px_0_9px_8px] hover:text-[#ad7d30]" type="button" onClick={()=>{setTouched(true);setRemembering(true);setAnswer(null);}}>I’ve got it <span>↗</span></button></> : <><span role="status" className="text-[8px] text-[#84917a] leading-[1.55] max-w-[245px]">{answer===null?'Which number did you see?':answer===value?'Exactly. You held the picture in your mind.':'Good try. Look at the beads and try again.'}</span>{answer===null?<div className="flex gap-[6px]">{choices.map(choice=><button key={choice} className="[padding:5px_9px] border border-[#d7ddcc] [background:#f7f8ed] rounded-[3px] text-[11px] min-w-[33px] justify-center hover:[background:#e5e9d9]" type="button" aria-label={`Remembered number ${choice}`} onClick={()=>setAnswer(choice)}>{choice}</button>)}</div>:<button className="text-[9px] whitespace-nowrap inline-flex items-center gap-[12px] [padding:9px_0_9px_8px] hover:text-[#ad7d30]" type="button" onClick={()=>{setRemembering(false);setAnswer(null);setValue(v=>(v+17)%90+5);}}>Try again <span>↗</span></button>}</>}</div>}
      {skill===3 && <div className="flex items-center gap-[15px] min-h-[49px] border-t border-[#e2e5d9] mt-[14px] max-[520px]:min-h-[45px] max-[520px]:gap-[12px] max-[520px]:mt-[12px]"><label className="text-[8px] text-[#788770] whitespace-nowrap max-[520px]:text-[7px]" htmlFor="visualize-number">Picture a number</label><input className="[accent-color:#b38a48] w-full min-w-0 h-[3px] cursor-pointer m-0 appearance-none [background:#dfe3d6] rounded-[5px]" id="visualize-number" type="range" min="1" max="49" value={Math.min(value,49)} onChange={e=>chooseValue(Number(e.target.value))}/><output className="[font-family:var(--display)] text-[18px] tracking-[-1px] min-w-[23px] text-right max-[520px]:text-[16px]" htmlFor="visualize-number">{value}</output></div>}
    </div>
  </div>;
}
