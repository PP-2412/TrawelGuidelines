import { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import CityPageLayout from '@/components/Europe/cities/CityPageLayout'
import { getCityDetails } from '@/components/Europe/cities/cityDetailsData'

export const metadata: Metadata = {
  title: 'Paris Travel Guide | Trawel',
  description: 'Explore Paris - the City of Light. Discover iconic landmarks, world-class museums, and romantic experiences.',
}

export default function ParisPage() {
  const cityData = getCityDetails('paris')
  
  if (!cityData) {
    return <div>City not found</div>
  }

  return (
    <>
      <Navbar />
      <div className="pt-16 sm:pt-20">
        <CityPageLayout city={cityData} />
      </div>
      <Footer />
    </>
  )
}
