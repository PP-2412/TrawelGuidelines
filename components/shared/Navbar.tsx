'use client'

import { useState, useRef } from 'react'
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
  const scrollRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#12103d] to-[#43124a] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-display text-xl font-bold">T</span>
            </div>
            <span className="font-display text-3xl tracking-wide text-[#12103d] hidden sm:block">Trawel</span>
          </a>

          {/* Desktop Navigation - Scrollable */}
          <div className="hidden md:flex items-center flex-1 max-w-2xl mx-4">
            <button 
              onClick={() => scroll('left')}
              className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f5f5f5] hover:bg-[#12103d] hover:text-white text-[#12103d] flex items-center justify-center transition-colors mr-2"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <div 
              ref={scrollRef}
              className="flex items-center gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {destinations.map((dest) => (
                <a
                  key={dest.name}
                  href={dest.href}
                  className={`nav-link font-sans text-xs font-medium tracking-[2px] uppercase transition-all flex items-center gap-2 flex-shrink-0 whitespace-nowrap relative py-2 ${
                    isActive(dest.href)
                      ? 'text-[#d19457]'
                      : 'text-[#12103d] hover:text-[#d19457]'
                  }`}
                >
                  <dest.icon className={`w-4 h-4 ${isActive(dest.href) ? 'text-[#d19457]' : ''}`} />
                  {dest.name}
                  {/* Active indicator bar */}
                  {isActive(dest.href) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d19457] rounded-full" />
                  )}
                </a>
              ))}
            </div>

            <button 
              onClick={() => scroll('right')}
              className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f5f5f5] hover:bg-[#12103d] hover:text-white text-[#12103d] flex items-center justify-center transition-colors ml-2"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden md:block font-sans text-xs font-medium tracking-[2px] uppercase px-6 py-3 rounded-full border-2 border-[#12103d] text-[#12103d] hover:bg-[#12103d] hover:text-white transition-all duration-300 flex-shrink-0"
          >
            Contact Us
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-xl border-t border-[#12103d]/10">
            <div className="py-4 px-6 space-y-2">
              {destinations.map((dest) => (
                <a
                  key={dest.name}
                  href={dest.href}
                  className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-colors ${
                    isActive(dest.href)
                      ? 'bg-[#d19457]/10 border-l-4 border-[#d19457]'
                      : 'hover:bg-[#f5f5f5]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <dest.icon className={`w-5 h-5 ${isActive(dest.href) ? 'text-[#d19457]' : 'text-[#43124a]'}`} />
                  <span className={`font-sans text-sm font-medium ${isActive(dest.href) ? 'text-[#d19457]' : 'text-[#12103d]'}`}>
                    {dest.name}
                  </span>
                </a>
              ))}
              <div className="pt-4 border-t border-[#12103d]/10">
                <a
                  href="#contact"
                  className="block text-center font-sans text-xs font-medium tracking-[2px] uppercase px-6 py-3 rounded-full bg-[#12103d] text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
