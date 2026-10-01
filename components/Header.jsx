'use client';
import { useEffect, useState } from 'react';

const SHELL = "px-[5.5%] max-[800px]:px-[6%] min-[1600px]:[padding-left:max(5.5%,calc((100vw_-_1420px)/2))] min-[1600px]:[padding-right:max(5.5%,calc((100vw_-_1420px)/2))]";
const BUTTON = "inline-flex items-center justify-between gap-[30px] bg-[#192e4e] text-white text-[12px] font-medium py-[19px] px-[24px] border border-[#192e4e] rounded-[4px] transition-[background,transform,box-shadow] duration-[250ms] hover:bg-[#2a456d] hover:-translate-y-[2px] hover:shadow-[0_7px_16px_#172d4c13]";

const navLink = "transition-colors duration-200 hover:text-[#b77b26] max-[800px]:text-[10px] max-[520px]:text-[14px]";
const navLinkButton = "bg-transparent border-0 [font-family:inherit] text-inherit cursor-pointer p-0 transition-colors duration-200 hover:text-[#b77b26] max-[800px]:text-[10px] max-[520px]:text-[14px]";

// `interactive` is true only on the homepage, where a DetailDialog is mounted and the root
// click handler there can open it from a data-contact button. On other pages there's no
// dialog to open, so these become ordinary links to the homepage's contact footer instead.
export default function Header({ interactive = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);
  function handleClick(event) {
    const target = event.target.closest('button, a');
    if (!target) return;
    if (target.classList.contains('menu-toggle')) setMenuOpen(value => !value);
    if (target.closest('#navigation') && target.tagName === 'A') setMenuOpen(false);
  }
  return <header onClick={handleClick} className={`py-3 ${SHELL} flex items-center justify-between border-b border-[#dcded6] z-20 bg-[#f7f7f0] sticky top-0`}>
    <a className="inline-flex items-center gap-[10px]" href="/" aria-label="Xtragenius home"><img src="/images/logo.png" alt="Xtragenius — multiplying intelligence" className="h-[54px] w-auto block" /></a>
    <nav aria-label="Main navigation" id="navigation" className={`flex gap-[33px] text-[12px] font-medium items-center max-[1100px]:gap-[19px] min-[1101px]:gap-[22px] min-[1101px]:text-[11px] min-[1101px]:whitespace-nowrap min-[1101px]:max-[1340px]:gap-[15px] min-[1101px]:max-[1340px]:text-[10px] max-[800px]:gap-[18px] max-[520px]:absolute max-[520px]:top-[77px] max-[520px]:left-0 max-[520px]:right-0 max-[520px]:p-[22px_6%] max-[520px]:bg-[#f7f7f0] max-[520px]:border-b max-[520px]:border-[#dcded6] max-[520px]:shadow-[0_12px_15px_#152d5008] ${menuOpen ? 'flex max-[520px]:flex-col max-[520px]:items-start max-[520px]:gap-[22px]' : 'max-[520px]:hidden'}`}>
      <a className={navLink} href="/#programmes">All Programs</a>
      <a className={navLink} href="/#approach">Why Xtragenius</a>
      <a className={navLink} href="/#legacy">Competitions</a>
      <a className={navLink} href="/#partners">Become a Partner</a>
      <a className={navLink} href="/gallery">Gallery</a>
      {interactive
        ? <button type="button" className={navLinkButton} data-contact="educator enquiry">Educator Portal</button>
        : <a className={navLink} href="/#contact">Educator Portal</a>}
    </nav>
    {interactive
      ? <button className={`header-cta ${BUTTON} py-[14px] px-[18px] text-[11px] max-[1100px]:text-[10px] max-[1100px]:gap-[18px] max-[1100px]:p-[17px] max-[800px]:hidden`} data-contact="consultation">Let’s find their potential <span className="text-[17px] leading-[1]">↗</span></button>
      : <a className={`header-cta ${BUTTON} py-[14px] px-[18px] text-[11px] max-[1100px]:text-[10px] max-[1100px]:gap-[18px] max-[1100px]:p-[17px] max-[800px]:hidden`} href="/#contact">Let’s find their potential <span className="text-[17px] leading-[1]">↗</span></a>}
    <button className="menu-toggle hidden max-[520px]:flex max-[520px]:flex-col max-[520px]:gap-[6px] max-[520px]:p-[12px_0_12px_12px]" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="navigation">
      <span className={`h-[1px] w-[23px] bg-[#192e4e] transition-transform duration-300 ${menuOpen ? '[transform:translateY(3.5px)_rotate(45deg)]' : ''}`}></span>
      <span className={`h-[1px] w-[23px] bg-[#192e4e] transition-transform duration-300 ${menuOpen ? '[transform:translateY(-3.5px)_rotate(-45deg)]' : ''}`}></span>
    </button>
  </header>;
}
