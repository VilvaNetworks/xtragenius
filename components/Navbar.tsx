'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "@/public/images/logo.png"
import { usePathname } from 'next/navigation'
// Inline SVG icon components (replaces lucide-react)
const ShoppingCart = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
)
const UserIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
)
const MenuIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
  </svg>
)
const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
  </svg>
)
import { cn } from '@/lib/utils'

type DropdownItem = {
  label: string
  href: string
  dropdown?: DropdownItem[]
}

type NavItem = {
  label: string
  href?: string
  dropdown?: DropdownItem[]
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    dropdown: [
      { label: 'Company', href: '/company/' },
      { label: "Our MD's Message", href: '/mds-message/' },
      { label: 'Partner With Us', href: '/partner-with-us/' },
    ],
  },
  {
    label: 'Programs',
    dropdown: [
      { label: 'Home', href: '/' },
      { label: 'Vedic Math', href: '/vedic-math/' },
      { label: 'Mind Dart', href: '/mind-dart/' },
      { label: 'Hand Writing', href: '/hand-writing/' },
      { label: 'Short Courses', href: '/courses/' },
      { label: 'Online Learning Portal', href: 'http://portal.xtragenius.com/' },
    ],
  },
  {
    label: 'Competition',
    dropdown: [
      { label: 'Offline Competition', href: '/offline-competition/' },
      { label: 'Online Competition', href: '/online-competition/' },
      { label: 'Rank', href: '/rank/' },
      { label: 'Portal Login', href: 'https://student.xtragenius.com/login' },
    ],
  },
  {
    label: 'Shop',
    dropdown: [
      {
        label: 'Books',
        href: '#',
        dropdown: [
          { label: 'Franchisee books', href: '/product-category/franchisee-books/' },
          { label: 'School books', href: '/product-category/school-books/' },
          { label: 'Vedic maths', href: '/product-category/vedic-maths/' },
          { label: 'Speed writing', href: '/product-category/speed-writing/' },
          { label: 'Hand writting', href: '/product-category/hand-writting/' },
        ],
      },
      { label: 'Flash cards', href: '/product-category/flash-cards/' },
      { label: 'Abacus tool', href: '/product-category/abacus-tool/' },
      { label: 'Bag', href: '/product-category/bag/' },
      { label: 'T shirt', href: '/product-category/t-shirt/' },
    ],
  },
  { label: 'Contact us', href: '/contact-us/' },
]

