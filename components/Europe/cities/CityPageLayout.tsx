'use client'

import CityHero from './CityHero'
import CityDescription from './CityDescription'
import IdealMonths from './IdealMonths'
import TransportationHubs from './TransportationHubs'
import MustVisitCuisine from './MustVisitCuisine'
import AfterDarkSection from './AfterDarkSection'
import { CityDetails } from './cityDetailsData'

interface CityPageLayoutProps {
  city: CityDetails
}

export default function CityPageLayout({ city }: CityPageLayoutProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <CityHero 
        name={city.name}
        country={city.country}
        description={city.description}
        heroImage={city.heroImage}
      />

      {/* Main Content */}
      <div id="city-content">
        {/* Description Section */}
        <CityDescription 
          cityName={city.name}
          longDescription={city.longDescription}
        />

        {/* Ideal Months Section */}
        <IdealMonths 
          cityId={city.id}
          cityName={city.name}
        />

        {/* Transportation Hubs Section */}
        <TransportationHubs 
          cityName={city.name}
          hubs={city.transportHubs}
        />

        {/* Must Visit & Local Cuisine Section */}
        <MustVisitCuisine 
          cityName={city.name}
          mustVisit={city.mustVisit}
          localCuisine={city.localCuisine}
        />

        {/* After Dark Section */}
        <AfterDarkSection 
          cityName={city.name}
          spots={city.afterDark}
        />

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-[#12103d] mb-4">
              Ready to Explore {city.name}?
            </h2>
            <p className="text-[#12103d]/60 font-sans mb-8 max-w-2xl mx-auto">
              Start planning your trip with our curated tours or create your own custom itinerary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`/europe?city=${city.id}`}
                className="inline-flex items-center justify-center px-8 py-3 bg-[#d19457] text-white rounded-full font-medium hover:bg-[#c77e36] transition-colors"
              >
                View {city.name} Tours
              </a>
              <a 
                href="/europe#customize"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#d19457] text-white rounded-full font-medium hover:bg-[#c77e36] transition-colors"
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
