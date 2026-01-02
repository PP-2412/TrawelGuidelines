import { Metadata } from 'next'
import CountryLayout from '@/components/Europe/countries/CountryLayout'
import { getCountryData } from '@/components/Europe/countries/countryData'
import Navbar from '@/components/shared/Navbar'
export const metadata: Metadata = {
  title: 'Italy Travel Guide | Trawel',
  description: 'Explore Italy - from Rome\'s ancient ruins to Venice\'s romantic canals. Discover the best cities, attractions, and travel tips.',
}

export default function ItalyPage() {
  const countryData = getCountryData('italy')
  
  if (!countryData) {
    return <div>Country not found</div>
  }

  return (
    <>
      <Navbar />
      <div className="pt-16 sm:pt-20">
        <CountryLayout country={countryData} />
      </div>
      <Footer />
    </>
  )
}
