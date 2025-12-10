import { Clock, Shield, Headphones, Award, Globe, UserCheck } from 'lucide-react'

const features = [
  { icon: Clock, title: 'Easy Booking', description: 'Book online within minutes with our streamlined process' },
  { icon: Shield, title: 'Best Price Guarantee', description: "Competitive rates & exclusive deals you won't find elsewhere" },
  { icon: Headphones, title: '24/7 Support', description: 'Round-the-clock assistance anytime during your journey' },
  { icon: Award, title: '4.8★ Rated', description: 'Trusted by thousands of satisfied customers worldwide' },
  { icon: Globe, title: 'Global Network', description: 'Extensive network covering 150+ destinations worldwide' },
  { icon: UserCheck, title: 'Expert Curated', description: 'Handpicked experiences by travel experts with local knowledge' },
]

export default function WhyChoose() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block font-sans text-[10px] sm:text-xs font-medium tracking-[3px] sm:tracking-[4px] uppercase text-[#d19457] mb-3 sm:mb-4">
            The Trawel Difference
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-[#12103d] mb-3 sm:mb-4">
            Why Choose <span className="font-accent text-[#d19457]">Trawel</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#44618b] max-w-xl mx-auto px-4 sm:px-0">
            Your trusted travel partner delivering exceptional experiences since 2015
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-[#12103d]/10">
              <div className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 rounded-full bg-gradient-to-br from-[#12103d] to-[#43124a] flex items-center justify-center mb-4 sm:mb-6 shadow-md">
                <feature.icon className="w-5 h-5 sm:w-6 md:w-7 sm:h-6 md:h-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg sm:text-xl md:text-2xl text-[#12103d] mb-2 sm:mb-3">{feature.title}</h3>
              <p className="font-sans text-xs sm:text-sm text-[#44618b] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
