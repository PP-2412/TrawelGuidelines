import { MapPin, Mail, Phone, Clock } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, title: 'Our Address', content: 'Trawel, 5,6, AM Lane, Chickpet, Bangalore - 560053' },
  { icon: Mail, title: 'Email Us', content: 'hello@trawel.com', href: 'mailto:hello@trawel.com' },
  { icon: Phone, title: 'Call Us', content: '+91 7022 7022 20', href: 'tel:+917022702220' },
  { icon: Clock, title: 'Opening Hours', content: 'Mon-Sat: 09AM - 07PM' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="inline-block font-sans text-xs font-medium tracking-[4px] uppercase text-[#d19457] mb-4">Reach Out</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#12103d] mb-4">
            Get in <span className="font-accent text-[#d19457]">Touch</span>
          </h2>
          <p className="font-sans text-[#44618b]">We&apos;re here to help plan your perfect journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-[#12103d]/5 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#12103d] to-[#43124a] flex items-center justify-center mb-4 shadow-md">
                <info.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display text-lg text-[#12103d] mb-3">{info.title}</h3>
              {info.href ? (
                <a href={info.href} className="font-sans text-sm text-[#44618b] hover:text-[#d19457] transition-colors">{info.content}</a>
              ) : (
                <p className="font-sans text-sm text-[#44618b]">{info.content}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-3xl p-10 shadow-xl border border-[#12103d]/5 max-w-2xl">
            <h3 className="font-display text-2xl text-[#12103d] mb-3">Ready to Start Your Journey?</h3>
            <p className="font-sans text-[#44618b] mb-6">Our travel experts are standing by to help you plan the trip of a lifetime</p>
            <a
              href="tel:+917022702220"
              className="inline-block bg-gradient-to-r from-[#d19457] to-[#c77e36] text-white font-sans text-sm font-bold tracking-[2px] uppercase px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
