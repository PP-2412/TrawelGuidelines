import { Mountain, Anchor, Palmtree, Waves, TreePalm, Flower2, Cherry } from 'lucide-react'

const destinations = [
  { name: 'Europe', href: '#europe', icon: Mountain },
  { name: 'Cruises', href: '/cruises', icon: Anchor },
  { name: 'Thailand', href: '#thailand', icon: Palmtree },
  { name: 'Maldives', href: '#maldives', icon: Waves },
  { name: 'Indonesia', href: '#indonesia', icon: TreePalm },
  { name: 'Vietnam', href: '#vietnam', icon: Flower2 },
  { name: 'Japan', href: '#japan', icon: Cherry },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#12103d] via-[#230c33] to-[#43124a] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white font-display text-2xl font-bold">T</span>
              </div>
              <span className="font-display text-3xl text-white">Trawel</span>
            </a>
            <p className="font-sans text-sm text-white/60 leading-relaxed">
              Your trusted travel partner since 2015. Creating unforgettable journeys across Europe, Asia, and the seven seas.
            </p>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-display text-lg text-white mb-6">Destinations</h4>
            <ul className="space-y-3">
              {destinations.slice(0, 4).map((dest) => (
                <li key={dest.name}>
                  <a href={dest.href} className="flex items-center gap-2 font-sans text-sm text-white/60 hover:text-[#d19457] transition-colors">
                    <dest.icon className="w-4 h-4" />
                    {dest.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Asia */}
          <div>
            <h4 className="font-display text-lg text-white mb-6">Asia</h4>
            <ul className="space-y-3">
              {destinations.slice(2).map((dest) => (
                <li key={dest.name}>
                  <a href={dest.href} className="flex items-center gap-2 font-sans text-sm text-white/60 hover:text-[#d19457] transition-colors">
                    <dest.icon className="w-4 h-4" />
                    {dest.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-white mb-6">Contact</h4>
            <ul className="space-y-3 font-sans text-sm text-white/60">
              <li><a href="tel:+917022702220" className="hover:text-[#d19457] transition-colors">+91 7022 7022 20</a></li>
              <li><a href="mailto:hello@trawel.com" className="hover:text-[#d19457] transition-colors">hello@trawel.com</a></li>
              <li className="pt-2">Bangalore, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-sm text-white/50">© 2025 Trawel. Your Trusted Travel Partner. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="font-sans text-xs text-white/50 hover:text-[#d19457] transition-colors uppercase tracking-wider">Privacy</a>
              <a href="#" className="font-sans text-xs text-white/50 hover:text-[#d19457] transition-colors uppercase tracking-wider">Terms</a>
              <a href="#contact" className="font-sans text-xs text-white/50 hover:text-[#d19457] transition-colors uppercase tracking-wider">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
