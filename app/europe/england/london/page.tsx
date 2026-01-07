import { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import CityPageLayout from '@/components/Europe/cities/CityPageLayout'
import { getCityDetails } from '@/components/Europe/cities/cityDetailsData'

export const metadata: Metadata = {
  title: 'London Travel Guide | Trawel',
  description: 'Explore London - a global capital. Discover royal heritage, world-class museums, and vibrant neighborhoods.',
}

export default function LondonPage() {
  const cityData = getCityDetails('london')
  
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
