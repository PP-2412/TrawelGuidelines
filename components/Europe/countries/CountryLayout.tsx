'use client'

import CountryHero from './CountryHero'
import ThingsToDoSection from './ThingsToDoSection'
import CityCard from './CityCard'
import { CountryData, getCitiesByCountry } from './countryData'

interface CountryLayoutProps {
  country: CountryData
}

export default function CountryLayout({ country }: CountryLayoutProps) {
  const cities = getCitiesByCountry(country.name)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <CountryHero 
        name={country.name}
        tagline={country.tagline}
        heroImage={country.heroImage}
      />

      {/* Main Content */}
      <div id="country-content">
        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-[#12103d] mb-6">
              Discover {country.name}
            </h2>
            <p className="text-[#12103d]/70 font-sans text-lg leading-relaxed">
              {country.description}
            </p>
          </div>
        </section>

        {/* Things To Do Section */}
        <ThingsToDoSection 
          countryName={country.name}
          things={country.thingsToDo}
        />

        {/* Cities Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-[#12103d] mb-4">
                Cities to Explore
              </h2>
              <p className="text-[#12103d]/60 font-sans max-w-2xl mx-auto">
                Discover the best destinations {country.name} has to offer, from iconic landmarks to hidden gems
              </p>
            </div>

            {/* City Cards */}
            <div className="space-y-8">
              {cities.map((city, index) => (
                <CityCard 
                  key={city.id}
                  city={city}
                  index={index}
                />
              ))}
            </div>

            {/* No Cities Message */}
            {cities.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#12103d]/60 font-sans">
                  No cities available for this destination yet. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#12103d] to-[#43124a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Ready to Explore {country.name}?
            </h2>
            <p className="text-white/80 font-sans mb-8 max-w-2xl mx-auto">
              Let us help you plan the perfect trip. Browse our curated tours or create your own custom itinerary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/europe?tab=tours"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#d19457] text-white rounded-full font-medium hover:bg-[#c77e36] transition-colors"
              >
                View All Tours
              </a>
              <a 
                href="/europe?tab=customise"
                className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white border border-white/30 rounded-full font-medium hover:bg-white/20 transition-colors"
              >
                Customize Your Trip
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
