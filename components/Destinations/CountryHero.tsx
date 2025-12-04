import { Palmtree, Waves, TreePalm, Flower2, Cherry } from 'lucide-react'
import { CountryData } from './destinationsData'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Palmtree,
  Waves,
  TreePalm,
  Flower2,
  Cherry,
}

interface CountryHeroProps {
  country: CountryData
}

export default function CountryHero({ country }: CountryHeroProps) {
  const IconComponent = iconMap[country.icon] || Palmtree

  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${country.heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#12103d]/60 via-[#12103d]/40 to-[#12103d]/80" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#d19457] opacity-10 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#8550a2] opacity-10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-20">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
          <IconComponent className="w-8 h-8 text-[#d19457]" />
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl text-white mb-4">
          Explore <span className="font-accent text-[#d19457]">{country.name}</span>
        </h1>
        
        <p className="font-sans text-xs tracking-[4px] uppercase text-[#d19457] mb-4">
          {country.tagline}
        </p>
        
        <p className="font-sans text-lg text-white/80 max-w-2xl mx-auto">
          {country.description}
        </p>

        {/* Quick nav */}
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="#tours"
            className="px-8 py-3 bg-gradient-to-r from-[#d19457] to-[#c77e36] text-white font-sans text-xs font-bold tracking-[2px] uppercase rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            View Tours
          </a>
          <a
            href="#resorts"
            className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-sans text-xs font-bold tracking-[2px] uppercase rounded-full border border-white/30 hover:bg-white/20 transition-all"
          >
            View Resorts
          </a>
        </div>
      </div>
    </section>
  )
}
