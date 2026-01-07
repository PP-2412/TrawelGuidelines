import { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import CityPageLayout from '@/components/Europe/cities/CityPageLayout'
import { getCityDetails } from '@/components/Europe/cities/cityDetailsData'

export const metadata: Metadata = {
  title: 'Venice Travel Guide | Trawel',
  description: 'Explore Venice - the floating city. Discover romantic canals, historic palaces, and authentic Italian cuisine.',
}

export default function VenicePage() {
  const cityData = getCityDetails('venice')
  
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
