'use client'

import Link from 'next/link'
import { Mountain, Anchor } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#12103d] to-[#43124a] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-display text-xl font-bold">T</span>
            </div>
            <span className="font-display text-3xl tracking-wide text-[#12103d]">
              Trawel
            </span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <Link 
              href="/europe" 
              className="nav-link font-sans text-xs font-medium tracking-[2px] uppercase text-[#12103d] hover:text-[#d19457] transition-colors flex items-center gap-2"
            >
              <Mountain className="w-4 h-4" />
              Europe
            </Link>
            <Link 
              href="/cruises" 
              className="nav-link font-sans text-xs font-medium tracking-[2px] uppercase text-[#12103d] hover:text-[#d19457] transition-colors flex items-center gap-2"
            >
              <Anchor className="w-4 h-4" />
              Cruises
            </Link>
          </div>

          {/* Contact Us */}
          <Link 
            href="#contact" 
            className="font-sans text-xs font-medium tracking-[2px] uppercase px-6 py-3 rounded-full border-2 border-[#12103d] text-[#12103d] hover:bg-[#12103d] hover:text-white transition-all duration-300 hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  )
}
