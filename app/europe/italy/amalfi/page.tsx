import { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import CityPageLayout from '@/components/Europe/cities/CityPageLayout'
import { getCityDetails } from '@/components/Europe/cities/cityDetailsData'

export const metadata: Metadata = {
  title: 'Amalfi Coast Travel Guide | Trawel',
  description: 'Explore the Amalfi Coast - dramatic cliffs, pastel villages, and Mediterranean perfection.',
}

export default function AmalfiPage() {
  const cityData = getCityDetails('amalfi')
  
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
