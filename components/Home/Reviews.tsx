'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const reviews = [
  { name: 'Priya Sharma', location: 'Mumbai, India', rating: 5, text: 'Absolutely exceptional service! Trawel made our European honeymoon unforgettable. Every detail was perfectly arranged.', avatar: 'PS', trip: 'Romantic Europe Package' },
  { name: 'James Mitchell', location: 'London, UK', rating: 5, text: "The Mediterranean cruise exceeded all expectations. The team's attention to detail and 24/7 support made us feel truly cared for.", avatar: 'JM', trip: 'Mediterranean Cruise' },
  { name: 'Anika Patel', location: 'Dubai, UAE', rating: 5, text: 'From booking to return, everything was seamless. The Maldives trip was a dream come true. Best price guarantee saved us significantly!', avatar: 'AP', trip: 'Maldives Luxury Escape' },
  { name: 'Marco Rossi', location: 'Milan, Italy', rating: 5, text: "I've used many travel agencies, but Trawel stands apart. Their expert knowledge of Asian destinations is unmatched.", avatar: 'MR', trip: 'Thailand Paradise' },
]

export default function Reviews() {
  const [current, setCurrent] = useState(0)
  const review = reviews[current]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block font-sans text-xs font-medium tracking-[4px] uppercase text-[#d19457] mb-4">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#12103d] mb-4">
            What Our <span className="font-accent text-[#d19457]">Guests</span> Say
          </h2>
          <p className="font-sans text-[#44618b]">Real experiences from real travelers</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-[#12103d]/10 relative overflow-hidden">
            <div className="absolute top-0 right-10 text-[200px] font-display text-[#d19457] opacity-5 leading-none select-none">&ldquo;</div>
            <div className="flex items-center gap-1 mb-6">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#d19457] text-[#d19457]" />
              ))}
            </div>
            <p className="font-sans text-xl md:text-2xl leading-relaxed mb-8 text-[#12103d]">&ldquo;{review.text}&rdquo;</p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#12103d] to-[#43124a] flex items-center justify-center text-white font-sans font-semibold text-lg">
                {review.avatar}
              </div>
              <div>
                <h4 className="font-display text-xl text-[#12103d]">{review.name}</h4>
                <p className="font-sans text-sm text-[#44618b]">{review.location}</p>
                <p className="font-sans text-xs text-[#d19457] mt-1">{review.trip}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={() => setCurrent((current - 1 + reviews.length) % reviews.length)}
              className="w-14 h-14 rounded-full bg-white shadow-lg border border-[#12103d]/10 flex items-center justify-center hover:shadow-xl transition-all hover:scale-105"
            >
              <ChevronLeft className="w-6 h-6 text-[#44618b]" />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === current ? 'w-8 bg-[#12103d]' : 'w-2 bg-[#12103d]/30 hover:bg-[#12103d]/50'}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((current + 1) % reviews.length)}
              className="w-14 h-14 rounded-full bg-white shadow-lg border border-[#12103d]/10 flex items-center justify-center hover:shadow-xl transition-all hover:scale-105"
            >
              <ChevronRight className="w-6 h-6 text-[#44618b]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
