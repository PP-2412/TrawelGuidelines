import { Metadata } from 'next'
import CountryLayout from '@/components/Europe/countries/CountryLayout'
import { getCountryData } from '@/components/Europe/countries/countryData'

export const metadata: Metadata = {
  title: 'England Travel Guide | Trawel',
  description: 'Explore England - from London\'s royal heritage to quintessential British traditions. Discover the best cities, attractions, and travel tips.',
}

export default function EnglandPage() {
  const countryData = getCountryData('england')
  
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
