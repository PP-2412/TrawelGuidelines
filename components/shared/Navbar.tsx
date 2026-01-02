'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Mountain, Anchor, Palmtree, Waves, TreePalm, Flower2, Cherry, Menu, X, ChevronLeft, ChevronRight, ChevronDown, Globe } from 'lucide-react'

const mainDestinations = [
  { name: 'Europe', href: '/europe', icon: Mountain },
  { name: 'Cruises', href: '/cruises', icon: Anchor },
]

const asianDestinations = [
  { name: 'Thailand', href: '/thailand', icon: Palmtree },
  { name: 'Maldives', href: '/maldives', icon: Waves },
  { name: 'Indonesia', href: '/indonesia', icon: TreePalm },
  { name: 'Vietnam', href: '/vietnam', icon: Flower2 },
  { name: 'Japan', href: '/japan', icon: Cherry },
]

// Combined for mobile menu
const allDestinations = [...mainDestinations, ...asianDestinations]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAsiaDropdownOpen, setIsAsiaDropdownOpen] = useState(false)
  const [isMobileAsiaOpen, setIsMobileAsiaOpen] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)
  const asiaDropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Check if any Asian destination is active
  const isAsiaActive = asianDestinations.some(dest => pathname.startsWith(dest.href))

  // Check scroll position for nav arrows
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 5)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5)
    }
  }

  useEffect(() => {
    checkScroll()
    const ref = scrollRef.current
    if (ref) {
      ref.addEventListener('scroll', checkScroll)
      window.addEventListener('resize', checkScroll)
      return () => {
        ref.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
      }
    }
  }, [])

  // Close dropdowns on route change
  useEffect(() => {
    setIsOpen(false)
    setIsAsiaDropdownOpen(false)
  }, [pathname])

  // Close Asia dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (asiaDropdownRef.current && !asiaDropdownRef.current.contains(event.target as Node)) {
        setIsAsiaDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen || isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, isMenuOpen])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -150 : 150, behavior: 'smooth' })
    }
  }

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm safe-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#12103d] to-[#43124a] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white font-display text-lg sm:text-xl font-bold">T</span>
              </div>
              <span className="font-display text-xl sm:text-2xl lg:text-3xl tracking-wide text-[#12103d] hidden xs:block">Trawel</span>
            </a>

            {/* Desktop Navigation - Scrollable */}
            <div className="hidden lg:flex items-center flex-1 max-w-2xl mx-4">
              <button 
                onClick={() => scroll('left')}
                className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#f5f5f5] hover:bg-[#12103d] hover:text-white text-[#12103d] flex items-center justify-center transition-colors mr-2 ${
                  canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div 
                ref={scrollRef}
                className="flex items-center gap-4 xl:gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {/* Main Destinations */}
                {mainDestinations.map((dest) => (
                  <a
                    key={dest.name}
                    href={dest.href}
                    className={`nav-link font-sans text-[10px] xl:text-xs font-medium tracking-[1.5px] xl:tracking-[2px] uppercase transition-all flex items-center gap-1.5 xl:gap-2 flex-shrink-0 whitespace-nowrap relative py-2 ${
                      isActive(dest.href)
                        ? 'text-[#d19457]'
                        : 'text-[#12103d] hover:text-[#d19457]'
                    }`}
                  >
                    <dest.icon className={`w-3.5 h-3.5 xl:w-4 xl:h-4 ${isActive(dest.href) ? 'text-[#d19457]' : ''}`} />
                    {dest.name}
                    {isActive(dest.href) && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d19457] rounded-full" />
                    )}
                  </a>
                ))}

                {/* Asia Dropdown */}
                <div ref={asiaDropdownRef} className="relative flex-shrink-0">
                  <button
                    onClick={() => setIsAsiaDropdownOpen(!isAsiaDropdownOpen)}
                    className={`nav-link font-sans text-[10px] xl:text-xs font-medium tracking-[1.5px] xl:tracking-[2px] uppercase transition-all flex items-center gap-1.5 xl:gap-2 whitespace-nowrap relative py-2 ${
                      isAsiaActive
                        ? 'text-[#d19457]'
                        : 'text-[#12103d] hover:text-[#d19457]'
                    }`}
                  >
                    <Globe className={`w-3.5 h-3.5 xl:w-4 xl:h-4 ${isAsiaActive ? 'text-[#d19457]' : ''}`} />
                    Asia
                    <ChevronDown className={`w-3 h-3 transition-transform ${isAsiaDropdownOpen ? 'rotate-180' : ''}`} />
                    {isAsiaActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d19457] rounded-full" />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {isAsiaDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-[#12103d]/10 py-2 z-50">
                      {asianDestinations.map((dest) => (
                        <a
                          key={dest.name}
                          href={dest.href}
                          className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                            isActive(dest.href)
                              ? 'bg-[#d19457]/10 text-[#d19457]'
                              : 'text-[#12103d] hover:bg-[#f5f5f5]'
                          }`}
                          onClick={() => setIsAsiaDropdownOpen(false)}
                        >
                          <dest.icon className={`w-4 h-4 ${isActive(dest.href) ? 'text-[#d19457]' : 'text-[#43124a]'}`} />
                          <span className="font-sans text-sm font-medium">{dest.name}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <button 
                onClick={() => scroll('right')}
                className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#f5f5f5] hover:bg-[#12103d] hover:text-white text-[#12103d] flex items-center justify-center transition-colors ml-2 ${
                  canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Contact Button - Desktop */}
            <a
              href="#contact"
              className="hidden lg:block font-sans text-[10px] xl:text-xs font-medium tracking-[1.5px] xl:tracking-[2px] uppercase px-4 xl:px-6 py-2.5 xl:py-3 rounded-full border-2 border-[#12103d] text-[#12103d] hover:bg-[#12103d] hover:text-white transition-all duration-300 flex-shrink-0"
            >
              Contact
            </a>

            {/* Menu Button - Desktop */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hidden lg:flex items-center justify-center w-10 h-10 xl:w-11 xl:h-11 rounded-full border-2 border-[#12103d] text-[#12103d] hover:bg-[#12103d] hover:text-white transition-all duration-300 flex-shrink-0"
              aria-label="Open menu"
            >
              <div className="flex flex-col gap-1">
                <span className="w-4 h-0.5 bg-current"></span>
                <span className="w-4 h-0.5 bg-current"></span>
                <span className="w-4 h-0.5 bg-current"></span>
              </div>
            </button>

            {/* Tablet Navigation */}
            <div className="hidden md:flex lg:hidden items-center gap-1 overflow-x-auto flex-1 mx-2">
              {mainDestinations.map((dest) => (
                <a
                  key={dest.name}
                  href={dest.href}
                  className={`font-sans text-[10px] font-medium tracking-wider uppercase px-2 py-1.5 rounded-full transition-all flex-shrink-0 ${
                    isActive(dest.href)
                      ? 'bg-[#d19457] text-white'
                      : 'text-[#12103d] hover:bg-[#f5f5f5]'
                  }`}
                >
                  {dest.name}
                </a>
              ))}
              <button
                onClick={() => setIsAsiaDropdownOpen(!isAsiaDropdownOpen)}
                className={`font-sans text-[10px] font-medium tracking-wider uppercase px-2 py-1.5 rounded-full transition-all flex-shrink-0 flex items-center gap-1 ${
                  isAsiaActive
                    ? 'bg-[#d19457] text-white'
                    : 'text-[#12103d] hover:bg-[#f5f5f5]'
                }`}
              >
                Asia
                <ChevronDown className={`w-3 h-3 transition-transform ${isAsiaDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <a
                href="#contact"
                className="font-sans text-[10px] font-medium tracking-wider uppercase px-2 py-1.5 rounded-full border border-[#12103d] text-[#12103d] flex-shrink-0"
              >
                More
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 -mr-2 touch-target flex items-center justify-center" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed top-16 left-0 right-0 bottom-0 z-50 bg-white transform transition-transform duration-300 ease-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="py-4 px-4 space-y-1 safe-bottom">
          {/* Main Destinations */}
          {mainDestinations.map((dest) => (
            <a
              key={dest.name}
              href={dest.href}
              className={`flex items-center gap-3 py-4 px-4 rounded-xl transition-colors touch-target ${
                isActive(dest.href)
                  ? 'bg-[#d19457]/10 border-l-4 border-[#d19457]'
                  : 'hover:bg-[#f5f5f5] active:bg-[#f5f5f5]'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <dest.icon className={`w-5 h-5 ${isActive(dest.href) ? 'text-[#d19457]' : 'text-[#43124a]'}`} />
              <span className={`font-sans text-base font-medium ${isActive(dest.href) ? 'text-[#d19457]' : 'text-[#12103d]'}`}>
                {dest.name}
              </span>
            </a>
          ))}

          {/* Asia Accordion */}
          <div>
            <button
              onClick={() => setIsMobileAsiaOpen(!isMobileAsiaOpen)}
              className={`w-full flex items-center justify-between gap-3 py-4 px-4 rounded-xl transition-colors touch-target ${
                isAsiaActive
                  ? 'bg-[#d19457]/10 border-l-4 border-[#d19457]'
                  : 'hover:bg-[#f5f5f5] active:bg-[#f5f5f5]'
              }`}
            >
              <div className="flex items-center gap-3">
                <Globe className={`w-5 h-5 ${isAsiaActive ? 'text-[#d19457]' : 'text-[#43124a]'}`} />
                <span className={`font-sans text-base font-medium ${isAsiaActive ? 'text-[#d19457]' : 'text-[#12103d]'}`}>
                  Asia
                </span>
              </div>
              <ChevronDown className={`w-5 h-5 text-[#12103d] transition-transform ${isMobileAsiaOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Asian Countries Submenu */}
            <div className={`overflow-hidden transition-all duration-300 ${isMobileAsiaOpen ? 'max-h-96' : 'max-h-0'}`}>
              <div className="pl-6 space-y-1 mt-1">
                {asianDestinations.map((dest) => (
                  <a
                    key={dest.name}
                    href={dest.href}
                    className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-colors touch-target ${
                      isActive(dest.href)
                        ? 'bg-[#d19457]/10 text-[#d19457]'
                        : 'hover:bg-[#f5f5f5] active:bg-[#f5f5f5] text-[#12103d]'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <dest.icon className={`w-4 h-4 ${isActive(dest.href) ? 'text-[#d19457]' : 'text-[#43124a]'}`} />
                    <span className="font-sans text-sm font-medium">{dest.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-[#12103d]/10">
            <a
              href="#contact"
              className="flex items-center justify-center font-sans text-sm font-medium tracking-[2px] uppercase px-6 py-4 rounded-full bg-[#12103d] text-white touch-target"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="hidden lg:block fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Desktop Right Side Menu */}
      <div 
        className={`hidden lg:block fixed top-0 right-0 bottom-0 z-50 w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#f5f5f5] transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-[#12103d]" />
          </button>

          {/* Menu Header */}
          <div className="mb-8 pt-4">
            <h2 className="font-display text-2xl text-[#12103d] mb-2">Navigation</h2>
            <p className="text-sm text-[#12103d]/60">Explore our destinations</p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            {/* Home */}
            <a
              href="/"
              className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-colors ${
                pathname === '/'
                  ? 'bg-[#d19457]/10 border-l-4 border-[#d19457]'
                  : 'hover:bg-[#f5f5f5]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className={`font-sans text-base font-medium ${pathname === '/' ? 'text-[#d19457]' : 'text-[#12103d]'}`}>
                Home
              </span>
            </a>

            {/* Main Destinations */}
            {mainDestinations.map((dest) => (
              <a
                key={dest.name}
                href={dest.href}
                className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-colors ${
                  isActive(dest.href)
                    ? 'bg-[#d19457]/10 border-l-4 border-[#d19457]'
                    : 'hover:bg-[#f5f5f5]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <dest.icon className={`w-5 h-5 ${isActive(dest.href) ? 'text-[#d19457]' : 'text-[#43124a]'}`} />
                <span className={`font-sans text-base font-medium ${isActive(dest.href) ? 'text-[#d19457]' : 'text-[#12103d]'}`}>
                  {dest.name}
                </span>
              </a>
            ))}

            {/* Asia Section */}
            <div className="pt-2">
              <div className="px-4 py-2">
                <span className="font-sans text-xs font-medium tracking-wider uppercase text-[#12103d]/50">Asia</span>
              </div>
              {asianDestinations.map((dest) => (
                <a
                  key={dest.name}
                  href={dest.href}
                  className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-colors ${
                    isActive(dest.href)
                      ? 'bg-[#d19457]/10 border-l-4 border-[#d19457]'
                      : 'hover:bg-[#f5f5f5]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <dest.icon className={`w-5 h-5 ${isActive(dest.href) ? 'text-[#d19457]' : 'text-[#43124a]'}`} />
                  <span className={`font-sans text-base font-medium ${isActive(dest.href) ? 'text-[#d19457]' : 'text-[#12103d]'}`}>
                    {dest.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="pt-4 mt-4 border-t border-[#12103d]/10">
              <a
                href="#contact"
                className="flex items-center justify-center font-sans text-sm font-medium tracking-[2px] uppercase px-6 py-4 rounded-full bg-[#12103d] text-white hover:bg-[#43124a] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
