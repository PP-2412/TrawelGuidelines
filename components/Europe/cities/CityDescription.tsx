'use client'

interface CityDescriptionProps {
  cityName: string
  longDescription: string
}

export default function CityDescription({ cityName, longDescription }: CityDescriptionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-[#12103d] mb-6">
          Welcome to {cityName}
        </h2>
        <p className="text-[#12103d]/70 font-sans text-lg leading-relaxed">
          {longDescription}
        </p>
      </div>
    </section>
  )
}
