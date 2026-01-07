import { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import CityPageLayout from '@/components/Europe/cities/CityPageLayout'
import { getCityDetails } from '@/components/Europe/cities/cityDetailsData'

export const metadata: Metadata = {
  title: 'Munich Travel Guide | Trawel',
  description: 'Explore Munich - Bavaria\'s vibrant capital. Discover beer halls, fairy-tale castles, and Bavarian traditions.',
}

export default function MunichPage() {
  const cityData = getCityDetails('munich')
  
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
