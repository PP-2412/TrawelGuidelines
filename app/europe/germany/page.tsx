import { Metadata } from 'next'
import CountryLayout from '@/components/Europe/countries/CountryLayout'
import { getCountryData } from '@/components/Europe/countries/countryData'

export const metadata: Metadata = {
  title: 'Germany Travel Guide | Trawel',
  description: 'Explore Germany - from Bavaria\'s fairy-tale castles to Berlin\'s vibrant culture. Discover the best cities, attractions, and travel tips.',
}

export default function GermanyPage() {
  const countryData = getCountryData('germany')
  
  if (!countryData) {
    return <div>Country not found</div>
  }

  return <CountryLayout country={countryData} />
}