const isItemActive = (item: NavItem | DropdownItem, pathname: string): boolean => {
  if (item.href) {
    const normalize = (p: string) => p.replace(/\/$/, '') || '/';
    const normalizedHref = normalize(item.href);
    const normalizedPathname = normalize(pathname);

    if (normalizedHref === '/') {
      return normalizedPathname === '/';
    }
    return normalizedPathname === normalizedHref || normalizedPathname.startsWith(normalizedHref + '/');
  }
  if (item.dropdown) {
    return item.dropdown.some(sub => isItemActive(sub, pathname));
  }
  return false;
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({
    'About Us': true
  })
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label]
    }))
  }

  return (
    <header
      className={cn(
        'z-50 w-full transition-all duration-300 shadow-sm',
        scrolled
          ? 'sticky top-0 bg-white shadow-md'
          : 'relative bg-white'
      )}
    >
      <div className="mx-auto max-w-[1400px] px-4">
        <div
          className={cn(
            'flex items-center justify-between transition-all duration-300',
            scrolled ? 'h-[70px]' : 'h-[107px]'
          )}
        >
          {/* Branding */}
          <div className="branding flex-shrink-0">
            <Link href="/">
              <Image
                src={logo}
                alt="Learning made easy"
                width={160}
                height={61}
                priority
              />
            </Link>
          </div>

          <div className="flex items-center">
            {/* Desktop Nav */}
            <nav className="hidden lg:flex">
              <ul className="m-0 flex list-none p-0">
                {navItems.map((item) => (
                  <li key={item.label} className="group relative">
                    {item.href && !item.dropdown ? (
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center px-4 py-[29px] text-[15px] font-normal leading-none transition-colors duration-200',
                          isItemActive(item, pathname)
                            ? 'text-[#ff6600]'
                            : 'text-[#000000] hover:text-[#ff6600]'
                        )}
                      >
                        <span className={cn(
                          "relative pb-[6px]",
                          isItemActive(item, pathname)
                            ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#ff6600]"
                            : "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#ff6600] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100"
                        )}>
                          {item.label}
                        </span>
                      </Link>
                    ) : (
                      <>
                        <button
                          type="button"
                          className={cn(
                            'flex items-center cursor-pointer border-0 bg-transparent px-4 py-[29px] text-[15px] font-semibold leading-none transition-colors duration-200',
                            isItemActive(item, pathname) ? 'text-[#ff6600]' : 'text-[#696969] hover:text-[#ff6600] group-hover:text-[#ff6600]'
                          )}
                        >
                          <span className={cn(
                            "relative pb-[6px] flex items-center",
                            isItemActive(item, pathname)
                              ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#ff6600]"
                              : "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#ff6600] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100"
                          )}>
                            {item.label}
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1.5 opacity-70">
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </span>
                        </button>
                        {item.dropdown && (
                          <div
                            className={cn(
                              'invisible absolute left-0 top-full z-[100] w-[240px] opacity-0 transition-all duration-300',
                              'bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-b-[3px] border-[#ff6600]',
                              'group-hover:visible group-hover:opacity-100 translate-y-2 group-hover:translate-y-0'
                            )}
                          >
                            <ul className="m-0 list-none py-2 px-0">
                              {item.dropdown.map((sub, index) => {
                                const isExternal = sub.href.startsWith('http');
                                return (
                                  <li key={sub.label} className="relative group/sub">
                                    <Link
                                      href={sub.href}
                                      target={isExternal ? '_blank' : undefined}
                                      rel={isExternal ? 'noopener noreferrer' : undefined}
                                      className={cn(
                                        'px-6 py-3 text-[14px] no-underline transition-colors duration-150 flex items-center justify-between',
                                        index === 0 && !sub.dropdown ? 'text-[#333333] font-normal' : 'text-[#777777] font-normal hover:text-[#ff6600]'
                                      )}
                                    >
                                      {sub.label}
                                      {sub.dropdown && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 -rotate-90">
                                          <path d="m6 9 6 6 6-6" />
                                        </svg>
                                      )}
                                    </Link>
                                    {sub.dropdown && (
                                      <div className="invisible absolute left-full top-0 z-[101] w-[240px] opacity-0 transition-all duration-300 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-b-[3px] border-[#ff6600] group-hover/sub:visible group-hover/sub:opacity-100 translate-x-2 group-hover/sub:translate-x-0">
                                        <ul className="m-0 list-none py-2 px-0">
                                          {sub.dropdown.map((nested) => {
                                            const isNestedExternal = nested.href.startsWith('http');
                                            return (
                                              <li key={nested.label}>
                                                <Link
                                                  href={nested.href}
                                                  target={isNestedExternal ? '_blank' : undefined}
                                                  rel={isNestedExternal ? 'noopener noreferrer' : undefined}
                                                  className="block px-6 py-3 text-[14px] text-[#777777] font-normal no-underline transition-colors duration-150 hover:text-[#ff6600]"
                                                >
                                                  {nested.label}
                                                </Link>
                                              </li>
                                            );
                                          })}
                                        </ul>
                                      </div>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Header Actions */}
            <div className="flex items-center gap-4">
              {/* Cart */}
              <div className="relative group/cart flex items-center h-full">
                <Link
                  href="/cart/"
                  className="relative text-gray-700 transition-colors hover:text-[#ff6600] py-4 flex items-center"
                  aria-label="Shopping cart"
                >
                  <ShoppingCart size={20} />
                  <span className="absolute -right-1.5 top-2.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff6600] text-[10px] font-semibold text-white">
                    0
                  </span>
                </Link>

                {/* Cart Dropdown Modal */}
                <div className="invisible opacity-0 translate-y-2 group-hover/cart:visible group-hover/cart:opacity-100 group-hover/cart:translate-y-0 absolute right-0 top-full w-[300px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-t-[3px] border-[#ff6600] p-8 text-center transition-all duration-300 z-50 cursor-default">
                  <div className="flex justify-center mb-6 text-[#ff6600]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="2" /><circle cx="19" cy="21" r="2" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                  </div>
                  <p className="text-[#888888] italic text-[16px] mb-8">Your cart is empty</p>
                  <Link href="/product-category/abacus-tool" className="block w-full bg-[#ff6600] text-white py-3 text-[15px] font-bold rounded hover:bg-[#e65c00] transition-colors">
                    Browse Shop
                  </Link>
                </div>
              </div>

              {/* Account */}
              <Link
                href="https://xtragenius.com/wp-login.php"
                className="text-gray-700 transition-colors hover:text-[#ff6600]"
                aria-label="My account"
              >
                <UserIcon size={20} />
              </Link>

              {/* CTA Button */}
              <Link
                href="https://student.xtragenius.com/register"
                target="_blank"
                className={cn(
                  'hidden whitespace-nowrap rounded-[5px] bg-[#ff6600] px-5 py-3 text-sm font-semibold text-white no-underline transition-opacity duration-200 hover:opacity-90 lg:inline-block'
                )}
              >
                Check Your Abacus Speed
              </Link>

              {/* Hamburger */}
              <button
                type="button"
                className="flex flex-col items-center justify-center gap-1 text-gray-700 hover:text-[#ff6600] transition-colors cursor-pointer lg:hidden"
                onClick={() => setMobileOpen(true)}
                aria-label="Open sidebar"
              >
                <MenuIcon size={26} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop Overlay */}
      <div
        className={cn(
          "fixed inset-0 !bg-black/40 transition-opacity duration-300 ease-in-out",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ zIndex: 999 }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Sidebar Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[300px] sm:w-[350px] bg-[#001eff] text-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ zIndex: 1000 }}
      >
        {/* Sidebar Header */}
        <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-100 flex-shrink-0">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Image
              src={logo}
              alt="Learning made easy"
              width={160}
              height={49}
              priority
            />
          </Link>
          <button
            type="button"
            className="text-gray-800 hover:text-red-500 transition-colors p-1 bg-transparent border-0 cursor-pointer outline-none flex items-center justify-center"
            onClick={() => setMobileOpen(false)}
            aria-label="Close sidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Sidebar Navigation Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6 select-none">
          <nav className="flex flex-col">
            <ul className="m-0 list-none p-0 flex flex-col gap-1">
              {navItems.map((item) => {
                const hasDropdown = !!item.dropdown;
                const isExpanded = openDropdowns[item.label];

                return (
                  <li key={item.label} className="border-b border-white/10 last:border-b-0 py-1">
                    {hasDropdown ? (
                      <div>
                        <button
                          type="button"
                          className="flex w-full items-center justify-between py-3 text-[16px] font-semibold text-white bg-transparent border-0 outline-none cursor-pointer text-left"
                          onClick={() => toggleDropdown(item.label)}
                        >
                          <span>{item.label}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={cn(
                              "transition-transform duration-200 opacity-85",
                              isExpanded ? "rotate-180" : ""
                            )}
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </button>

                        {/* Accordion Dropdown Content */}
                        <div
                          className={cn(
                            "transition-all duration-300 overflow-hidden",
                            isExpanded ? "max-h-[800px] opacity-100 mb-2" : "max-h-0 opacity-0"
                          )}
                        >
                          <ul className="m-0 list-none pl-4 pr-2 py-1 flex flex-col gap-1.5 border-l border-white/20">
                            {item.dropdown?.map((sub) => {
                              const isSubDropdown = !!sub.dropdown;
                              const isSubExpanded = openDropdowns[`${item.label}-${sub.label}`];

                              return (
                                <li key={sub.label}>
                                  {isSubDropdown ? (
                                    <div>
                                      <button
                                        type="button"
                                        className="flex w-full items-center justify-between py-2 text-[14px] font-medium text-white/90 bg-transparent border-0 outline-none cursor-pointer hover:text-white text-left"
                                        onClick={() => toggleDropdown(`${item.label}-${sub.label}`)}
                                      >
                                        <span>{sub.label}</span>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="14"
                                          height="14"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="2.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className={cn(
                                            "transition-transform duration-200 opacity-80",
                                            isSubExpanded ? "rotate-180" : ""
                                          )}
                                        >
                                          <path d="m6 9 6 6 6-6" />
                                        </svg>
                                      </button>
                                      <div
                                        className={cn(
                                          "transition-all duration-300 overflow-hidden",
                                          isSubExpanded ? "max-h-[300px] opacity-100 my-1" : "max-h-0 opacity-0"
                                        )}
                                      >
                                        <ul className="m-0 list-none pl-4 py-1 flex flex-col gap-1 border-l border-white/10">
                                          {sub.dropdown?.map((nested) => {
                                            const isNestedExternal = nested.href.startsWith("http");
                                            return (
                                              <li key={nested.label}>
                                                <Link
                                                  href={nested.href}
                                                  target={isNestedExternal ? "_blank" : undefined}
                                                  rel={isNestedExternal ? "noopener noreferrer" : undefined}
                                                  className="block py-1.5 text-[13px] text-white/70 hover:text-white transition-colors"
                                                  onClick={() => setMobileOpen(false)}
                                                >
                                                  {nested.label}
                                                </Link>
                                              </li>
                                            );
                                          })}
                                        </ul>
                                      </div>
                                    </div>
                                  ) : (
                                    <Link
                                      href={sub.href}
                                      target={sub.href.startsWith("http") ? "_blank" : undefined}
                                      rel={sub.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                      className="block py-2 text-[14px] text-white/90 hover:text-white transition-colors"
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      {sub.label}
                                    </Link>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        className="block py-3 text-[16px] font-semibold text-white hover:text-white/80 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
