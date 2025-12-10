import { MapPin, Mail, Phone, Clock } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, title: 'Our Address', content: 'Trawel, 5,6, AM Lane, Chickpet, Bangalore - 560053' },
  { icon: Mail, title: 'Email Us', content: 'hello@trawel.com', href: 'mailto:hello@trawel.com' },
  { icon: Phone, title: 'Call Us', content: '+91 7022 7022 20', href: 'tel:+917022702220' },
  { icon: Clock, title: 'Opening Hours', content: 'Mon-Sat: 09AM - 07PM' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-[#f5f5f5] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block font-sans text-[10px] sm:text-xs font-medium tracking-[3px] sm:tracking-[4px] uppercase text-[#d19457] mb-3 sm:mb-4">Reach Out</span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-[#12103d] mb-3 sm:mb-4">
            Get in <span className="font-accent text-[#d19457]">Touch</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#44618b]">We&apos;re here to help plan your perfect journey</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-[#12103d]/5 hover:shadow-xl transition-all">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#12103d] to-[#43124a] flex items-center justify-center mb-3 sm:mb-4 shadow-md">
                <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <h3 className="font-display text-base sm:text-lg text-[#12103d] mb-2 sm:mb-3">{info.title}</h3>
              {info.href ? (
                <a href={info.href} className="font-sans text-xs sm:text-sm text-[#44618b] hover:text-[#d19457] transition-colors break-words">{info.content}</a>
              ) : (
                <p className="font-sans text-xs sm:text-sm text-[#44618b] break-words">{info.content}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-[#12103d]/5 max-w-2xl mx-4 sm:mx-auto">
            <h3 className="font-display text-xl sm:text-2xl text-[#12103d] mb-2 sm:mb-3">Ready to Start Your Journey?</h3>
            <p className="font-sans text-sm sm:text-base text-[#44618b] mb-4 sm:mb-6">Our travel experts are standing by to help you plan the trip of a lifetime</p>
            <a
              href="tel:+917022702220"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#d19457] to-[#c77e36] text-white font-sans text-xs sm:text-sm font-bold tracking-[1.5px] sm:tracking-[2px] uppercase px-6 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 touch-target w-full sm:w-auto"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
