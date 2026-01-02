import { Metadata } from 'next'
import CountryLayout from '@/components/Europe/countries/CountryLayout'
import { getCountryData } from '@/components/Europe/countries/countryData'

export const metadata: Metadata = {
  title: 'France Travel Guide | Trawel',
  description: 'Explore France - from Paris\'s iconic Eiffel Tower to the sun-kissed French Riviera. Discover the best cities, attractions, and travel tips.',
}

export default function FrancePage() {
  const countryData = getCountryData('france')
  
  if (!countryData) {
    return <div>Country not found</div>
  }

  return (
    <>
      <Navbar />
      <div className="pt-16 sm:pt-20">
        <CountryLayout country={countryData} />
      </div>
    </>
  )
}
