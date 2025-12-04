'use client'

import { useState } from 'react'
import { Mountain, Anchor, Palmtree, Waves, TreePalm, Flower2, Cherry, Menu, X, ChevronDown } from 'lucide-react'

const destinations = [
  { name: 'Europe', href: '#europe', icon: Mountain },
  { name: 'Cruises', href: '#cruises', icon: Anchor },
  { name: 'Thailand', href: '#thailand', icon: Palmtree },
  { name: 'Maldives', href: '#maldives', icon: Waves },
  { name: 'Indonesia', href: '#indonesia', icon: TreePalm },
  { name: 'Vietnam', href: '#vietnam', icon: Flower2 },
  { name: 'Japan', href: '#japan', icon: Cherry },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showMore, setShowMore] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#12103d] to-[#43124a] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-display text-xl font-bold">T</span>
            </div>
            <span className="font-display text-3xl tracking-wide text-[#12103d]">Trawel</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {destinations.slice(0, 3).map((dest) => (
              <a
                key={dest.name}
                href={dest.href}
                className="nav-link font-sans text-xs font-medium tracking-[2px] uppercase text-[#12103d] hover:text-[#d19457] transition-colors flex items-center gap-2"
              >
                <dest.icon className="w-4 h-4" />
                {dest.name}
              </a>
            ))}
            
            {/* More Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowMore(true)}
              onMouseLeave={() => setShowMore(false)}
            >
              <button className="nav-link font-sans text-xs font-medium tracking-[2px] uppercase text-[#12103d] hover:text-[#d19457] transition-colors flex items-center gap-1">
                More
                <ChevronDown className={`w-3 h-3 transition-transform ${showMore ? 'rotate-180' : ''}`} />
              </button>
              
              {showMore && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-[#12103d]/10 py-2 min-w-[180px]">
                  {destinations.slice(3).map((dest) => (
                    <a
                      key={dest.name}
                      href={dest.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-[#f5f5f5] transition-colors"
                    >
                      <dest.icon className="w-4 h-4 text-[#43124a]" />
                      <span className="font-sans text-sm text-[#12103d]">{dest.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden lg:block font-sans text-xs font-medium tracking-[2px] uppercase px-6 py-3 rounded-full border-2 border-[#12103d] text-[#12103d] hover:bg-[#12103d] hover:text-white transition-all duration-300"
          >
            Contact Us
          </a>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-xl border-t border-[#12103d]/10">
            <div className="py-4 px-6 space-y-2">
              {destinations.map((dest) => (
                <a
                  key={dest.name}
                  href={dest.href}
                  className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-[#f5f5f5] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <dest.icon className="w-5 h-5 text-[#43124a]" />
                  <span className="font-sans text-sm font-medium text-[#12103d]">{dest.name}</span>
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
