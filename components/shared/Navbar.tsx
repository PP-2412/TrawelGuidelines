'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Mountain, Anchor, Palmtree, Waves, TreePalm, Flower2, Cherry, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react'

const destinations = [
  { name: 'Europe', href: '/europe', icon: Mountain },
  { name: 'Cruises', href: '/cruises', icon: Anchor },
  { name: 'Thailand', href: '/thailand', icon: Palmtree },
  { name: 'Maldives', href: '/maldives', icon: Waves },
  { name: 'Indonesia', href: '/indonesia', icon: TreePalm },
  { name: 'Vietnam', href: '/vietnam', icon: Flower2 },
  { name: 'Japan', href: '/japan', icon: Cherry },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

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
                {destinations.map((dest) => (
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

            {/* Tablet Navigation */}
            <div className="hidden md:flex lg:hidden items-center gap-1 overflow-x-auto flex-1 mx-2">
              {destinations.slice(0, 5).map((dest) => (
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
          {destinations.map((dest) => (
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
    </>
  )
}
