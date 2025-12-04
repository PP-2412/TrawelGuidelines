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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block font-sans text-xs font-medium tracking-[4px] uppercase text-[#d19457] mb-4">
            The Trawel Difference
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[#12103d] mb-4">
            Why Choose <span className="font-accent text-[#d19457]">Trawel</span>
          </h2>
          <p className="font-sans text-[#44618b] max-w-xl mx-auto">
            Your trusted travel partner delivering exceptional experiences since 2015
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card bg-white rounded-2xl p-10 shadow-lg border border-[#12103d]/10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#12103d] to-[#43124a] flex items-center justify-center mb-6 shadow-md">
                <feature.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl text-[#12103d] mb-3">{feature.title}</h3>
              <p className="font-sans text-sm text-[#44618b] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
