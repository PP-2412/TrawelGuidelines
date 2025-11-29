'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const reviews = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    text: 'Absolutely exceptional service! Trawel made our European honeymoon unforgettable. Every detail was perfectly arranged, from luxury hotels to private tours.',
    avatar: 'PS',
  },
  {
    name: 'James Mitchell',
    location: 'London, UK',
    rating: 5,
    text: "The Mediterranean cruise exceeded all expectations. The team's attention to detail and 24/7 support made us feel truly cared for throughout our journey.",
    avatar: 'JM',
  },
  {
    name: 'Anika Patel',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'From booking to return, everything was seamless. The best price guarantee saved us significantly, and the curated experiences were world-class.',
    avatar: 'AP',
  },
  {
    name: 'Marco Rossi',
    location: 'Milan, Italy',
    rating: 5,
    text: "I've used many travel agencies, but Trawel stands apart. Their expert knowledge of European destinations is unmatched. Highly recommend!",
    avatar: 'MR',
  },
]

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0)

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const review = reviews[currentReview]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-[#12103d] mb-4">
            What Our <span className="font-accent text-[#d19457]">Guests</span> Say
          </h2>
          <p className="font-sans text-[#44618b] tracking-wider">
            Experiences that speak for themselves
          </p>
        </div>

        {/* Review Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-gray-200 relative overflow-hidden">
            {/* Quote mark */}
            <div className="absolute top-0 right-10 text-[200px] font-display text-[#d19457] opacity-5 leading-none select-none">
              &ldquo;
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Review text */}
            <p className="font-sans text-2xl md:text-3xl leading-relaxed mb-10 text-[#12103d] italic">
              &ldquo;{review.text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#12103d] flex items-center justify-center text-white font-sans font-semibold text-lg">
                {review.avatar}
              </div>
              <div>
                <h4 className="font-display text-xl text-[#12103d]">
                  {review.name}
                </h4>
                <p className="font-sans text-sm text-[#44618b]">{review.location}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prevReview}
              className="w-14 h-14 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6 text-[#44618b] group-hover:text-[#d19457] transition-colors" />
            </button>

            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentReview
                      ? 'w-8 bg-[#12103d]'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="w-14 h-14 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6 text-[#44618b] group-hover:text-[#d19457] transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
