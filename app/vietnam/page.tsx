import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import CountryHero from '@/components/Destinations/CountryHero'
import ToursSection from '@/components/Destinations/ToursSection'
import ResortsSection from '@/components/Destinations/ResortsSection'
import { vietnamData } from '@/components/Destinations/destinationsData'

export default function VietnamPage() {
  return (
    <main>
      <Navbar />
      <CountryHero country={vietnamData} />
      <ToursSection tours={vietnamData.tours} countryName={vietnamData.name} />
      <ResortsSection resorts={vietnamData.resorts} countryName={vietnamData.name} />
      <Footer />
    </main>
  )
}
