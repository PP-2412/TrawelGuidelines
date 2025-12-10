import { Mountain, Anchor, Palmtree, Waves, TreePalm, Flower2, Cherry } from 'lucide-react'

const destinations = [
  { name: 'Europe', href: '/europe', icon: Mountain },
  { name: 'Cruises', href: '/cruises', icon: Anchor },
  { name: 'Thailand', href: '/thailand', icon: Palmtree },
  { name: 'Maldives', href: '/maldives', icon: Waves },
  { name: 'Indonesia', href: '/indonesia', icon: TreePalm },
  { name: 'Vietnam', href: '/vietnam', icon: Flower2 },
  { name: 'Japan', href: '/japan', icon: Cherry },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#12103d] via-[#230c33] to-[#43124a] py-10 sm:py-12 md:py-16 safe-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white font-display text-xl sm:text-2xl font-bold">T</span>
              </div>
              <span className="font-display text-2xl sm:text-3xl text-white">Trawel</span>
            </a>
            <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed">
              Your trusted travel partner since 2015. Creating unforgettable journeys across Europe, Asia, and the seven seas.
            </p>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-display text-base sm:text-lg text-white mb-4 sm:mb-6">Destinations</h4>
            <ul className="space-y-2 sm:space-y-3">
              {destinations.slice(0, 4).map((dest) => (
                <li key={dest.name}>
                  <a href={dest.href} className="flex items-center gap-2 font-sans text-xs sm:text-sm text-white/60 hover:text-[#d19457] transition-colors touch-target py-1">
                    <dest.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {dest.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Asia */}
          <div>
            <h4 className="font-display text-base sm:text-lg text-white mb-4 sm:mb-6">Asia</h4>
            <ul className="space-y-2 sm:space-y-3">
              {destinations.slice(2).map((dest) => (
                <li key={dest.name}>
                  <a href={dest.href} className="flex items-center gap-2 font-sans text-xs sm:text-sm text-white/60 hover:text-[#d19457] transition-colors touch-target py-1">
                    <dest.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {dest.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base sm:text-lg text-white mb-4 sm:mb-6">Contact</h4>
            <ul className="space-y-2 sm:space-y-3 font-sans text-xs sm:text-sm text-white/60">
              <li><a href="tel:+917022702220" className="hover:text-[#d19457] transition-colors touch-target inline-block py-1">+91 7022 7022 20</a></li>
              <li><a href="mailto:hello@trawel.com" className="hover:text-[#d19457] transition-colors touch-target inline-block py-1">hello@trawel.com</a></li>
              <li className="pt-2">Bangalore, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-[10px] sm:text-sm text-white/50 text-center sm:text-left">© 2025 Trawel. Your Trusted Travel Partner. All rights reserved.</p>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="#" className="font-sans text-[10px] sm:text-xs text-white/50 hover:text-[#d19457] transition-colors uppercase tracking-wider touch-target py-2">Privacy</a>
              <a href="#" className="font-sans text-[10px] sm:text-xs text-white/50 hover:text-[#d19457] transition-colors uppercase tracking-wider touch-target py-2">Terms</a>
              <a href="#contact" className="font-sans text-[10px] sm:text-xs text-white/50 hover:text-[#d19457] transition-colors uppercase tracking-wider touch-target py-2">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
